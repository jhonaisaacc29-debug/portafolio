import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { jhonaLogo, media } from "@/lib/media";
import { Button } from "@/components/ui/button";
import { photography } from "@/lib/photo-data";
import { Reveal } from "@/components/reveal";
export const Route = createFileRoute("/jhona-fotografia")({
  head: () => ({
    meta: [
      { title: "Jhona Fotografía | Proyecto propio de Isaac Espinoza" },
      {
        name: "description",
        content:
          "Caso de estudio de Jhona Fotografía: identidad, dirección creativa, fotografía, edición y presencia digital.",
      },
      { property: "og:title", content: "Jhona Fotografía | Proyecto propio" },
      {
        property: "og:description",
        content: "Fotografía y producción visual desarrollada por Isaac Espinoza.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});
const phases = ["Identidad", "Fotografía", "Diseño", "Contenido", "Presencia digital"];
function Page() {
  return (
    <main>
      <section className="jhona-hero">
        <div>
          <span className="font-mono text-[10px] uppercase text-primary">Proyecto propio</span>
          <h1>
            Jhona
            <br />
            Fotografía
          </h1>
          <p>
            <strong>Proyecto personal de Isaac Espinoza.</strong> Fotografía, edición y creación de
            recuerdos visuales para eventos y sesiones.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              variant="editorialOutline"
              className="border-background bg-foreground text-background"
            >
              <a
                href="https://luzohinggins.github.io/jhonafotografia/"
                target="_blank"
                rel="noreferrer"
              >
                Visitar web <ExternalLink />
              </a>
            </Button>
            <Button
              asChild
              variant="editorialOutline"
              className="border-background bg-foreground text-background"
            >
              <a href="https://www.instagram.com/df_jhona/" target="_blank" rel="noreferrer">
                Ver Instagram <ExternalLink />
              </a>
            </Button>
          </div>
        </div>
        <div>
          <img src={jhonaLogo} alt="Logo original de Jhona Diseño y Fotografía" decoding="async" />
        </div>
      </section>
      <section className="jhona-gallery">
        {photography.slice(0, 5).map((photo, index) => (
          <Reveal
            key={photo.src}
            variant="image"
            className={
              index === 0
                ? "jhona-wide"
                : index === 1
                  ? "jhona-tall"
                  : index === 2
                    ? "jhona-offset"
                    : ""
            }
          >
            <figure>
              <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" />
              <figcaption>Jhona Fotografía</figcaption>
            </figure>
          </Reveal>
        ))}
      </section>
      <section className="grid border-y border-foreground md:grid-cols-2">
        <div className="grid min-h-80 place-items-center bg-background p-10">
          <img
            src={jhonaLogo}
            alt="Logo de Jhona Diseño y Fotografía sobre fondo claro"
            className="max-h-72 w-full object-contain"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="grid min-h-80 place-items-center bg-foreground p-10">
          <img
            src={media("logojhona-negativo.webp")}
            alt="Logo de Jhona Diseño y Fotografía sobre fondo oscuro"
            className="max-h-72 w-full object-contain"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>
      <section className="jhona-capabilities">
        <div>
          <span className="section-number">Servicios actuales</span>
          <h2>Capacidad creativa aplicada</h2>
        </div>
        <div className="grid grid-cols-2 gap-x-6 font-mono text-[10px] uppercase">
          {[
            "Cobertura de eventos",
            "Sesiones fotográficas",
            "Edición",
            "Impresiones",
            "Cuadros personalizados",
            "Cuadros de firmas",
            "Fotolibros",
            "Banners",
          ].map((service) => (
            <span key={service} className="border-b border-border py-4">
              {service}
            </span>
          ))}
        </div>
      </section>
      <section className="jhona-phases">
        {phases.map((x) => (
          <div key={x}>
            <strong>{x}</strong>
            <span>↓</span>
          </div>
        ))}
      </section>
    </main>
  );
}
