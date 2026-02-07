import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useJobs } from "@/hooks/useJobs";
import JobCard from "@/components/jobs/JobCard";
import JobModal from "@/components/jobs/JobModal";
import { Loader2 } from "lucide-react";
import type { Job } from "@/types/job";

const Trabajos = () => {
  const { jobs, isLoading } = useJobs();
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="section-container">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Nuestros Trabajos
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mira algunos de los trabajos que hemos realizado. Cada proyecto refleja nuestro compromiso con la calidad y excelencia.
            </p>
          </div>

          {/* Loading state */}
          {isLoading && (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          )}

          {/* Empty state */}
          {!isLoading && jobs.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                Aún no hay trabajos publicados. ¡Pronto compartiremos nuestros proyectos!
              </p>
            </div>
          )}

          {/* Jobs grid */}
          {!isLoading && jobs.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobs.map((job) => (
                <JobCard
                  key={job.id}
                  job={job}
                  onClick={() => setSelectedJob(job)}
                />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />

      {/* Job detail modal */}
      <JobModal
        job={selectedJob}
        open={!!selectedJob}
        onOpenChange={(open) => !open && setSelectedJob(null)}
      />
    </div>
  );
};

export default Trabajos;
