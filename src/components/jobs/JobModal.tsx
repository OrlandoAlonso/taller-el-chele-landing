import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import type { Job } from "@/types/job";
import { getBeforeAfterPairs, getRegularImages } from "@/types/job";
import BeforeAfterSlider from "./BeforeAfterSlider";

interface JobModalProps {
  job: Job | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const JobModal = ({ job, open, onOpenChange }: JobModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Reset image index when job changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [job?.id]);

  if (!job) return null;

  const beforeAfterPairs = getBeforeAfterPairs(job.images);
  const regularImages = getRegularImages(job.images);
  const hasBeforeAfter = beforeAfterPairs.length > 0;
  const hasRegularImages = regularImages.length > 0;
  const hasMultipleRegularImages = regularImages.length > 1;

  const goToPrevious = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? regularImages.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) =>
      prev === regularImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display">{job.title}</DialogTitle>
          <DialogDescription className="flex items-center gap-1 text-muted-foreground">
            <Calendar className="w-4 h-4" />
            {format(new Date(job.published_at), "d 'de' MMMM, yyyy", { locale: es })}
          </DialogDescription>
        </DialogHeader>

        {/* Before/After Sliders */}
        {hasBeforeAfter && (
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              Transformación
            </h4>
            {beforeAfterPairs.map((pair, index) => (
              <BeforeAfterSlider
                key={`pair-${index}`}
                beforeImage={pair.before.url}
                afterImage={pair.after.url}
              />
            ))}
          </div>
        )}

        {/* Regular image carousel */}
        {hasRegularImages && (
          <div className="space-y-2">
            {hasBeforeAfter && (
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mt-4">
                Galería
              </h4>
            )}
            <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
              <img
                src={regularImages[currentImageIndex]?.url}
                alt={`${job.title} - Imagen ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              
              {/* Navigation arrows */}
              {hasMultipleRegularImages && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                    onClick={goToPrevious}
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                    onClick={goToNext}
                  >
                    <ChevronRight className="w-6 h-6" />
                  </Button>
                </>
              )}

              {/* Image indicators */}
              {hasMultipleRegularImages && (
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                  {regularImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex
                          ? "bg-white w-4"
                          : "bg-white/50 hover:bg-white/80"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Description */}
        {job.description && (
          <div className="mt-4">
            <p className="text-foreground whitespace-pre-wrap">{job.description}</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default JobModal;
