import { ArrowDownRight, Download, MapPin } from 'lucide-react';
import { HIGHLIGHTS, PROFILE } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export function Hero({ onOpenResume }: HeroProps) {
  return (
    <section id="top" className="border-b border-slate-200/80 bg-[#FAF9F6]">
      <div className="mx-auto max-w-6xl px-4 pb-12 pt-6 sm:px-8 sm:pb-24 sm:pt-16 lg:pt-20">
        {/* Mobile Profile Box (Visible < lg so portrait & mandate appear cleanly above the fold) */}
        <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-3.5 shadow-sm lg:hidden">
          <div className="flex items-center gap-3.5">
            <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
              <img
                src={PROFILE.photoPath}
                alt={`${PROFILE.name} — Release Manager & Scrum Master`}
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="min-w-0 flex-1">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                <span>BNP Paribas · 2021 – Present</span>
              </div>
              <p className="mt-1.5 font-display text-base font-bold leading-tight text-slate-900">
                {PROFILE.name}
              </p>
              <p className="mt-0.5 flex items-center gap-1 text-xs text-slate-500">
                <MapPin className="h-3 w-3 flex-shrink-0 text-slate-400" />
                <span className="truncate">{PROFILE.location}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Editorial Intro */}
          <div className="lg:col-span-8">
            <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-600 shadow-sm lg:inline-flex">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
              <MapPin className="h-3.5 w-3.5 text-slate-400" />
              <span>{PROFILE.location}</span>
              <span className="text-slate-300">·</span>
              <span className="text-emerald-700">{PROFILE.availability}</span>
            </div>

            <h1 className="hidden font-display font-bold tracking-tight text-slate-900 lg:mt-6 lg:block lg:text-[3.35rem] lg:leading-[1.12]">
              {PROFILE.name}
            </h1>

            <h2 className="font-display text-2xl font-bold leading-snug tracking-tight text-slate-900 sm:text-3xl lg:mt-4 lg:text-2xl lg:font-semibold lg:text-slate-800">
              {PROFILE.roleTitle}{' '}
              <span className="font-normal text-slate-500">specializing in</span>{' '}
              <span className="text-emerald-700">{PROFILE.specialization}</span>
            </h2>

            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-slate-600 sm:text-[1.0625rem]">
              {PROFILE.bio}
            </p>

            {/* Primary CTAs — clean 2-col boxed grid on mobile, inline flex on sm+ */}
            <div className="mt-6 grid grid-cols-2 gap-2.5 sm:mt-8 sm:flex sm:flex-wrap sm:items-center sm:gap-3.5">
              <a
                href="#experience"
                className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700 sm:px-5"
              >
                <span>Experience</span>
                <ArrowDownRight className="h-4 w-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition-colors hover:border-slate-400 hover:bg-slate-50 sm:px-5"
              >
                Get in Touch
              </a>

              <button
                type="button"
                onClick={onOpenResume}
                className="col-span-2 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-emerald-600/40 hover:text-emerald-700 sm:col-span-1 sm:border-transparent sm:bg-transparent sm:px-3"
              >
                <Download className="h-4 w-4 text-emerald-700" />
                Download Resume (PDF)
              </button>
            </div>
          </div>

          {/* Desktop Portrait Frame */}
          <div className="hidden lg:col-span-4 lg:block">
            <div className="ml-auto max-w-[300px]">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2.5 shadow-sm">
                <div className="aspect-[4/4.5] overflow-hidden rounded-xl bg-slate-100">
                  <img
                    src={PROFILE.photoPath}
                    alt={`${PROFILE.name} — Release Manager & Scrum Master`}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <div className="flex items-center justify-between gap-2 px-2 pb-1 pt-3 text-xs">
                  <div className="min-w-0">
                    <p className="font-semibold text-slate-900">BNP Paribas</p>
                    <p className="truncate text-slate-500">Release Manager & Scrum Master</p>
                  </div>
                  <span className="flex-shrink-0 rounded-md bg-emerald-50 px-2 py-1 font-medium text-emerald-700">
                    2021 – Present
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Strip — uniform height boxes on mobile & desktop */}
        <div className="mt-8 grid grid-cols-2 gap-3 border-t border-slate-200/80 pt-7 sm:mt-14 sm:gap-4 sm:pt-8 lg:grid-cols-4">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.label}
              className="flex h-full flex-col justify-between rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm sm:p-4"
            >
              <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 sm:text-[11px]">
                {item.label}
              </p>
              <p className="mt-1.5 font-display text-xs font-semibold leading-snug text-slate-900 sm:text-sm">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
