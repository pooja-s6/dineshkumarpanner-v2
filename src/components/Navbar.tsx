import { useEffect, useState } from 'react';
import { ArrowUpRight, Download, Linkedin, Menu, X } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'governance', label: 'Governance' },
  { id: 'experience', label: 'Experience' },
  { id: 'credentials', label: 'Credentials' },
  { id: 'contact', label: 'Contact' },
];

interface NavbarProps {
  activeSection: string;
  onOpenResume: () => void;
}

export function Navbar({ activeSection, onOpenResume }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileOpen]);

  const handleLinkClick = (id: string) => {
    setMobileOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-[#FAF9F6]/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-8">
        {/* Brand */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            setMobileOpen(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex min-w-0 items-center gap-2.5 text-slate-900 focus:outline-none"
        >
          <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white font-display text-xs font-bold tracking-tight text-slate-900 shadow-sm">
            {PROFILE.initials}
          </span>
          <div className="min-w-0">
            <span className="block truncate font-display text-sm font-bold tracking-tight text-slate-900">
              {PROFILE.name}
            </span>
            <span className="block truncate text-[11px] font-medium text-slate-500 sm:hidden">
              Release Manager · Scrum Master
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                type="button"
                onClick={() => handleLinkClick(link.id)}
                className={`text-sm font-medium transition-colors ${
                  isActive ? 'text-emerald-700' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Quick Links: LinkedIn & Resume */}
        <div className="hidden items-center gap-2.5 md:flex">
          <a
            href={PROFILE.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:border-slate-300 hover:text-slate-900"
          >
            <Linkedin className="h-3.5 w-3.5 text-slate-600" />
            LinkedIn
          </a>

          <button
            type="button"
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-emerald-700"
          >
            <Download className="h-3.5 w-3.5" />
            Resume
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen}
          className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition-colors active:bg-slate-50 md:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Boxed Mobile Drawer */}
      {mobileOpen && (
        <div className="border-t border-slate-200/80 bg-[#FAF9F6] px-4 pb-4 pt-3 md:hidden">
          <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
            <div className="flex flex-col space-y-1">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => handleLinkClick(link.id)}
                    className={`flex items-center justify-between rounded-xl px-3.5 py-3 text-left text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-emerald-50 font-semibold text-emerald-800'
                        : 'text-slate-700 active:bg-slate-50'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />}
                  </button>
                );
              })}
            </div>

            <div className="mt-2 grid grid-cols-2 gap-2 border-t border-slate-100 p-2 pt-3">
              <a
                href={PROFILE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[42px] items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-[#FAF9F6] px-3 py-2 text-xs font-semibold text-slate-800"
              >
                <Linkedin className="h-3.5 w-3.5 text-slate-600" />
                LinkedIn
                <ArrowUpRight className="h-3 w-3 text-slate-400" />
              </a>
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  onOpenResume();
                }}
                className="inline-flex min-h-[42px] items-center justify-center gap-1.5 rounded-xl bg-slate-900 px-3 py-2 text-xs font-semibold text-white"
              >
                <Download className="h-3.5 w-3.5" />
                Resume PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
