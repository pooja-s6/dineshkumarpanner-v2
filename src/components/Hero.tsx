import { ArrowDownRight, Download, MapPin } from 'lucide-react';
import { HIGHLIGHTS, PROFILE } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export function Hero({ onOpenResume }: HeroProps) {
  return (
    <section id="top" className="border-b border-slate-200/80 bg-[#FAF9F6]">
      <div className="mx-auto max-w-6xl px-5 pb-16 pt-12 sm:px-8 sm:pb-24 sm:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Editorial Intro */}
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1 text-xs font-medium text-slate-600">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
              <MapPin className="h-3.5 w-3.5 text-slate-400" />
              <span>{PROFILE.location}</span>
              <span className="text-slate-300">·</span>
              <span className="text-emerald-700">{PROFILE.availability}</span>
            </div>

            <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.35rem] lg:leading-[1.12]">
              {PROFILE.name}
            </h1>

            <p className="mt-4 font-display text-xl font-semibold leading-snug text-slate-800 sm:text-2xl">
              {PROFILE.roleTitle}{' '}
              <span className="font-normal text-slate-500">specializing in</span>{' '}
              <span className="text-emerald-700">{PROFILE.specialization}</span>
            </p>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-[1.0625rem]">
              {PROFILE.bio}
            </p>

            {/* Primary CTAs */}
            <div className="mt-9 flex flex-wrap items-center gap-3.5">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
              >
                View Experience
                <ArrowDownRight className="h-4 w-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-slate-400 hover:bg-slate-50"
              >
                Get in Touch
              </a>

              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-emerald-700"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </button>
            </div>
          </div>

          {/* Portrait Frame */}
          <div className="lg:col-span-4">
            <div className="mx-auto max-w-[300px] lg:ml-auto lg:mr-0">
              <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-2.5 shadow-sm">
                <div className="aspect-[4/4.5] overflow-hidden rounded-xl bg-slate-100">
                  <img
                    src={PROFILE.photoPath}
                    alt={`${PROFILE.name} — Release Manager & Scrum Master`}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <div className="flex items-center justify-between px-2 pb-1 pt-3 text-xs">
                  <div>
                    <p className="font-semibold text-slate-900">BNP Paribas</p>
                    <p className="text-slate-500">Release Manager & Scrum Master</p>
                  </div>
                  <span className="rounded-md bg-emerald-50 px-2 py-1 font-medium text-emerald-700">
                    2021 – Present
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Restrained Highlights Strip */}
        <div className="mt-14 grid grid-cols-1 gap-4 border-t border-slate-200/80 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((item) => (
            <div key={item.label} className="rounded-xl border border-slate-200/70 bg-white px-4 py-3.5">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                {item.label}
              </p>
              <p className="mt-1 font-display text-sm font-semibold text-slate-900">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
