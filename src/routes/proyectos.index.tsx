import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/lib/portfolio-data";
import { Reveal } from "@/components/reveal";
import { EditorialProject } from "@/components/editorial-project";
export const Route = createFileRoute("/proyectos/")({
  head: () => ({
    meta: [
      { title: "Proyectos | Isaac Espinoza" },
      {
        name: "description",
        content: "Casos y piezas reales de identidad visual, diseño gráfico y producción visual.",
      },
      { property: "og:title", content: "Proyectos | Isaac Espinoza" },
      {
        property: "og:description",
        content: "Archivo seleccionado de proyectos visuales de Isaac Espinoza.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});
const layouts = [
  "md:col-span-8",
  "md:col-span-4 md:mt-32",
  "md:col-span-5 md:col-start-2",
  "md:col-span-6 md:col-start-7 md:mt-20",
  "md:col-span-7",
  "md:col-span-4 md:col-start-9 md:mt-28",
  "md:col-span-9 md:col-start-3",
  "md:col-span-8",
];
function Page() {
  return (
    <main>
      <section className="archive-intro">
        <span className="section-number">01 / Archivo</span>
        <h1>
          Proyectos
          <br />
          <i>seleccionados</i>
        </h1>
        <div>
          <p>
            Identidad visual, piezas impresas y comunicación comercial presentadas con el material
            real disponible.
          </p>
          <span>{String(projects.length).padStart(2, "0")} proyectos</span>
        </div>
      </section>
      <section className="grid items-start gap-x-7 gap-y-24 px-5 py-24 md:grid-cols-12 md:px-10 md:py-36">
        {projects.map((project, index) => (
          <EditorialProject
            key={project.slug}
            project={project}
            index={index}
            composition={index % 4 === 1 ? "portrait" : index === 0 ? "feature" : "landscape"}
            className={layouts[index] ?? "md:col-span-6"}
          />
        ))}
      </section>
      <Reveal>
        <p className="archive-closing">
          Diseño con intención.
          <br />
          <span>Imágenes con dirección.</span>
        </p>
      </Reveal>
    </main>
  );
}
