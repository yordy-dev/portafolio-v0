"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ProjectLinks } from "./project-links";
import type { Project } from "@/content/portfolio";

export function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  return (
    <article className="relative overflow-hidden rounded-lg border border-black/5 bg-gray-50 transition-colors hover:bg-gray-100 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10">
      <button
        type="button"
        onClick={onClick}
        aria-label={`Abrir detalles de ${project.title}`}
        aria-haspopup="dialog"
        className="absolute inset-0 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
      />
      <div className="pointer-events-none relative flex flex-col sm:flex-row">
        <div className="flex flex-col gap-4 p-6 sm:w-1/2">
          <div>
            <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              {project.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <Badge
                key={technology.name}
                variant="secondary"
                className="rounded-md px-2 py-1 font-normal"
              >
                {technology.name}
              </Badge>
            ))}
          </div>
          <div className="pointer-events-auto relative mt-auto w-fit">
            <ProjectLinks links={project.links} />
          </div>
        </div>
        {project.images[0] && (
          <div className="flex items-center justify-center px-6 pb-6 sm:w-1/2 sm:py-6 sm:pl-0">
            <div className="relative aspect-[6/5] w-full overflow-hidden rounded-sm border bg-white shadow-sm dark:bg-gray-900">
              <Image
                src={project.images[0]}
                alt={`Vista del proyecto ${project.title}`}
                fill
                sizes="(max-width: 639px) 85vw, 300px"
                className="object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
