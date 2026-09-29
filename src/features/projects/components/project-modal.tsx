"use client";

import { useEffect, useRef, useState, useId } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Icon } from "@iconify/react";
import { Badge } from "@/components/ui/badge";
import { ProjectLinks } from "./project-links";
import type { Project } from "@/content/portfolio";

export function ProjectModal({
  isOpen,
  onClose,
  project,
}: {
  isOpen: boolean;
  onClose: () => void;
  project: Project;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = project.images;
  const moveImage = (offset: number) =>
    setCurrentImageIndex(
      (index) => (index + offset + images.length) % images.length,
    );
  useEffect(() => {
    if (!isOpen) return;
    const dialog = dialogRef.current;
    if (!dialog) return;
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement;
    document.body.style.overflow = "hidden";
    dialog.showModal();
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      if (previousFocus instanceof HTMLElement && previousFocus.isConnected) {
        previousFocus.focus({ preventScroll: true });
      }
    };
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      className="fixed inset-0 m-auto max-h-[90dvh] w-[calc(100%_-_2rem)] max-w-4xl overflow-hidden rounded-lg border-0 bg-white p-0 text-gray-900 shadow-xl backdrop:bg-black/50 backdrop:backdrop-blur-sm dark:bg-gray-900 dark:text-white"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const rect = event.currentTarget.getBoundingClientRect();
        if (
          event.clientX < rect.left ||
          event.clientX > rect.right ||
          event.clientY < rect.top ||
          event.clientY > rect.bottom
        )
          onClose();
      }}
      onKeyDown={(event) => {
        if (
          images.length > 1 &&
          (event.key === "ArrowLeft" || event.key === "ArrowRight")
        ) {
          event.preventDefault();
          moveImage(event.key === "ArrowLeft" ? -1 : 1);
        }
      }}
    >
      <div className="flex max-h-[90dvh] flex-col">
        <header className="flex shrink-0 items-center justify-between gap-4 border-b border-gray-200 p-4 sm:p-6 dark:border-gray-700">
          <h2 id={titleId} className="text-xl font-bold sm:text-2xl">
            {project.title}
          </h2>
          <button
            type="button"
            autoFocus
            onClick={onClose}
            aria-label="Cerrar detalles del proyecto"
            className="shrink-0 rounded-md p-2 text-gray-500 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 dark:hover:bg-gray-800"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </header>
        <div
          className="min-h-0 overflow-y-auto overscroll-contain p-4 sm:p-6"
          data-project-scroll
        >
          <div className="space-y-6">
            {images.length > 0 && (
              <div>
                <div className="relative h-56 overflow-hidden rounded border border-gray-200 bg-gray-100 sm:h-96 dark:border-gray-700 dark:bg-gray-800">
                  <Image
                    src={images[currentImageIndex]}
                    alt={`${project.title} — imagen ${currentImageIndex + 1} de ${images.length}`}
                    fill
                    sizes="(max-width: 639px) 85vw, 850px"
                    className="object-contain"
                  />
                  {images.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={() => moveImage(-1)}
                        aria-label="Imagen anterior"
                        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border bg-white p-2 text-gray-900 shadow-sm focus-visible:outline focus-visible:outline-2"
                      >
                        <ChevronLeft className="size-5" aria-hidden="true" />
                      </button>
                      <button
                        type="button"
                        onClick={() => moveImage(1)}
                        aria-label="Imagen siguiente"
                        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border bg-white p-2 text-gray-900 shadow-sm focus-visible:outline focus-visible:outline-2"
                      >
                        <ChevronRight className="size-5" aria-hidden="true" />
                      </button>
                    </>
                  )}
                </div>
                {images.length > 1 && (
                  <div
                    className="mt-2 flex justify-center"
                    aria-label="Seleccionar imagen"
                  >
                    {images.map((image, index) => (
                      <button
                        key={image}
                        type="button"
                        onClick={() => setCurrentImageIndex(index)}
                        aria-label={`Ver imagen ${index + 1}`}
                        aria-pressed={index === currentImageIndex}
                        className="flex size-8 items-center justify-center rounded-full focus-visible:outline focus-visible:outline-2"
                      >
                        <span
                          className={`size-2 rounded-full ${index === currentImageIndex ? "bg-gray-900 dark:bg-white" : "bg-gray-300 dark:bg-gray-600"}`}
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
            <div className="space-y-3 text-sm leading-relaxed text-gray-600 sm:text-base dark:text-gray-300">
              <p className="font-medium">{project.context}</p>
              <p>{project.detailedDescription}</p>
            </div>
            <section>
              <h3 className="mb-3 text-lg font-semibold">Enlaces</h3>
              <ProjectLinks links={project.links} />
            </section>
            <section>
              <h3 className="mb-3 text-lg font-semibold">Tecnologías</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <Badge
                    key={technology.name}
                    variant="secondary"
                    className="flex items-center gap-2 rounded-md px-3 py-1.5 font-normal"
                  >
                    {technology.icon && (
                      <Icon
                        icon={technology.icon}
                        className="size-4"
                        aria-hidden="true"
                      />
                    )}
                    {technology.name}
                  </Badge>
                ))}
              </div>
            </section>
            <section>
              <h3 className="mb-3 text-lg font-semibold">
                Funcionalidades principales
              </h3>
              <ul className="list-disc space-y-3 pl-5 text-sm leading-relaxed text-gray-600 sm:text-base dark:text-gray-300">
                {project.keyFeatures.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </dialog>
  );
}
