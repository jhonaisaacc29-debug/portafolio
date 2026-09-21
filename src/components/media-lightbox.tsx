import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function MediaLightbox({ images, title, startIndex = 0, onClose }: { images: string[]; title: string; startIndex?: number; onClose: () => void }) {
  const [index, setIndex] = useState(startIndex);
  const previous = () => setIndex((current) => (current - 1 + images.length) % images.length);
  const next = () => setIndex((current) => (current + 1) % images.length);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, images.length]);

  return (
    <div role="dialog" aria-modal="true" aria-label={`Visor: ${title}`} className="fixed inset-0 z-[80] grid place-items-center bg-foreground p-4 text-background md:p-10">
      <Button variant="ghost" size="icon" onClick={onClose} aria-label="Cerrar visor" className="absolute right-4 top-4 text-background hover:text-primary"><X /></Button>
      {images.length > 1 && <Button variant="ghost" size="icon" onClick={previous} aria-label="Imagen anterior" className="absolute left-3 top-1/2 z-10 text-background hover:text-primary md:left-8"><ChevronLeft /></Button>}
      <img src={images[index]} alt={`${title} — vista ${index + 1}`} className="max-h-[82svh] max-w-full object-contain" />
      {images.length > 1 && <Button variant="ghost" size="icon" onClick={next} aria-label="Imagen siguiente" className="absolute right-3 top-1/2 z-10 text-background hover:text-primary md:right-8"><ChevronRight /></Button>}
      <span className="absolute bottom-4 font-mono text-[10px] uppercase">{String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span>
    </div>
  );
}