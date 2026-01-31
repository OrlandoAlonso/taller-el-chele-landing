import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "El nombre es requerido" })
    .max(100, { message: "El nombre debe tener menos de 100 caracteres" }),
  email: z
    .string()
    .trim()
    .email({ message: "Correo electrónico inválido" })
    .max(255, { message: "El correo debe tener menos de 255 caracteres" }),
  phone: z
    .string()
    .trim()
    .min(8, { message: "El teléfono debe tener 8 dígitos" })
    .max(8, { message: "El teléfono debe tener 8 dígitos" })
    .regex(/^\d{8}$/, { message: "El teléfono debe contener solo 8 dígitos" }),
  message: z
    .string()
    .trim()
    .min(1, { message: "El mensaje es requerido" })
    .max(1000, { message: "El mensaje debe tener menos de 1000 caracteres" }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactModal = ({ open, onOpenChange }: ContactModalProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);

    // Build WhatsApp message
    const whatsappMessage = encodeURIComponent(
      `¡Hola! Mi nombre es ${data.name}.\n\nCorreo: ${data.email}\nTeléfono: ${data.phone}\n\nMensaje: ${data.message}`
    );
    const whatsappUrl = `https://wa.me/+50577725113?text=${whatsappMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    toast({
      title: "¡Mensaje preparado!",
      description: "Se abrirá WhatsApp para enviar tu mensaje.",
    });

    setIsSubmitting(false);
    form.reset();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display">Contáctanos</DialogTitle>
          <DialogDescription>
            Completa el formulario y te responderemos por WhatsApp.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre</FormLabel>
                  <FormControl>
                    <Input placeholder="Tu nombre" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Correo electrónico</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="tu@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Teléfono</FormLabel>
                  <FormControl>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-muted-foreground text-sm">
                        +505
                      </span>
                      <Input 
                        type="tel" 
                        placeholder="8888 8888" 
                        className="rounded-l-none"
                        maxLength={9}
                        value={field.value ? field.value.replace(/(\d{4})(\d{0,4})/, '$1 $2').trim() : ''}
                        onChange={(e) => {
                          const rawValue = e.target.value.replace(/\D/g, '').slice(0, 8);
                          field.onChange(rawValue);
                        }}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mensaje</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="¿En qué podemos ayudarte?"
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              <Send className="w-4 h-4 mr-2" />
              {isSubmitting ? "Enviando..." : "Enviar por WhatsApp"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
