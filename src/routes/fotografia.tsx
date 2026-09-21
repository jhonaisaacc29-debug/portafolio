import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MediaLightbox } from "@/components/media-lightbox";
import { photoCategories, photography } from "@/lib/photo-data";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/fotografia")({
  head: () => ({
    meta: [
      { title: "Fotografía | Isaac Espinoza" },
      {
        name: "description",
        content: "Portafolio fotográfico real de eventos, sesiones, urbano y colaciones.",
      },
      { property: "og:title", content: "Fotografía | Isaac Espinoza" },
      {
        property: "og:description",
        content: "Historias capturadas en un instante por Isaac Espinoza.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PhotographyPage,
});

function PhotographyPage() {
  const [category, setCategory] = useState("Todos");
  const [active, setActive] = useState<number | null>(null);
  const visible =
    category === "Todos" ? photography : photography.filter((photo) => photo.category === category);
  const activePhoto = active === null ? undefined : visible[active];
  return (
    <main className="bg-foreground text-background">
      <section className="photo-intro">
        <div>
          <span className="font-mono text-[10px] uppercase text-primary">
            03 / Mirada fotográfica
          </span>
          <h1>Fotografía</h1>
          <p>
            Historias capturadas en un instante. Eventos, retratos y momentos cotidianos observados
            desde una mirada sensible.
          </p>
        </div>
        <button type="button" onClick={() => setActive(0)} className="photo-cover">
          <img
            src={visible[0]?.src}
            alt={visible[0]?.alt ?? "Fotografía de Isaac Espinoza"}
            decoding="async"
          />
          <span>Ver galería</span>
        </button>
      </section>
      <div className="photo-filters">
        {photoCategories.map((item) => (
          <button
            type="button"
            key={item}
            onClick={() => {
              setCategory(item);
              setActive(null);
            }}
            className={category === item ? "is-active" : ""}
          >
            {item}
          </button>
        ))}
      </div>
      <section className="photo-sequence">
        {visible.map((photo, index) => (
          <Reveal
            key={photo.src}
            variant="image"
            delay={(index % 3) * 80}
            className={
              index % 5 === 0
                ? "photo-wide"
                : index % 5 === 1
                  ? "photo-portrait"
                  : index % 5 === 2
                    ? "photo-offset"
                    : ""
            }
          >
            <button
              type="button"
              onClick={() => setActive(index)}
              className="group block w-full text-left"
            >
              <div>
                <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" />
              </div>
              <span>
                {String(index + 1).padStart(2, "0")} / {photo.category}
              </span>
            </button>
          </Reveal>
        ))}
      </section>
      {activePhoto && (
        <MediaLightbox
          images={visible.map((photo) => photo.src)}
          title={activePhoto.category}
          startIndex={active ?? 0}
          onClose={() => setActive(null)}
        />
      )}
    </main>
  );
}
