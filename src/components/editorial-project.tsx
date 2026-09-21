import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/portfolio-data";
import { Reveal } from "@/components/reveal";

type ProjectComposition = "feature" | "portrait" | "landscape" | "compact";

export function EditorialProject({
  project,
  index,
  composition = "landscape",
  className = "",
}: {
  project: Project;
  index: number;
  composition?: ProjectComposition;
  className?: string;
}) {
  const ratio = composition === "portrait" ? "aspect-[4/5]" : composition === "feature" ? "aspect-[5/4] md:aspect-[16/10]" : composition === "compact" ? "aspect-square" : "aspect-[4/3]";

  return (
    <Reveal variant="image" delay={(index % 3) * 90} className={className}>
      <Link to="/proyectos/$slug" params={{ slug: project.slug }} className="editorial-project group block">
        <div className={`editorial-project-media ${ratio}`}>
          <img src={project.coverImage} alt={`Proyecto ${project.title}`} loading={index > 1 ? "lazy" : "eager"} decoding="async" />
          <span className="editorial-project-index">{String(index + 1).padStart(2, "0")}</span>
        </div>
        <div className="editorial-project-meta">
          <div>
            <h2>{project.title}</h2>
            <p>{project.category}{project.year ? ` · ${project.year}` : ""}</p>
          </div>
          <span className="editorial-project-line" aria-hidden="true" />
          <ArrowUpRight aria-hidden="true" />
        </div>
      </Link>
    </Reveal>
  );
}
