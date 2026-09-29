"use client";

import BlurFade from "@/components/motion/blur-fade";
import { EducationCard } from "./education-card";
import { educationData } from "@/content/portfolio";

interface EducationProps {
  delay?: number;
}

export function Education({ delay = 0 }: EducationProps) {
  return (
    <section id="education">
      <div className="flex min-h-0 flex-col gap-y-4">
        <BlurFade delay={delay}>
          <h2 className="text-xl font-bold">Educación</h2>
        </BlurFade>
        {educationData.map((education, id) => (
          <BlurFade key={education.id} delay={delay + 0.01 + id * 0.05}>
            <EducationCard education={education} />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
