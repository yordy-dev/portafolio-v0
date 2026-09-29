"use client";

import type { educationData } from "@/content/portfolio";
import { motion } from "framer-motion";
import { useState } from "react";

type EducationEntry = (typeof educationData)[number];

export function EducationCard({ education }: { education: EducationEntry }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentId = `education-content-${education.id}`;

  return (
    <div>
      <button
        type="button"
        aria-expanded={isExpanded}
        aria-controls={contentId}
        onClick={() => setIsExpanded((expanded) => !expanded)}
        className="group flex w-full cursor-pointer items-center gap-4 rounded-md text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
      >
        <span
          aria-hidden="true"
          className="flex size-12 shrink-0 items-center justify-center rounded-full border bg-background text-[10px] font-semibold text-muted-foreground"
        >
          {education.initials}
        </span>
        <span className="min-w-0 flex-1">
          <span className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
            <span className="inline-flex items-center gap-1 text-sm font-semibold leading-snug">
              {education.school}
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`size-4 shrink-0 translate-x-0 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100 group-focus-visible:translate-x-1 group-focus-visible:opacity-100 ${isExpanded ? "rotate-90" : "rotate-0"}`}
              >
                <path d="m9 6 6 6-6 6" />
              </svg>
            </span>
            <span className="shrink-0 text-xs tabular-nums text-muted-foreground sm:text-sm">
              {education.period}
            </span>
          </span>
          <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
            {education.degree}
          </span>
        </span>
      </button>
      <motion.div
        id={contentId}
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isExpanded ? 1 : 0,
          height: isExpanded ? "auto" : 0,
        }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden"
        aria-hidden={!isExpanded}
      >
        {"courses" in education ? (
          <div className="ml-16 mt-4 space-y-4">
            {education.courses.map((course) => (
              <section
                key={course.id}
                aria-labelledby={course.id}
                className="border-l-2 border-border pl-4"
              >
                <h3
                  id={course.id}
                  className="text-sm font-semibold leading-snug"
                >
                  {course.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {course.issued}
                </p>
                <ul className="mt-2 list-disc space-y-2 pl-4 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {course.description.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        ) : (
          <ul className="ml-16 mt-3 list-disc space-y-2 pl-4 text-xs leading-relaxed text-muted-foreground sm:text-sm">
            {education.description.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        )}
      </motion.div>
    </div>
  );
}
