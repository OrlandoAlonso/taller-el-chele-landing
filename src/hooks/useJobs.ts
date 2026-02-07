import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Job } from "@/pages/Trabajos";

export const useJobs = () => {
  const { data: jobs = [], isLoading, error } = useQuery({
    queryKey: ["jobs"],
    queryFn: async (): Promise<Job[]> => {
      // Fetch jobs
      const { data: jobsData, error: jobsError } = await supabase
        .from("jobs")
        .select("*")
        .order("published_at", { ascending: false });

      if (jobsError) throw jobsError;

      // Fetch images for all jobs
      const { data: imagesData, error: imagesError } = await supabase
        .from("job_images")
        .select("*")
        .order("sort_order", { ascending: true });

      if (imagesError) throw imagesError;

      // Map images to jobs
      const jobsWithImages = (jobsData || []).map((job) => ({
        id: job.id,
        title: job.title,
        description: job.description,
        published_at: job.published_at,
        images: (imagesData || [])
          .filter((img) => img.job_id === job.id)
          .map((img) => ({
            id: img.id,
            url: img.url,
            sort_order: img.sort_order,
          })),
      }));

      return jobsWithImages;
    },
  });

  return { jobs, isLoading, error };
};
