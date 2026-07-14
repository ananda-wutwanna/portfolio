'use client';

import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react';
import { withBase, type Locale } from '@/lib/i18n';

type L = Record<Locale, string>;

export type GalleryImage = {
  src: string;
  label: L;
  alt: L;
};

export type GalleryVideo = GalleryImage & {
  poster: string;
  kind: 'onsite' | 'ui';
};

type Tab = 'photos' | 'onsite' | 'ui';

// A tabbed media gallery: photos, on-site footage, and control-UI clips,
// with a lightbox that slides through the active tab's items. Videos only
// load when opened — the card itself shows lightweight poster thumbnails.
export default function ImageGallery({
  images,
  videos = [],
  locale,
}: {
  images: GalleryImage[];
  videos?: GalleryVideo[];
  locale: Locale;
}) {
  const [tab, setTab] = useState<Tab>('photos');
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const onsite = videos.filter((v) => v.kind === 'onsite');
  const ui = videos.filter((v) => v.kind === 'ui');
  const items = tab === 'photos' ? images : tab === 'onsite' ? onsite : ui;
  const count = items.length;

  const prev = useCallback(
    () => setIndex((i) => (i - 1 + count) % count),
    [count],
  );
  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);

  // Lightbox: keyboard navigation + body scroll lock.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, prev, next]);

  const current = items[index];
  const isVideo = tab !== 'photos';

  return (
    <>
      {/* Tabs — only when there are videos to switch to */}
      {videos.length > 0 && (
        <div className="mb-2 flex gap-1 rounded-full border border-hairline bg-paper/60 p-0.5 font-mono text-[10px] uppercase tracking-wider">
          {(
            [
              ['photos', locale === 'th' ? 'รูปถ่าย' : 'Photos', images.length],
              ['onsite', locale === 'th' ? 'หน้างานจริง' : 'On-site', onsite.length],
              ['ui', locale === 'th' ? 'หน้าเว็บ' : 'Web UI', ui.length],
            ] as [Tab, string, number][]
          )
            .filter(([, , n]) => n > 0)
            .map(([key, label, n]) => (
              <button
                key={key}
                type="button"
                onClick={() => {
                  setTab(key);
                  setIndex(0);
                }}
                aria-pressed={tab === key}
                className={`flex-1 rounded-full px-2 py-1.5 transition-colors ${
                  tab === key
                    ? 'bg-accent text-paper'
                    : 'text-subink hover:text-ink'
                }`}
              >
                {label} · {n}
              </button>
            ))}
        </div>
      )}

      {/* Thumbnail grid */}
      <div className="grid grid-cols-3 gap-2">
        {items.map((item, i) => (
          <button
            key={item.src}
            type="button"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
            aria-label={item.alt[locale]}
            className="group/thumb relative aspect-square cursor-zoom-in overflow-hidden rounded-md border border-hairline"
          >
            <Image
              src={withBase(isVideo ? (item as GalleryVideo).poster : item.src)}
              alt={item.alt[locale]}
              fill
              sizes="(min-width: 1024px) 140px, 30vw"
              className="object-cover transition-transform duration-300 group-hover/thumb:scale-105"
            />
            {isVideo && (
              <span className="absolute inset-0 grid place-items-center">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-black/55 text-white backdrop-blur-sm transition-transform group-hover/thumb:scale-110">
                  <Play size={15} className="ml-0.5" aria-hidden />
                </span>
              </span>
            )}
            <span className="absolute inset-x-0 bottom-0 truncate bg-gradient-to-t from-black/60 to-transparent px-1.5 pb-1 pt-3 text-left font-mono text-[9px] uppercase tracking-wider text-white">
              {item.label[locale]}
            </span>
          </button>
        ))}
      </div>

      {/* Lightbox — rendered in a portal so `fixed` isn't trapped by any
          transformed/will-change ancestor (e.g. the card's reveal animation). */}
      {open &&
        current &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex flex-col bg-black/90 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={current.alt[locale]}
            onClick={() => setOpen(false)}
            onContextMenu={(e) => e.preventDefault()}
          >
            <div className="flex items-center justify-between p-4">
              <span className="rounded-full bg-white/10 px-3 py-1 font-mono text-xs uppercase tracking-label text-white">
                {current.label[locale]} · {index + 1}/{count}
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              >
                <X size={18} aria-hidden />
              </button>
            </div>

            <div
              className="relative mx-4 flex-1"
              onClick={(e) => e.stopPropagation()}
            >
              {isVideo ? (
                <video
                  key={current.src}
                  src={withBase(current.src)}
                  poster={withBase((current as GalleryVideo).poster)}
                  controls
                  controlsList="nodownload noremoteplayback"
                  disablePictureInPicture
                  onContextMenu={(e) => e.preventDefault()}
                  autoPlay
                  muted
                  playsInline
                  className="absolute inset-0 h-full w-full object-contain"
                />
              ) : (
                <Image
                  src={withBase(current.src)}
                  alt={current.alt[locale]}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              )}

              {count > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prev}
                    aria-label="Previous"
                    className="absolute left-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                  >
                    <ChevronLeft size={20} aria-hidden />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    aria-label="Next"
                    className="absolute right-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                  >
                    <ChevronRight size={20} aria-hidden />
                  </button>
                </>
              )}
            </div>

            {/* Dot indicators */}
            <div
              className="flex justify-center gap-1.5 p-4"
              onClick={(e) => e.stopPropagation()}
            >
              {items.map((item, i) => (
                <button
                  key={item.src}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={item.label[locale]}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? 'w-5 bg-white' : 'w-1.5 bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
