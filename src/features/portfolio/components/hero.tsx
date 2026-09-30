"use client";

import BlurFade from "@/components/motion/blur-fade";
import BlurFadeText from "@/components/motion/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { personalData } from "@/content/portfolio";
import { Link as LinkIcon } from "lucide-react";
import Link from "next/link";

interface HeroProps {
  delay?: number;
}

export function Hero({ delay = 0 }: HeroProps) {
  return (
    <section id="hero">
      <div className="mx-auto w-full max-w-2xl space-y-8">
        <div className="gap-2 flex justify-between">
          <div className="flex-col flex flex-1 space-y-1.5">
            <BlurFadeText
              delay={delay}
              className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
              yOffset={8}
              text={`Hola, soy ${personalData.name.split(" ")[0]} 👋`}
            />
            <BlurFadeText
              className="max-w-[600px] md:text-xl"
              delay={delay}
              text={personalData.description}
            />
          </div>
          <BlurFade delay={delay}>
            <Avatar className="size-28 border">
              <AvatarImage
                src="/yordy-almerco.png"
                alt={personalData.name}
                className="object-cover"
              />
              <AvatarFallback>{personalData.initials}</AvatarFallback>
            </Avatar>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
