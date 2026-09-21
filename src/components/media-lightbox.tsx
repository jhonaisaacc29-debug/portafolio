import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

export function MediaLightbox({
  images,
  title,
  startIndex = 0,
  onClose,
}: {
  images: string[];
  title: string;
  startIndex?: number;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(startIndex);
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchStart = useRef<number | null>(null);
  const previous = () => setIndex((current) => (current - 1 + images.length) % images.length);
  const next = () => setIndex((current) => (current + 1) % images.length);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose, images.length]);

  const handleTouchEnd = (event: React.TouchEvent) => {
    const start = touchStart.current;
    const end = event.changedTouches[0]?.clientX;
    touchStart.current = null;
    if (start === null || end === undefined || Math.abs(end - start) < 45) return;
    if (end < start) next();
    else previous();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Visor: ${title}`}
      className="fixed inset-0 z-[80] grid touch-pan-y place-items-center bg-foreground p-4 text-background md:p-10"
      onTouchStart={(event) => {
        touchStart.current = event.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={handleTouchEnd}
    >
      <Button
        ref={closeRef}
        variant="ghost"
        size="icon"
        onClick={onClose}
        aria-label="Cerrar visor"
        className="absolute right-4 top-4 text-background hover:text-primary"
      >
        <X />
      </Button>
      {images.length > 1 && (
        <Button
          variant="ghost"
          size="icon"
          onClick={previous}
          aria-label="Imagen anterior"
          className="absolute left-3 top-1/2 z-10 text-background hover:text-primary md:left-8"
        >
          <ChevronLeft />
        </Button>
      )}
      <img
        key={images[index]}
        src={images[index]}
        alt={`${title} — vista ${index + 1}`}
        className="animate-fade-in max-h-[82svh] max-w-full object-contain"
        decoding="async"
      />
      {images.length > 1 && (
        <Button
          variant="ghost"
          size="icon"
          onClick={next}
          aria-label="Imagen siguiente"
          className="absolute right-3 top-1/2 z-10 text-background hover:text-primary md:right-8"
        >
          <ChevronRight />
        </Button>
      )}
      <div className="absolute bottom-4 flex items-center gap-4 font-mono text-[10px] uppercase">
        <span>
          {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
        </span>
        {images.length > 1 && <span className="text-background/60">Deslizá para navegar</span>}
      </div>
    </div>
  );
}
