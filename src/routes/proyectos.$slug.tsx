import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { projects } from "@/lib/portfolio-data";
import { MediaLightbox } from "@/components/media-lightbox";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/proyectos/$slug")({
  loader: ({ params }) => {
    const project = projects.find((item) => item.slug === params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.title} | Isaac Espinoza`
          : "Proyecto no disponible | Isaac Espinoza",
      },
      {
        name: "description",
        content: loaderData?.description ?? "Proyecto visual de Isaac Espinoza.",
      },
      {
        property: "og:title",
        content: loaderData ? `${loaderData.title} | Isaac Espinoza` : "Proyecto no disponible",
      },
      {
        property: "og:description",
        content: loaderData?.description ?? "Proyecto visual de Isaac Espinoza.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectPage,
});

function ProjectPage() {
  const project = Route.useLoaderData();
  const [active, setActive] = useState<number | null>(null);
  const chapters = [
    project.overview && { title: "Panorama", text: project.overview },
    project.concept && { title: "Concepto", text: project.concept },
    { title: "Aplicaciones", text: project.description },
  ].filter((chapter): chapter is { title: string; text: string } => Boolean(chapter));
  return (
    <main className="case-study">
      <section className="case-hero">
        <div className="case-heading">
          <Link
            to="/proyectos"
            className="inline-flex items-center gap-2 font-mono text-[10px] uppercase"
          >
            <ArrowLeft className="size-3" /> Archivo
          </Link>
          <div>
            <span className="section-number">Caso de estudio / {project.category}</span>
            <h1>{project.title}</h1>
          </div>
          <div className="case-meta">
            {project.year && (
              <div>
                <span>Año</span>
                <p>{project.year}</p>
              </div>
            )}
            <div>
              <span>Rol</span>
              <p>{project.role ?? "Diseño gráfico"}</p>
            </div>
            <div>
              <span>Categoría</span>
              <p>{project.category}</p>
            </div>
          </div>
        </div>
        <div className="case-cover">
          <img
            src={project.coverImage}
            alt={`Portada del proyecto ${project.title}`}
            decoding="async"
          />
        </div>
      </section>
      <section className="case-chapters">
        {chapters.map((chapter) => (
          <Reveal key={chapter.title}>
            <article>
              <h2>{chapter.title}</h2>
              <p>{chapter.text}</p>
            </article>
          </Reveal>
        ))}
      </section>
      <section className="case-gallery">
        <header>
          <span className="section-number">Resultado final</span>
          <h2>Galería visual</h2>
          <p>Las piezas finales proporcionadas, presentadas sin alterar su proporción.</p>
        </header>
        <div>
          {project.images.map((image, index) => (
            <Reveal
              key={image}
              variant="image"
              className={
                index % 3 === 0
                  ? "case-image-wide"
                  : index % 3 === 1
                    ? "case-image-small"
                    : "case-image-offset"
              }
            >
              <button type="button" onClick={() => setActive(index)}>
                <img
                  src={image}
                  alt={`${project.title} — pieza ${index + 1}`}
                  loading="lazy"
                  decoding="async"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </section>
      {active !== null && (
        <MediaLightbox
          images={project.images}
          title={project.title}
          startIndex={active}
          onClose={() => setActive(null)}
        />
      )}
    </main>
  );
}
