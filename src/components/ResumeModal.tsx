import { useEffect } from 'react';
import { Download, ExternalLink, FileText, Printer, X } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownloadNotify: () => void;
}

export function ResumeModal({ isOpen, onClose, onDownloadNotify }: ResumeModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    const iframe = document.getElementById('resume-pdf-frame') as HTMLIFrameElement | null;
    if (iframe?.contentWindow) {
      iframe.contentWindow.focus();
      iframe.contentWindow.print();
    } else {
      window.open(PROFILE.resumePath, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/50 backdrop-blur-sm"
      />

      <div className="relative z-10 flex h-[90dvh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
        <div className="flex flex-wrap items-center justify-between gap-2.5 border-b border-slate-200 px-4 py-3.5 sm:px-5 sm:py-4">
          <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
            <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
              <FileText className="h-4 w-4" />
            </span>
            <div className="min-w-0">
              <h3
                id="resume-modal-title"
                className="truncate font-display text-sm font-bold text-slate-900"
              >
                {PROFILE.name} — Resume
              </h3>
              <p className="truncate text-xs text-slate-500">
                ITIL® V3 & Intermediate RCV · 15+ Years Enterprise IT
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="hidden items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-50 sm:inline-flex"
            >
              <Printer className="h-3.5 w-3.5" />
              Print
            </button>

            <a
              href={PROFILE.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-50 sm:px-3"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              <span>Open</span>
            </a>

            <a
              href={PROFILE.resumePath}
              download={PROFILE.resumeFilename}
              onClick={onDownloadNotify}
              className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-emerald-700 sm:px-3.5"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close resume preview"
              className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Mobile hint banner */}
        <div className="border-b border-slate-200 bg-[#FAF9F6] px-4 py-2 text-[11px] text-slate-600 sm:hidden">
          Tap <span className="font-semibold text-slate-900">Open</span> or{' '}
          <span className="font-semibold text-slate-900">Download</span> if your mobile browser
          does not preview embedded PDFs.
        </div>

        <div className="flex-1 bg-slate-100">
          <iframe
            id="resume-pdf-frame"
            src={`${PROFILE.resumePath}#view=FitH`}
            title={`${PROFILE.name} Resume PDF`}
            className="h-full w-full border-0"
          />
        </div>
      </div>
    </div>
  );
}
