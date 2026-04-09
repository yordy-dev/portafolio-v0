"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";

const habilidadesData = [
  "LAN / WAN",
  "MPLS y DIA",
  "Servicios de conectividad empresarial",
  "Análisis de logs y eventos de red",
  "Documentación técnica",
  "Soporte técnico",
];

interface HabilidadesProps {
  delay?: number;
}

export function Habilidades({ delay = 0 }: HabilidadesProps) {
  return (
    <section id="habilidades">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={delay}>
          <h2 className="text-xl font-bold">Habilidades</h2>
        </BlurFade>
        <div className="flex flex-wrap gap-2">
          {habilidadesData.map((habilidad, id) => (
            <BlurFade key={habilidad} delay={delay + 0.01 + id * 0.05}>
              <Badge className="bg-[#111] text-white hover:bg-[#111]/90 rounded-md px-2 py-1 text-sm font-semibold border-transparent">
                {habilidad}
              </Badge>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
