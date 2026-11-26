import { GOVERNANCE_PRACTICES } from '../data/portfolioData';

export function GovernanceSection() {
  return (
    <section id="governance" className="border-b border-slate-200/80 bg-[#FAF9F6] py-12 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
              Governance Practice
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              How Releases & Changes Stay Predictable
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-slate-600">
            Repeatable frameworks spanning gap diagnostics, CAB/ECAB authority, audit readiness,
            and ServiceNow/Serena tooling.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-6 md:grid-cols-2">
          {GOVERNANCE_PRACTICES.map((practice) => (
            <div
              key={practice.step}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors hover:border-slate-300 sm:p-7"
            >
              <div>
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-50 font-display text-xs font-bold text-emerald-700">
                    {practice.step}
                  </span>
                  <h3 className="font-display text-base font-bold text-slate-900 sm:text-lg">
                    {practice.title}
                  </h3>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {practice.description}
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-100 pt-4">
                {practice.toolsOrArtifacts.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-slate-200/80 bg-[#FAF9F6] px-2.5 py-1 text-xs font-medium text-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
