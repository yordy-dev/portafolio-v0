import { Badge } from "@/components/ui/badge";
import BlurFade from "@/components/magicui/blur-fade";
import { contactData } from "@/data/data";

interface ContactProps {
  delay?: number;
}

export function Contact({ delay = 0 }: ContactProps) {
  return (
    <section id="contact" className="py-12">
      <div className="flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6 w-full">
        <BlurFade delay={delay}>
          <div className="space-y-3 flex flex-col items-center">
            <Badge className="bg-black text-white hover:bg-black/90 px-3 py-1 text-sm font-medium border-transparent">
              Contacto
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Ponte en contacto
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              ¿Quieres chatear? Escríbeme un mensaje privado a{" "}
              <a href={`mailto:${contactData.email}`} className="text-foreground hover:underline">
                {contactData.email}
              </a>{" "}
              y conversemos.
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
