"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import BlurFade from "@/components/motion/blur-fade";
import { buttonVariants } from "@/components/ui/button";
import { ProjectCard } from "@/features/projects/components/project-card";
import { ProjectModal } from "@/features/projects/components/project-modal";
import { projectsData, type Project } from "@/content/portfolio";

export function Projects({ showAll = false }: { showAll?: boolean }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 3);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects">
      <div className="w-full space-y-8 py-12">
        <BlurFade inView duration={0.45} yOffset={14} blur="4px">
          {showAll ? (
            <div className="mx-auto max-w-[800px] space-y-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <ArrowLeft className="size-4" aria-hidden="true" />
                Volver al inicio
              </Link>
              <h1 className="text-3xl font-bold tracking-tighter">
                Todos mis proyectos
              </h1>
              <p className="text-sm text-muted-foreground">
                Trabajos en soporte TI, redes y desarrollo de software.
              </p>
              <p className="text-sm text-muted-foreground">
                {projectsData.length} proyectos
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter">
                Mis proyectos
              </h2>
            </div>
          )}
        </BlurFade>
        <div className="mx-auto grid max-w-[800px] gap-5">
          {visibleProjects.map((project, id) => (
            <BlurFade
              key={project.title}
              inView
              delay={0.08 + id * 0.06}
              duration={0.45}
              yOffset={16}
              blur="4px"
            >
              <ProjectCard
                key={project.title}
                project={project}
                onClick={() => handleProjectClick(project)}
              />
            </BlurFade>
          ))}
        </div>
        {!showAll && projectsData.length > visibleProjects.length && (
          <div className="flex justify-center">
            <Link
              href="/proyectos"
              className={buttonVariants({
                variant: "default",
                className: "gap-2 shadow-sm",
              })}
            >
              Ver todos los proyectos
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        )}
      </div>

      {selectedProject && (
        <ProjectModal
          key={selectedProject.title}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          project={selectedProject}
        />
      )}
    </section>
  );
}
