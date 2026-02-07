import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Image as ImageIcon } from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import type { Job } from "@/pages/Trabajos";

interface JobCardProps {
  job: Job;
  onClick: () => void;
}

const JobCard = ({ job, onClick }: JobCardProps) => {
  const firstImage = job.images[0];

  return (
    <Card 
      className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card border-border"
      onClick={onClick}
    >
      {/* Image */}
      <div className="aspect-video relative overflow-hidden bg-muted">
        {firstImage ? (
          <img
            src={firstImage.url}
            alt={job.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <ImageIcon className="w-12 h-12 text-muted-foreground/50" />
          </div>
        )}
        {/* Image count badge */}
        {job.images.length > 1 && (
          <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
            <ImageIcon className="w-3 h-3" />
            {job.images.length}
          </div>
        )}
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-lg text-foreground mb-2 line-clamp-1 group-hover:text-primary transition-colors">
          {job.title}
        </h3>
        {job.description && (
          <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
            {job.description}
          </p>
        )}
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Calendar className="w-3 h-3" />
          <span>
            {format(new Date(job.published_at), "d 'de' MMMM, yyyy", { locale: es })}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCard;
