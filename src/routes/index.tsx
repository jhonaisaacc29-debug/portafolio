import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { jhonaLogo } from "@/lib/media";
import { isaacProfile, projects } from "@/lib/portfolio-data";
import { Reveal } from "@/components/reveal";
import { EditorialProject } from "@/components/editorial-project";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Isaac Espinoza | Diseñador Gráfico & Fotógrafo" },
      {
        name: "description",
        content:
          "Portfolio de Isaac Espinoza, Licenciado en Diseño Gráfico y fotógrafo. Identidad visual, branding, diseño gráfico, fotografía, retoque y producción visual.",
      },
      { property: "og:title", content: "Isaac Espinoza | Diseñador Gráfico & Fotógrafo" },
      {
        property: "og:description",
        content: "Diseño gráfico, fotografía, identidad visual y producción integral.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const featured = projects.filter((project) => project.featured).slice(0, 5);
const homeLayouts = [
  { className: "md:col-span-8", composition: "feature" },
  { className: "md:col-span-4 md:col-start-2", composition: "portrait" },
  { className: "md:col-span-6 md:col-start-7 md:mt-28", composition: "landscape" },
  { className: "md:col-span-7", composition: "landscape" },
  { className: "md:col-span-4 md:col-start-9 md:mt-36", composition: "portrait" },
] as const;
function Home() {
  return (
    <main className="overflow-hidden">
      <section className="editorial-hero">
        <div className="editorial-hero-grid">
          <div className="editorial-hero-copy">
            <div className="flex justify-between font-mono text-[9px] uppercase text-muted-foreground">
              <span>Portafolio / 2026</span>
              <span>Encarnación · Paraguay</span>
            </div>
            <h1 className="hero-title">
              <span>Isaac</span>
              <span>
                Espinoza<i>.</i>
              </span>
            </h1>
            <div className="editorial-role">
              <span>Graphic Designer</span>
              <span>Art Direction</span>
              <span>Photography</span>
            </div>
            <p>
              Diseño identidades, creo imágenes y desarrollo propuestas visuales que conectan
              marcas, personas e historias.
            </p>
          </div>
          <div className="editorial-portrait">
            <img
              src={isaacProfile}
              alt="Retrato de Isaac Espinoza en Encarnación"
              decoding="async"
            />
          </div>
        </div>
        <a href="#seleccion" className="editorial-scroll">
          Ver selección <ArrowDownRight />
        </a>
      </section>
      <section id="seleccion" className="px-5 py-24 md:px-10 md:py-36">
        <Reveal>
          <div className="editorial-section-heading">
            <span className="section-number">Trabajo seleccionado</span>
            <h2>Proyectos que construyen identidad.</h2>
            <Link to="/proyectos">
              Archivo completo <ArrowUpRight />
            </Link>
          </div>
        </Reveal>
        <div className="mt-20 grid items-start gap-x-7 gap-y-24 md:grid-cols-12">
          {featured.map((project, index) => (
            <EditorialProject
              key={project.slug}
              project={project}
              index={index}
              composition={homeLayouts[index]?.composition ?? "landscape"}
              className={homeLayouts[index]?.className ?? "md:col-span-6"}
            />
          ))}
        </div>
      </section>
      <section className="jhona-transition">
        <div>
          <span className="section-number">Proyecto propio</span>
          <h2>
            Jhona
            <br />
            Fotografía
          </h2>
          <p>Identidad, fotografía, edición, diseño y presencia digital desarrolladas por Isaac.</p>
          <Link to="/jhona-fotografia">
            Explorar proyecto <ArrowUpRight />
          </Link>
        </div>
        <div>
          <img src={jhonaLogo} alt="Logo original de Jhona Diseño y Fotografía" />
        </div>
      </section>
    </main>
  );
}
