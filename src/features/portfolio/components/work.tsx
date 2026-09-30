"use client";

import BlurFade from "@/components/motion/blur-fade";
import { ResumeCard } from "@/features/portfolio/components/resume-card";
import { experiencesData } from "@/content/portfolio";

interface WorkProps {
  delay?: number;
}

export function Work({ delay = 0 }: WorkProps) {
  return (
    <section id="work">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={delay}>
          <h2 className="text-xl font-bold">Experiencia laboral</h2>
        </BlurFade>
        {experiencesData.map((work, id) => (
          <BlurFade key={work.company} delay={delay + 0.01 + id * 0.05}>
            <ResumeCard
              key={work.company}
              logoUrl={work.logo}
              altText={work.company}
              title={work.company}
              subtitle={work.title}
              href={work.href}
              period={`${work.start} - ${work.end ?? "Actualidad"}`}
              description={work.description}
              skills={work.skills}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
