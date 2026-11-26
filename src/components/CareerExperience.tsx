import { Award, MapPin } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export function CareerExperience() {
  return (
    <section id="experience" className="border-b border-slate-200/80 bg-white py-14 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
            Career Experience · 2009 – Present
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Enterprise Delivery Across Five Global Organizations
          </h2>
        </div>

        <div className="mt-10 space-y-5 sm:mt-12 sm:space-y-6">
          {EXPERIENCES.map((exp) => (
            <article
              key={exp.id}
              className="rounded-2xl border border-slate-200/90 bg-[#FAF9F6]/60 p-5 transition-colors hover:border-slate-300 hover:bg-white sm:p-8"
            >
              <div className="grid gap-4 sm:gap-6 lg:grid-cols-12">
                {/* Left Metadata */}
                <div className="border-b border-slate-200/70 pb-4 lg:col-span-4 lg:border-b-0 lg:pb-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-display text-base font-bold text-slate-900 sm:text-lg">
                      {exp.company}
                    </span>
                    {exp.isCurrent && (
                      <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700">
                        Current
                      </span>
                    )}
                  </div>

                  <p className="mt-1 text-sm font-semibold text-emerald-700">{exp.role}</p>

                  <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500 sm:mt-3">
                    <span className="font-medium text-slate-700">{exp.period}</span>
                    <span className="text-slate-300">·</span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Right Impact & Bullets */}
                <div className="lg:col-span-8">
                  <p className="text-sm font-medium leading-relaxed text-slate-800">
                    {exp.summary}
                  </p>

                  {exp.award && (
                    <div className="mt-3.5 flex items-start gap-2.5 rounded-xl border border-emerald-200/80 bg-emerald-50/70 px-3.5 py-3 text-xs leading-relaxed text-emerald-950 sm:mt-4 sm:px-4">
                      <Award className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-700" />
                      <span>{exp.award}</span>
                    </div>
                  )}

                  <ul className="mt-3.5 space-y-2 sm:mt-4">
                    {exp.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600"
                      >
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
