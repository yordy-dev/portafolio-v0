"use client";

import BlurFade from "@/components/motion/blur-fade";
import { Badge } from "@/components/ui/badge";
import { habilidadesData } from "@/content/portfolio";

export function Habilidades() {
  return (
    <section id="habilidades">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade inView duration={0.45} yOffset={12} blur="4px">
          <h2 className="text-xl font-bold">Habilidades</h2>
        </BlurFade>
        <div className="flex flex-wrap gap-2">
          {habilidadesData.map((habilidad, id) => (
            <BlurFade
              key={habilidad}
              inView
              delay={0.08 + id * 0.045}
              duration={0.4}
              yOffset={10}
              blur="3px"
            >
              <Badge className="rounded-md border-[#111] bg-[#111] px-2 py-1 text-sm font-semibold text-white transition-[translate,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#111] hover:shadow-[0_5px_0_0_#aaa] motion-reduce:transition-shadow motion-reduce:hover:translate-y-0">
                {habilidad}
              </Badge>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
