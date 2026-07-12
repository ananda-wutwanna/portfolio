'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { FileDown, FileText, X } from 'lucide-react';
import { withBase, type Locale } from '@/lib/i18n';
import { site } from '@/data/site';

// A themed full-screen resume preview. Pages are rendered from the real PDF
// with pdf.js onto crisp canvases (no browser PDF-viewer chrome), floating as
// cards over a dimmed backdrop, with a prominent download button.
// pdf.js (~400 KB) loads lazily, only when the preview is opened.
export default function ResumePreviewButton({
  locale,
  label,
  className,
  onOpen,
}: {
  locale: Locale;
  label: React.ReactNode;
  className?: string;
  onOpen?: () => void;
}) {
  const [open, setOpen] = useState(false);
  // Which resume file is being previewed — switchable inside the modal.
  const [lang, setLang] = useState<Locale>(locale);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>(
    'loading',
  );
  const pagesRef = useRef<HTMLDivElement | null>(null);

  const th = locale === 'th';
  // Version query busts the browser cache whenever the PDFs are replaced.
  const pdfHref = `${withBase(site.resume[lang])}?v=${site.resumeVersion}`;

  // Load + render the PDF whenever the modal opens.
  useEffect(() => {
    if (!open) return;
    let cancelled = false;
    setStatus('loading');
    // Drop the previous document's pages right away so switching language
    // shows the loading state across the whole preview, not stale pages.
    if (pagesRef.current) pagesRef.current.innerHTML = '';

    (async () => {
      try {
        const pdfjs = await import('pdfjs-dist');
        pdfjs.GlobalWorkerOptions.workerSrc = withBase('/pdf.worker.min.mjs');
        const doc = await pdfjs.getDocument({ url: pdfHref }).promise;
        if (cancelled) return;

        const container = pagesRef.current;
        if (!container) return;
        container.innerHTML = '';

        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        for (let n = 1; n <= doc.numPages; n++) {
          const page = await doc.getPage(n);
          if (cancelled) return;

          const base = page.getViewport({ scale: 1 });
          // Render at up to 860 CSS px wide, at device resolution.
          const cssWidth = Math.min(860, base.width * 1.4);
          const viewport = page.getViewport({
            scale: (cssWidth / base.width) * dpr,
          });

          const canvas = document.createElement('canvas');
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          canvas.style.width = '100%';
          canvas.style.height = 'auto';
          canvas.style.display = 'block';

          const wrap = document.createElement('div');
          wrap.className = 'resume-page';
          wrap.style.animationDelay = `${(n - 1) * 90}ms`;
          wrap.appendChild(canvas);
          container.appendChild(wrap);

          await page.render({ canvas, viewport }).promise;
        }
        if (!cancelled) setStatus('ready');
      } catch {
        if (!cancelled) setStatus('error');
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [open, pdfHref]);

  // Escape to close + scroll lock.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setOpen(true);
          onOpen?.();
        }}
        className={className}
      >
        {label}
      </button>

      {open &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex flex-col bg-black/85 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={th ? 'เรซูเม่' : 'Resume'}
            onClick={() => setOpen(false)}
          >
            {/* Top bar */}
            <div
              className="flex items-center justify-between gap-3 p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 font-mono text-xs uppercase tracking-label text-white">
                  <FileText size={13} aria-hidden />
                  Resume
                </span>
                {/* Switch which language's resume is previewed */}
                <div
                  className="flex rounded-full bg-white/10 p-0.5 font-mono text-[11px] uppercase"
                  role="group"
                  aria-label={th ? 'ภาษาของเรซูเม่' : 'Resume language'}
                >
                  {(['th', 'en'] as Locale[]).map((code) => (
                    <button
                      key={code}
                      type="button"
                      onClick={() => setLang(code)}
                      aria-pressed={lang === code}
                      className={`rounded-full px-2.5 py-1 tracking-wider transition-colors ${
                        lang === code
                          ? 'bg-accent text-white'
                          : 'text-white/60 hover:text-white'
                      }`}
                    >
                      {code}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={pdfHref}
                  download
                  className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-xs font-semibold text-white shadow-[0_0_24px_-4px_rgba(53,208,127,0.8)] transition-transform hover:-translate-y-0.5"
                >
                  <FileDown size={14} aria-hidden />
                  {th ? 'ดาวน์โหลด PDF' : 'Download PDF'}
                </a>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label={th ? 'ปิด' : 'Close'}
                  className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                >
                  <X size={18} aria-hidden />
                </button>
              </div>
            </div>

            {/* Pages */}
            <div
              className="flex-1 overflow-y-auto overscroll-contain px-4 pb-10"
              onClick={(e) => e.stopPropagation()}
            >
              {status === 'loading' && (
                <div className="flex h-full flex-col items-center justify-center gap-3 font-mono text-xs uppercase tracking-label text-white/70">
                  <span className="h-8 w-8 animate-spin rounded-full border-2 border-white/25 border-t-accent" />
                  {th ? 'กำลังโหลดเรซูเม่…' : 'Loading resume…'}
                </div>
              )}
              {status === 'error' && (
                <div className="pt-24 text-center font-mono text-xs text-white/80">
                  {th ? 'เปิดตัวอย่างไม่สำเร็จ — ' : 'Preview failed — '}
                  <a href={pdfHref} download className="text-accent underline">
                    {th ? 'ดาวน์โหลด PDF แทน' : 'download the PDF instead'}
                  </a>
                </div>
              )}
              <div ref={pagesRef} className="mx-auto max-w-[860px] space-y-6 pt-2" />
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
