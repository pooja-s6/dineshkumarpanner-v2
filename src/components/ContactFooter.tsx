import { useState, type FormEvent } from 'react';
import {
  Check,
  CheckCircle2,
  Copy,
  Download,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  RotateCcw,
  Send,
} from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface ContactFooterProps {
  onNotify: (title: string, description?: string) => void;
  onOpenResume: () => void;
}

interface ContactChannel {
  id: string;
  label: string;
  value: string;
  copyValue: string;
  href?: string;
  icon: typeof Mail;
}

export function ContactFooter({ onNotify, onOpenResume }: ContactFooterProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [submittedName, setSubmittedName] = useState<string | null>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
  });

  const channels: ContactChannel[] = [
    {
      id: 'email',
      label: 'Email',
      value: PROFILE.email,
      copyValue: PROFILE.email,
      href: `mailto:${PROFILE.email}`,
      icon: Mail,
    },
    {
      id: 'phone',
      label: 'Phone',
      value: PROFILE.phone,
      copyValue: PROFILE.phone,
      href: 'tel:+919940228810',
      icon: Phone,
    },
    {
      id: 'location',
      label: 'Location',
      value: PROFILE.location,
      copyValue: PROFILE.location,
      icon: MapPin,
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      value: PROFILE.linkedinHandle,
      copyValue: PROFILE.linkedinUrl,
      href: PROFILE.linkedinUrl,
      icon: Linkedin,
    },
  ];

  const handleCopy = async (channel: ContactChannel) => {
    try {
      await navigator.clipboard.writeText(channel.copyValue);
      setCopiedId(channel.id);
      onNotify(`${channel.label} copied`, channel.copyValue);
      window.setTimeout(() => {
        setCopiedId((prev) => (prev === channel.id ? null : prev));
      }, 2200);
    } catch {
      onNotify(`Copy ${channel.label}`, channel.copyValue);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      onNotify('Missing required fields', 'Please fill in Name, Email, and Message.');
      return;
    }
    const sender = formState.name.trim();
    setSubmittedName(sender);
    onNotify('Message confirmed', `Thank you, ${sender}. Your inquiry has been noted.`);
    setFormState({ name: '', email: '', organization: '', message: '' });
  };

  return (
    <>
      <section id="contact" className="bg-white py-14 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
              Contact
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              Open to Release Management, Scrum Master, and ITIL® Service Governance leadership
              opportunities across Chennai, Bengaluru, and global delivery organizations.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:mt-12 sm:gap-8 lg:grid-cols-12">
            {/* Direct Contact Channels */}
            <div className="space-y-3 lg:col-span-5">
              {channels.map((channel) => {
                const Icon = channel.icon;
                const isCopied = copiedId === channel.id;
                return (
                  <div
                    key={channel.id}
                    className="flex items-center justify-between gap-3 rounded-xl border border-slate-200/90 bg-[#FAF9F6]/70 p-3.5 transition-colors hover:border-slate-300 hover:bg-white sm:p-4"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-emerald-700">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                          {channel.label}
                        </p>
                        {channel.href ? (
                          <a
                            href={channel.href}
                            target={channel.id === 'linkedin' ? '_blank' : undefined}
                            rel={channel.id === 'linkedin' ? 'noopener noreferrer' : undefined}
                            className="block truncate text-sm font-semibold text-slate-900 hover:text-emerald-700"
                          >
                            {channel.value}
                          </a>
                        ) : (
                          <p className="truncate text-sm font-semibold text-slate-900">
                            {channel.value}
                          </p>
                        )}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleCopy(channel)}
                      aria-label={`Copy ${channel.label}`}
                      className="inline-flex h-9 flex-shrink-0 items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 text-xs font-medium text-slate-600 transition-colors hover:border-slate-300 hover:text-slate-900"
                    >
                      {isCopied ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-emerald-600" />
                          <span className="text-emerald-700">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" />
                          <span className="hidden sm:inline">Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Contact Form with Confirmation State */}
            <div className="rounded-2xl border border-slate-200/90 bg-[#FAF9F6]/60 p-5 sm:p-8 lg:col-span-7">
              {submittedName ? (
                <div className="flex min-h-[260px] flex-col items-start justify-center sm:min-h-[300px]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold text-slate-900">
                    Thank you, {submittedName}.
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-600">
                    Your message has been recorded. For urgent hiring or governance inquiries,
                    feel free to email{' '}
                    <a
                      href={`mailto:${PROFILE.email}`}
                      className="font-semibold text-emerald-700 underline underline-offset-4"
                    >
                      {PROFILE.email}
                    </a>{' '}
                    directly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmittedName(null)}
                    className="mt-6 inline-flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="mb-1.5 block text-xs font-semibold text-slate-700"
                      >
                        Name <span className="text-emerald-700">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                        placeholder="Your name"
                        className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/15"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="mb-1.5 block text-xs font-semibold text-slate-700"
                      >
                        Email <span className="text-emerald-700">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                        placeholder="you@company.com"
                        className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/15"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-org"
                      className="mb-1.5 block text-xs font-semibold text-slate-700"
                    >
                      Organization / Role
                    </label>
                    <input
                      id="contact-org"
                      type="text"
                      value={formState.organization}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, organization: e.target.value }))
                      }
                      placeholder="Optional — company or hiring role"
                      className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/15"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="mb-1.5 block text-xs font-semibold text-slate-700"
                    >
                      Message <span className="text-emerald-700">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                      placeholder="Share opportunity details, location, or collaboration scope..."
                      className="w-full resize-none rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/15"
                    />
                  </div>

                  <div className="flex flex-col items-stretch gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-700 sm:w-auto sm:py-2.5"
                    >
                      <Send className="h-4 w-4" />
                      Send Message
                    </button>

                    <a
                      href={`mailto:${PROFILE.email}?subject=${encodeURIComponent(
                        `Portfolio Inquiry${formState.organization ? ` — ${formState.organization}` : ''}`,
                      )}&body=${encodeURIComponent(formState.message)}`}
                      className="text-center text-xs font-medium text-slate-500 underline-offset-4 hover:text-emerald-700 hover:underline sm:text-left"
                    >
                      Open in email app
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200/80 bg-[#FAF9F6] py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center text-xs text-slate-500 sm:flex-row sm:px-8 sm:text-left">
          <p className="font-medium text-slate-700">
            © {new Date().getFullYear()} {PROFILE.name} · Chennai, India
          </p>

          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 font-medium text-slate-600 transition-colors hover:text-emerald-700"
            >
              <Download className="h-3.5 w-3.5" />
              Resume
            </button>
            <a
              href={PROFILE.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-slate-600 transition-colors hover:text-emerald-700"
            >
              <Linkedin className="h-3.5 w-3.5" />
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
