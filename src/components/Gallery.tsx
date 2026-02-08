import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useIsMobile } from "@/hooks/use-mobile";

const galleryImages = [
  {
    src: "https://junxujvixlekdoidggom.supabase.co/storage/v1/object/public/job-images/banners/imagen_1.jpg",
    alt: "Imagen 1",
  },
  {
    src: "https://junxujvixlekdoidggom.supabase.co/storage/v1/object/public/job-images/banners/imagen_2.jpg",
    alt: "Imagen 2",
  },
  {
    src: "https://junxujvixlekdoidggom.supabase.co/storage/v1/object/public/job-images/banners/imagen_3.jpg",
    alt: "Imagen 3",
  },
  {
    src: "https://junxujvixlekdoidggom.supabase.co/storage/v1/object/public/job-images/banners/imagen_4.jpg",
    alt: "Imagen 4",
  },
  {
    src: "https://junxujvixlekdoidggom.supabase.co/storage/v1/object/public/job-images/banners/imagen_5.jpg",
    alt: "Imagen 5",
  },
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const isMobile = useIsMobile();

  const minSwipeDistance = 50;

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleImageClick = () => {
    if (isMobile || window.innerWidth < 1024) {
      setIsLightboxOpen(true);
    }
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  return (
    <>
      <section
        id="taller"
        className="min-h-screen section-padding bg-background flex flex-col justify-center"
      >
        <div className="section-container">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Nuestro trabajo
            </span>
            <h2 className="section-title text-center">Galería</h2>
            <p className="section-subtitle mx-auto text-center">
              Conoce nuestras instalaciones y mira la calidad de nuestro
              trabajo.
            </p>
          </div>

          {/* Carousel */}
          <div className="relative max-w-5xl mx-auto">
            {/* Main Image */}
            <div
              className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-muted cursor-pointer lg:cursor-default"
              onClick={handleImageClick}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <img
                src={galleryImages[currentIndex].src}
                alt={galleryImages[currentIndex].alt}
                className="w-full h-full object-cover transition-opacity duration-500"
              />

              {/* Navigation Arrows - Hidden on mobile, visible on desktop */}
              <Button
                variant="secondary"
                size="icon"
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background shadow-lg hidden lg:flex"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background shadow-lg hidden lg:flex"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>

              {/* Mobile hint */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 lg:hidden">
                <span className="text-xs text-white/80 bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                  Toca para ampliar
                </span>
              </div>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 mt-6">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Thumbnails */}
            <div className="hidden md:flex justify-center gap-3 mt-6">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative w-20 h-14 rounded-lg overflow-hidden transition-all duration-300 ${
                    index === currentIndex
                      ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Dialog open={isLightboxOpen} onOpenChange={setIsLightboxOpen}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-none [&>button]:hidden">
          <div
            className="relative w-full h-[80vh] flex items-center justify-center"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Close button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-4 right-4 z-50 text-white hover:bg-white/20 rounded-full"
            >
              <X className="w-6 h-6" />
            </Button>

            {/* Navigation Arrows */}
            <Button
              variant="ghost"
              size="icon"
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20 rounded-full h-12 w-12"
            >
              <ChevronLeft className="w-8 h-8" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20 rounded-full h-12 w-12"
            >
              <ChevronRight className="w-8 h-8" />
            </Button>

            {/* Image */}
            <img
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              className="max-w-full max-h-full object-contain"
            />

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm">
              {currentIndex + 1} / {galleryImages.length}
            </div>

            {/* Swipe hint */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 text-xs">
              Desliza para navegar
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Gallery;
