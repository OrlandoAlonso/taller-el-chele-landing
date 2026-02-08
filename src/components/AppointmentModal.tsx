import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { CalendarIcon, Clock } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { phoneWhatsApp } from "@/constants/phone";

// Generate available time slots based on day of week
const getAvailableTimeSlots = (date: Date | undefined) => {
  if (!date) return [];

  const dayOfWeek = date.getDay();
  const slots: string[] = [];

  // Sunday (0) - closed
  if (dayOfWeek === 0) return [];

  // Saturday (6) - 08:00 to 12:00
  if (dayOfWeek === 6) {
    for (let hour = 8; hour < 12; hour++) {
      slots.push(`${hour.toString().padStart(2, "0")}:00`);
      slots.push(`${hour.toString().padStart(2, "0")}:30`);
    }
    return slots;
  }

  // Monday to Friday (1-5) - 08:00 to 17:30
  for (let hour = 8; hour < 17; hour++) {
    slots.push(`${hour.toString().padStart(2, "0")}:00`);
    slots.push(`${hour.toString().padStart(2, "0")}:30`);
  }
  slots.push("17:00");
  slots.push("17:30");

  return slots;
};

// Check if a date is a valid business day
const isBusinessDay = (date: Date) => {
  const day = date.getDay();
  return day !== 0; // Not Sunday
};

const appointmentSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "El nombre es requerido" })
    .max(100, { message: "El nombre debe tener menos de 100 caracteres" }),
  phone: z
    .string()
    .trim()
    .min(8, { message: "El teléfono debe tener 8 dígitos" })
    .max(8, { message: "El teléfono debe tener 8 dígitos" })
    .regex(/^\d{8}$/, { message: "El teléfono debe contener solo 8 dígitos" }),
  date: z.date({
    required_error: "La fecha es requerida",
  }),
  time: z.string().min(1, { message: "La hora es requerida" }),
});

type AppointmentFormValues = z.infer<typeof appointmentSchema>;

interface AppointmentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AppointmentModal = ({ open, onOpenChange }: AppointmentModalProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const form = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      name: "",
      phone: "",
      time: "",
    },
  });

  const selectedDate = form.watch("date");
  const availableSlots = getAvailableTimeSlots(selectedDate);

  // Reset time when date changes and close calendar
  const handleDateChange = (
    date: Date | undefined,
    onChange: (date: Date | undefined) => void,
  ) => {
    onChange(date);
    form.setValue("time", "");
    if (date) {
      setIsCalendarOpen(false);
    }
  };

  const onSubmit = async (data: AppointmentFormValues) => {
    setIsSubmitting(true);

    const formattedDate = format(data.date, "EEEE d 'de' MMMM 'de' yyyy", {
      locale: es,
    });

    // Build WhatsApp message
    const whatsappMessage = encodeURIComponent(
      `¡Hola! Me gustaría agendar una cita.\n\n` +
        `*Datos de la cita:*\n` +
        `    Nombre: ${data.name}\n` +
        `    Teléfono: ${data.phone}\n` +
        `    Fecha: ${formattedDate}\n` +
        `    Hora: ${data.time}\n\n` +
        `*¡Gracias!*`,
    );
    const whatsappUrl = `https://wa.me/${phoneWhatsApp}?text=${whatsappMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    toast({
      title: "¡Cita preparada!",
      description: "Se abrirá WhatsApp para confirmar tu cita.",
    });

    setIsSubmitting(false);
    form.reset();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display">
            Agenda tu Cita
          </DialogTitle>
          <DialogDescription>
            Selecciona fecha y hora para tu cita. Te confirmaremos por WhatsApp.
          </DialogDescription>
        </DialogHeader>

        <div className="text-sm text-muted-foreground mb-4 p-3 bg-muted/50 rounded-lg">
          <p className="font-medium mb-1">Horarios de atención:</p>
          <p>
            Lunes a Viernes:{" "}
            <span className="text-green-400">8:00 AM - 5:30 PM</span>
          </p>
          <p>
            Sábados: <span className="text-green-400">8:00 AM - 12:00 PM</span>
          </p>
          <p>
            Domingos: <span className="text-red-400">Cerrado</span>
          </p>
        </div>

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
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Teléfono *</FormLabel>
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
                        value={
                          field.value
                            ? field.value
                                .replace(/(\d{4})(\d{0,4})/, "$1 $2")
                                .trim()
                            : ""
                        }
                        onChange={(e) => {
                          const rawValue = e.target.value
                            .replace(/\D/g, "")
                            .slice(0, 8);
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
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Fecha</FormLabel>
                  <Popover
                    open={isCalendarOpen}
                    onOpenChange={setIsCalendarOpen}
                  >
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground",
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP", { locale: es })
                          ) : (
                            <span>Selecciona una fecha</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={(date) =>
                          handleDateChange(date, field.onChange)
                        }
                        disabled={(date) => {
                          const today = new Date();
                          today.setHours(0, 0, 0, 0);
                          return date < today || !isBusinessDay(date);
                        }}
                        initialFocus
                        className={cn("p-3 pointer-events-auto")}
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hora</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                    disabled={!selectedDate || availableSlots.length === 0}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          placeholder={
                            !selectedDate
                              ? "Primero selecciona una fecha"
                              : availableSlots.length === 0
                                ? "Sin horarios disponibles"
                                : "Selecciona una hora"
                          }
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {availableSlots.map((slot) => (
                        <SelectItem key={slot} value={slot}>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            {slot}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              <CalendarIcon className="w-4 h-4 mr-2" />
              {isSubmitting ? "Procesando..." : "Confirmar Cita"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentModal;
