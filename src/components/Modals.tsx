import React, { useEffect, useState } from 'react';
import { Check, Copy, Send, X } from 'lucide-react';
import { ProjectItem } from './ProjectsSection';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onContact: () => void;
}

export function ProjectModal({ project, onClose, onContact }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const images = [project.col2Image, project.col1Images[0], project.col1Images[1]];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.name}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[32px] border border-[#D7E2EA]/30 bg-[#0C0C0C] p-6 text-[#D7E2EA] sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-[#D7E2EA]/15 pb-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-[#D7E2EA]/60">
              {project.number} · {project.category}
            </p>
            <h3 className="mt-1 text-2xl font-bold uppercase tracking-tight sm:text-4xl">
              {project.name}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project preview"
            className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[#D7E2EA]/30 text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-6 flex flex-col gap-6">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <p className="max-w-2xl text-sm font-light leading-relaxed text-[#D7E2EA]/80 sm:text-base">
              {project.summary}
            </p>
            <p className="text-xs uppercase tracking-wider text-[#D7E2EA]/60">
              {project.deliverables.join(' · ')}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {images.map((src, idx) => (
              <div
                key={idx}
                className={`overflow-hidden rounded-[24px] bg-[#161616] ${
                  idx === 0 ? 'sm:col-span-2 h-[260px] sm:h-[400px]' : 'h-[220px] sm:h-[280px]'
                }`}
              >
                <img
                  src={src}
                  alt={`${project.name} detail ${idx + 1}`}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="button"
              onClick={() => {
                onClose();
                onContact();
              }}
              className="cursor-pointer rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-xs font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10 sm:text-sm"
            >
              Inquire About Similar Work
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

const SERVICE_OPTIONS = [
  '3D Modeling',
  'Rendering',
  'Motion Design',
  'Branding',
  'Web Design',
];

export function ContactModal({ open, onClose }: ContactModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('3D Modeling');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('hello@yooyoung.design');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setMessage('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md sm:p-6"
      onClick={handleResetAndClose}
      role="dialog"
      aria-modal="true"
      aria-label="Contact Yooyoung"
    >
      <div
        className="relative w-full max-w-xl rounded-[32px] border border-[#D7E2EA]/30 bg-[#0C0C0C] p-6 text-[#D7E2EA] sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-[#D7E2EA]/15 pb-5">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-[#D7E2EA]/60">
              Start a Project
            </p>
            <h3 className="mt-1 text-2xl font-bold uppercase tracking-tight sm:text-3xl">
              Contact Yooyoung
            </h3>
          </div>
          <button
            type="button"
            onClick={handleResetAndClose}
            aria-label="Close contact form"
            className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[#D7E2EA]/30 text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-10 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#D7E2EA]/30 text-[#BBCCD7]">
              <Check className="h-6 w-6" />
            </div>
            <h4 className="mt-4 text-xl font-semibold uppercase tracking-wide">
              Inquiry Received
            </h4>
            <p className="mx-auto mt-2 max-w-md text-sm font-light leading-relaxed text-[#D7E2EA]/75">
              Thank you, {name}. Your {service} inquiry has been prepared — Yooyoung typically responds within 24 hours.
            </p>
            <button
              type="button"
              onClick={handleResetAndClose}
              className="mt-8 cursor-pointer rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-xs font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10"
            >
              Back to Portfolio
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
            <div className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-[#D7E2EA]/15 bg-[#141414] px-4 py-3 text-xs sm:text-sm">
              <span className="text-[#D7E2EA]/70">Direct Email: hello@yooyoung.design</span>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex cursor-pointer items-center gap-1.5 font-medium uppercase tracking-wider text-[#BBCCD7] transition-opacity hover:opacity-75"
              >
                {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-1.5 text-xs uppercase tracking-wider text-[#D7E2EA]/70">
                Name
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="rounded-xl border border-[#D7E2EA]/20 bg-[#141414] px-4 py-3 text-sm font-normal normal-case tracking-normal text-[#D7E2EA] placeholder-[#D7E2EA]/35 focus:border-[#BBCCD7] focus:outline-none"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-xs uppercase tracking-wider text-[#D7E2EA]/70">
                Email
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@studio.com"
                  className="rounded-xl border border-[#D7E2EA]/20 bg-[#141414] px-4 py-3 text-sm font-normal normal-case tracking-normal text-[#D7E2EA] placeholder-[#D7E2EA]/35 focus:border-[#BBCCD7] focus:outline-none"
                />
              </label>
            </div>

            <div className="flex flex-col gap-1.5 text-xs uppercase tracking-wider text-[#D7E2EA]/70">
              <span>Discipline</span>
              <div className="flex flex-wrap gap-2">
                {SERVICE_OPTIONS.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setService(opt)}
                    className={`cursor-pointer rounded-full border px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider transition-colors ${
                      service === opt
                        ? 'border-[#D7E2EA] bg-[#D7E2EA] text-[#0C0C0C]'
                        : 'border-[#D7E2EA]/25 text-[#D7E2EA]/75 hover:border-[#D7E2EA]/60'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <label className="flex flex-col gap-1.5 text-xs uppercase tracking-wider text-[#D7E2EA]/70">
              Project Brief
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell Yooyoung about your timeline, goals, and visual direction..."
                className="resize-none rounded-xl border border-[#D7E2EA]/20 bg-[#141414] px-4 py-3 text-sm font-normal normal-case tracking-normal text-[#D7E2EA] placeholder-[#D7E2EA]/35 focus:border-[#BBCCD7] focus:outline-none"
              />
            </label>

            <button
              type="submit"
              className="mt-2 inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-8 py-3.5 text-xs font-medium uppercase tracking-widest text-white transition-transform hover:scale-[1.01] sm:text-sm"
              style={{
                background:
                  'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                boxShadow:
                  '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
                outline: '2px solid #FFFFFF',
                outlineOffset: '-3px',
              }}
            >
              <Send className="h-4 w-4" />
              Send Inquiry
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
