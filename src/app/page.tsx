import { Contact } from "@/features/contact/components/contact";
import { Projects } from "@/features/projects/components/projects";
import { Hero } from "@/features/portfolio/components/hero";
import { About } from "@/features/portfolio/components/about";
import { Education } from "@/features/portfolio/components/education";
import { Work } from "@/features/portfolio/components/work";
import { Habilidades } from "@/features/portfolio/components/habilidades";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <Hero delay={BLUR_FADE_DELAY} />

      <About delay={BLUR_FADE_DELAY * 3} />

      <Work delay={BLUR_FADE_DELAY * 5} />

      <Education delay={BLUR_FADE_DELAY * 7} />

      <Habilidades />

      <Projects />

      <Contact delay={BLUR_FADE_DELAY * 13} />
    </main>
  );
}
