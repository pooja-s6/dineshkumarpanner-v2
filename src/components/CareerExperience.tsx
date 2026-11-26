import { useState } from 'react';
import { Award, ChevronDown, MapPin } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export function CareerExperience() {
  const [expandedId, setExpandedId] = useState<string>('bnp-paribas');

  const toggleMobileCard = (id: string) => {
    setExpandedId((prev) => (prev === id ? '' : id));
  };

  return (
    <section id="experience" className="border-b border-slate-200/80 bg-white py-12 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
            Career Experience · 2009 – Present
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Enterprise Delivery Across Five Global Organizations
          </h2>
          <p className="mt-2 text-xs text-slate-500 md:hidden">
            Tap any role box below to expand or collapse key highlights.
          </p>
        </div>

        <div className="mt-8 space-y-4 sm:mt-12 sm:space-y-6">
          {EXPERIENCES.map((exp) => {
            const isMobileExpanded = expandedId === exp.id;
            return (
              <article
                key={exp.id}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-[#FAF9F6] shadow-sm transition-colors hover:border-slate-300"
              >
                <div className="grid md:grid-cols-12">
                  {/* Left Metadata Box — tappable on mobile */}
                  <div className="border-b border-slate-200/80 bg-white md:col-span-4 md:border-b-0 md:border-r">
                    <button
                      type="button"
                      onClick={() => toggleMobileCard(exp.id)}
                      aria-expanded={isMobileExpanded}
                      className="w-full p-5 text-left focus:outline-none md:pointer-events-none md:p-7"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="font-display text-base font-bold text-slate-900 sm:text-lg">
                              {exp.company}
                            </h3>
                            {exp.isCurrent && (
                              <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700">
                                Current
                              </span>
                            )}
                          </div>
                          <p className="mt-1 text-sm font-semibold text-emerald-700">{exp.role}</p>
                        </div>

                        <span
                          aria-hidden="true"
                          className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-[#FAF9F6] text-slate-600 md:hidden"
                        >
                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-200 ${
                              isMobileExpanded ? 'rotate-180 text-emerald-700' : ''
                            }`}
                          />
                        </span>
                      </div>

                      <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-slate-500">
                        <span className="rounded-md bg-[#FAF9F6] px-2.5 py-1 font-medium text-slate-700 ring-1 ring-slate-200/80">
                          {exp.period}
                        </span>
                        <span className="inline-flex items-center gap-1 px-1">
                          <MapPin className="h-3 w-3 text-slate-400" />
                          {exp.location}
                        </span>
                      </div>

                      <p className="mt-3 text-sm leading-relaxed text-slate-600 md:hidden">
                        {exp.summary}
                      </p>
                    </button>
                  </div>

                  {/* Right Impact & Bullets (Collapsible on Mobile, Always Open on Desktop md+) */}
                  <div
                    className={`p-5 md:col-span-8 md:block md:p-7 ${
                      isMobileExpanded ? 'block' : 'hidden'
                    }`}
                  >
                    <p className="hidden text-sm font-medium leading-relaxed text-slate-800 md:block">
                      {exp.summary}
                    </p>

                    {exp.award && (
                      <div className="mb-4 flex items-start gap-2.5 rounded-xl border border-emerald-200 bg-emerald-50/90 p-3.5 text-xs leading-relaxed text-emerald-950 md:mt-4">
                        <Award className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-700" />
                        <span>{exp.award}</span>
                      </div>
                    )}

                    <ul className="space-y-2.5 md:mt-4">
                      {exp.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-700"
                        >
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-600" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
