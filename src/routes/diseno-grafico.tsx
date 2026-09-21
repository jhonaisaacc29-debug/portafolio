import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MediaLightbox } from "@/components/media-lightbox";
import { designCategories, projects } from "@/lib/portfolio-data";
import { newDesignPieces } from "@/lib/design-data";
import { Reveal } from "@/components/reveal";
export const Route = createFileRoute("/diseno-grafico")({
  head: () => ({
    meta: [
      { title: "Diseño gráfico | Isaac Espinoza" },
      {
        name: "description",
        content:
          "Selección real de identidad visual, piezas impresas, publicidad y contenido digital.",
      },
      { property: "og:title", content: "Diseño gráfico | Isaac Espinoza" },
      {
        property: "og:description",
        content: "Archivo editorial de diseño gráfico de Isaac Espinoza.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});
const pieces = Array.from(
  new Map(
    [
      ...newDesignPieces,
      ...projects.flatMap((project) =>
        project.images.map((image) => ({
          image,
          title: project.title,
          category: project.category,
        })),
      ),
    ].map((piece) => [piece.image, piece]),
  ).values(),
);
function Page() {
  const [active, setActive] = useState<number | null>(null);
  const activePiece = active === null ? undefined : pieces[active];
  return (
    <main>
      <section className="design-intro">
        <span className="section-number">02 / Disciplina</span>
        <h1>
          Diseño
          <br />
          gráfico
        </h1>
        <p>
          Identidad visual, impresos y contenido comercial como un archivo abierto de piezas reales.
        </p>
      </section>
      <div className="marquee border-y border-foreground py-4">
        <div className="marquee-track font-display text-3xl uppercase">
          <span>
            Identidad visual · Publicidad · Impresos · Contenido digital · Dirección de arte ·{" "}
          </span>
          <span aria-hidden="true">
            Identidad visual · Publicidad · Impresos · Contenido digital · Dirección de arte ·{" "}
          </span>
        </div>
      </div>
      <div className="design-categories" aria-label="Áreas de diseño">
        {designCategories.map((category) => (
          <span key={category}>{category}</span>
        ))}
      </div>
      <section className="design-wall">
        {pieces.map((piece, index) => (
          <Reveal
            key={`${piece.title}-${index}`}
            variant="image"
            delay={(index % 3) * 70}
            className={
              index % 6 === 0
                ? "design-piece-wide"
                : index % 6 === 1
                  ? "design-piece-tall"
                  : index % 6 === 2
                    ? "design-piece-small"
                    : ""
            }
          >
            <button
              type="button"
              onClick={() => setActive(index)}
              className="group block w-full text-left"
            >
              <div>
                <img
                  src={piece.image}
                  alt={`${piece.title} — ${piece.category}`}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p>
                <span>{piece.title}</span>
                <span>{piece.category}</span>
              </p>
            </button>
          </Reveal>
        ))}
      </section>
      {activePiece && (
        <MediaLightbox
          images={pieces.map((piece) => piece.image)}
          title={activePiece.title}
          startIndex={active ?? 0}
          onClose={() => setActive(null)}
        />
      )}
    </main>
  );
}
