import type { Metadata } from "next";
import { Projects } from "@/features/projects/components/projects";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Proyectos de Yordy Almerco en soporte TI, redes y desarrollo de software.",
};

export default function ProyectosPage() {
  return (
    <main className="min-h-[100dvh] pb-20">
      <Projects showAll />
    </main>
  );
}
