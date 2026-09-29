import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ProjectLink } from "@/content/portfolio";

export function ProjectLinks({ links }: { links: readonly ProjectLink[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {links.map((link) => {
        const LinkIcon = link.icon === "github" ? Github : ExternalLink;
        return (
          <Button
            key={link.href}
            asChild
            variant="outline"
            size="sm"
            className="bg-white dark:bg-gray-900"
          >
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              <LinkIcon className="mr-1.5 size-4" aria-hidden="true" />
              {link.type}
            </a>
          </Button>
        );
      })}
    </div>
  );
}
