import { Award, BadgeCheck, GraduationCap, Languages } from 'lucide-react';
import { CERTIFICATIONS, EDUCATION, PROFILE } from '../data/portfolioData';

export function Credentials() {
  return (
    <section id="credentials" className="border-b border-slate-200/80 bg-[#FAF9F6] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
            Credentials & Education
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Certifications, Recognition & Academic Background
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          {/* Certifications */}
          <div className="rounded-2xl border border-slate-200/90 bg-white p-7 lg:col-span-7">
            <div className="flex items-center gap-2.5 text-slate-900">
              <BadgeCheck className="h-5 w-5 text-emerald-700" />
              <h3 className="font-display text-lg font-bold">ITIL® Certifications</h3>
            </div>

            <div className="mt-6 space-y-4">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.title}
                  className="rounded-xl border border-slate-200/80 bg-[#FAF9F6]/80 p-5"
                >
                  <h4 className="font-display text-base font-bold text-slate-900">
                    {cert.title}
                  </h4>
                  <p className="mt-1 text-xs font-medium text-emerald-700">{cert.issuer}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{cert.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education, Recognition & Languages */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            <div className="rounded-2xl border border-slate-200/90 bg-white p-7">
              <div className="flex items-center gap-2.5 text-slate-900">
                <GraduationCap className="h-5 w-5 text-emerald-700" />
                <h3 className="font-display text-lg font-bold">Education</h3>
              </div>

              <div className="mt-4">
                <p className="font-display text-base font-bold text-slate-900">
                  {EDUCATION.degree}
                </p>
                <p className="mt-1 text-sm font-medium text-slate-700">
                  {EDUCATION.institution}
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  {EDUCATION.location} · Class of {EDUCATION.year}
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200/90 bg-white p-7">
              <div className="flex items-center gap-2.5 text-slate-900">
                <Award className="h-5 w-5 text-emerald-700" />
                <h3 className="font-display text-lg font-bold">Client Recognition</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Awarded at <span className="font-semibold text-slate-800">HCL Technologies</span>{' '}
                by US client leadership for analyzing and reducing emergency changes and building
                CAB workflows for application support teams.
              </p>

              <div className="mt-5 flex items-center justify-between border-t border-slate-200/80 pt-4 text-xs">
                <span className="inline-flex items-center gap-1.5 font-medium text-slate-500">
                  <Languages className="h-4 w-4 text-emerald-700" />
                  Languages
                </span>
                <span className="font-semibold text-slate-800">
                  {PROFILE.languages.join(' · ')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
