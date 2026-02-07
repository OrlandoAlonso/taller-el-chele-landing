export interface JobImage {
  id: string;
  url: string;
  sort_order: number;
  image_type: "regular" | "before" | "after";
}

export interface Job {
  id: string;
  title: string;
  description: string | null;
  published_at: string;
  images: JobImage[];
}

// Helper to get before/after pairs from job images
export const getBeforeAfterPairs = (images: JobImage[]) => {
  const beforeImages = images.filter((img) => img.image_type === "before");
  const afterImages = images.filter((img) => img.image_type === "after");
  
  // Match by sort_order
  const pairs: { before: JobImage; after: JobImage }[] = [];
  
  beforeImages.forEach((beforeImg) => {
    const matchingAfter = afterImages.find(
      (afterImg) => afterImg.sort_order === beforeImg.sort_order
    );
    if (matchingAfter) {
      pairs.push({ before: beforeImg, after: matchingAfter });
    }
  });
  
  return pairs;
};

// Helper to get regular images
export const getRegularImages = (images: JobImage[]) => {
  return images.filter((img) => img.image_type === "regular");
};
