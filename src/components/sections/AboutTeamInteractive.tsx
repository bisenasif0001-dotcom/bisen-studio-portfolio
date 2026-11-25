"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2, ChevronDown, Quote } from "lucide-react";
import { TEAM_MEMBERS } from "@/data/team";
import { CASE_STUDIES } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function AboutTeamInteractive() {
  const [expandedTools, setExpandedTools] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedTools((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {TEAM_MEMBERS.map((member, idx) => {
        const isOpen = Boolean(expandedTools[member.id]);
        const firstName = member.name.split(" ")[0];
        const linkedProjects = (member.featuredCaseSlugs ?? [])
          .map((slug) => CASE_STUDIES.find((c) => c.slug === slug))
          .filter((c): c is NonNullable<typeof c> => Boolean(c));

        return (
          <article
            key={member.id}
            id={member.id}
            className="scroll-mt-24 flex flex-col justify-between overflow-hidden rounded-3xl border border-navy/15 bg-white shadow-xs transition-shadow duration-200 hover:border-navy/35 hover:shadow-lg"
          >
            <div>
              {/* Consistent 4:3 Studio Portrait Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-navy/10 bg-navy bg-navy-blueprint">
                {member.photoPath ? (
                  <Image
                    src={member.photoPath}
                    alt={`${member.name} — ${member.role}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover object-top"
                  />
                ) : (
                  <div className="flex h-full flex-col justify-between p-5 text-white">
                    <div className="flex items-center justify-between gap-2">
                      <span className="shrink-0 whitespace-nowrap font-mono text-xs font-semibold text-gold">
                        0{idx + 1} / 03
                      </span>
                      <span className="truncate font-mono text-[11px] font-medium text-white/75">
                        {member.experience}
                      </span>
                    </div>

                    {/* Architectural Studio Portrait Monogram */}
                    <div className="my-auto flex flex-col items-center text-center">
                      <div className="relative flex h-24 w-24 items-center justify-center rounded-full border-2 border-gold bg-navy-deep shadow-xl">
                        <span className="font-mono text-2xl font-bold tracking-wider text-white">
                          {member.initials}
                        </span>
                        <span
                          aria-hidden="true"
                          className="absolute bottom-1 right-1 h-3.5 w-3.5 rounded-full border-2 border-navy-deep bg-gold"
                        />
                      </div>
                      <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-gold/90">
                        Principal · Bisen Studio
                      </p>
                    </div>

                    <div className="border-t border-white/15 pt-2.5 text-center font-mono text-[11px] text-white/75">
                      Direct Client Collaboration
                    </div>
                  </div>
                )}
              </div>

              {/* Clean Identity & Short Bio */}
              <div className="p-6">
                <span className="inline-block rounded-md border border-navy/12 bg-surface px-2.5 py-1 font-mono text-[11px] font-semibold text-gold-deep">
                  {member.disciplineBadge ?? member.experience}
                </span>

                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-navy">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-gold-deep">{member.role}</p>

                <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
                  {member.shortIntro ?? member.bio}
                </p>

                {/* Authentic Working Philosophy */}
                {member.philosophy && (
                  <blockquote className="mt-4 rounded-xl border border-navy/10 bg-surface p-3.5 text-[13px] italic leading-relaxed text-navy">
                    <Quote className="mb-1 h-3.5 w-3.5 text-gold-deep" />
                    &ldquo;{member.philosophy}&rdquo;
                  </blockquote>
                )}

                {/* Core Specialties (max 4 concise items) */}
                <div className="mt-5">
                  <h4 className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-deep">
                    Core Focus
                  </h4>
                  <ul className="mt-2.5 space-y-1.5 text-sm text-navy">
                    {member.specialties.slice(0, 4).map((sp) => (
                      <li key={sp} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" />
                        <span>{sp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Relevant Work Samples */}
                {linkedProjects.length > 0 && (
                  <div className="mt-5 border-t border-navy/10 pt-4">
                    <h4 className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-navy">
                      Relevant Work Samples
                    </h4>
                    {member.portfolioRole && (
                      <p className="mt-1 text-xs text-ink-muted">{member.portfolioRole}</p>
                    )}
                    <div className="mt-2.5 space-y-1.5">
                      {linkedProjects.map((proj) => (
                        <Link
                          key={proj.slug}
                          href={`/work/${proj.slug}`}
                          className="flex items-center justify-between gap-2 rounded-lg border border-navy/10 bg-surface px-3 py-2 text-xs font-semibold text-navy hover:border-gold hover:bg-white"
                        >
                          <span className="truncate">{proj.title.split(" — ")[0]}</span>
                          <span className="inline-flex shrink-0 items-center gap-1 text-gold-deep">
                            <span>View</span>
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Expandable Skills, Tools & Detailed Experience */}
                <div className="mt-5">
                  <button
                    type="button"
                    onClick={() => toggleExpand(member.id)}
                    aria-expanded={isOpen}
                    className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-navy underline decoration-gold/80 underline-offset-4 hover:text-gold-deep"
                  >
                    <span>{isOpen ? "Hide Skills & Full Bio" : "View Skills, Tools & Bio"}</span>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform duration-150",
                        isOpen && "rotate-180"
                      )}
                    />
                  </button>

                  {isOpen && (
                    <div className="mt-3.5 space-y-3 rounded-xl border border-navy/12 bg-surface p-4 text-[13px] leading-relaxed text-ink-muted">
                      {member.experienceNote && (
                        <p className="font-medium text-navy">{member.experienceNote}</p>
                      )}
                      <p>{member.bio}</p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {member.tools.map((tool) => (
                          <span
                            key={tool}
                            className="rounded-md border border-navy/12 bg-white px-2.5 py-1 font-mono text-[11px] font-medium text-navy"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Footer CTA */}
            <div className="border-t border-navy/10 bg-surface/60 px-6 py-4">
              <Link
                href={`/contact?topic=work-with-${member.id}`}
                className="inline-flex w-full items-center justify-between gap-2 text-sm font-bold text-navy hover:text-gold-deep"
              >
                <span>Work With {firstName}</span>
                <ArrowUpRight className="h-4 w-4 text-gold-deep" />
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}
