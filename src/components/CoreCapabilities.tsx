import { Check, GitPullRequest, Layers, Users } from 'lucide-react';
import { CORE_CAPABILITIES } from '../data/portfolioData';

const columnIcons = [GitPullRequest, Users, Layers];

export function CoreCapabilities() {
  return (
    <section id="about" className="border-b border-slate-200/80 bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
            Core Focus & Capabilities
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Structured ITIL® Governance Meets Agile Delivery
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Balancing risk containment, audit discipline, and high-trust Scrum execution across
            mission-critical banking and global IT operations.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {CORE_CAPABILITIES.map((col, idx) => {
            const Icon = columnIcons[idx % columnIcons.length];
            return (
              <article
                key={col.id}
                className="flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-[#FAF9F6]/70 p-7 transition-colors hover:border-slate-300 hover:bg-white"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-semibold tracking-wider text-slate-400">
                      {col.eyebrow}
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-emerald-700">
                      <Icon className="h-4 w-4" />
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-xl font-bold text-slate-900">
                    {col.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                    {col.summary}
                  </p>
                </div>

                <ul className="mt-6 space-y-2.5 border-t border-slate-200/80 pt-5">
                  {col.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm leading-snug text-slate-700"
                    >
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
