"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, Clapperboard, Play, X } from "lucide-react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent,
  type ReactNode,
} from "react";

export type VideoSample = {
  id: string;
  category: string;
  label: string;
  format: string;
  videoSrc: string;
  posterSrc?: string;
  captionSrc?: string;
};

export type VideoCategory = {
  id: string;
  title: string;
};

type VideoShowcaseContextValue = {
  categories: VideoCategory[];
  openSample: (index: number) => void;
  samples: VideoSample[];
};

const VideoShowcaseContext = createContext<VideoShowcaseContextValue | null>(
  null,
);

function useVideoShowcase() {
  const context = useContext(VideoShowcaseContext);

  if (!context) {
    throw new Error("Video showcase controls must be inside their provider.");
  }

  return context;
}

type VideoShowcaseProviderProps = {
  categories: VideoCategory[];
  children: ReactNode;
  samples: VideoSample[];
};

export function VideoShowcaseProvider({
  categories,
  children,
  samples,
}: VideoShowcaseProviderProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const viewerTitleId = useId();
  const viewerIsOpen = activeIndex !== null;

  const openSample = useCallback((index: number) => {
    returnFocusRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    setActiveIndex(index);
  }, []);

  const closeViewer = useCallback(() => {
    setActiveIndex(null);
    window.setTimeout(() => returnFocusRef.current?.focus(), 0);
  }, []);

  const showPrevious = useCallback(() => {
    setActiveIndex((current) =>
      current === null
        ? current
        : (current - 1 + samples.length) % samples.length,
    );
  }, [samples.length]);

  const showNext = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? current : (current + 1) % samples.length,
    );
  }, [samples.length]);

  useEffect(() => {
    if (!viewerIsOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.requestAnimationFrame(() => closeButtonRef.current?.focus());

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeViewer();
      }

      const videoHasFocus = event.target instanceof HTMLVideoElement;

      if (event.key === "ArrowLeft" && !videoHasFocus) {
        event.preventDefault();
        showPrevious();
      }

      if (event.key === "ArrowRight" && !videoHasFocus) {
        event.preventDefault();
        showNext();
      }

      if (event.key === "Tab" && dialogRef.current) {
        const focusableElements = Array.from(
          dialogRef.current.querySelectorAll<HTMLElement>(
            'button:not([disabled]), video[controls], a[href], [tabindex]:not([tabindex="-1"])',
          ),
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements.at(-1);

        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement?.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement?.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeViewer, showNext, showPrevious, viewerIsOpen]);

  const activeSample = activeIndex === null ? null : samples[activeIndex];
  const activeCategory = categories.find(
    (category) => category.id === activeSample?.category,
  );

  return (
    <VideoShowcaseContext.Provider value={{ categories, openSample, samples }}>
      {children}

      {activeSample && activeIndex !== null ? (
        <div className="fixed inset-0 z-[100] grid place-items-center p-3 sm:p-6">
          <button
            type="button"
            aria-label="Close video"
            className="absolute inset-0 cursor-default bg-cocoa/85 backdrop-blur-md"
            onClick={closeViewer}
            tabIndex={-1}
          />

          <section
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={viewerTitleId}
            className="pop-modal relative z-10 grid h-[94dvh] max-h-[860px] w-full max-w-4xl grid-rows-[minmax(0,1fr)_auto] overflow-hidden rounded-[1.75rem] border-4 border-strawberry bg-cocoa text-cream shadow-[0_36px_120px_rgba(0,0,0,0.55)] lg:h-[min(88dvh,780px)] lg:grid-cols-[minmax(320px,420px)_1fr] lg:grid-rows-1"
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeViewer}
              aria-label="Close video"
              title="Close"
              className="focus-ring absolute right-3 top-3 z-20 grid size-11 place-items-center rounded-full bg-strawberry text-white shadow-lg transition hover:rotate-90 hover:bg-berry"
            >
              <X aria-hidden="true" size={20} />
            </button>

            <div className="grid min-h-0 place-items-center overflow-hidden bg-black p-2 sm:p-3">
              <video
                key={activeSample.videoSrc}
                src={activeSample.videoSrc}
                poster={activeSample.posterSrc}
                controls
                autoPlay
                playsInline
                preload="metadata"
                className="h-full min-h-0 w-full max-w-full rounded-2xl object-contain"
              >
                {activeSample.captionSrc ? (
                  <track
                    kind="captions"
                    src={activeSample.captionSrc}
                    srcLang="en"
                    label="English"
                  />
                ) : null}
                Your browser does not support HTML video.
              </video>
            </div>

            <div className="flex min-h-0 flex-col justify-between gap-5 overflow-y-auto p-5 sm:p-8">
              <div aria-live="polite">
                {activeCategory ? (
                  <span className="inline-block rounded-full bg-matcha px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                    {activeCategory.title}
                  </span>
                ) : null}
                <h2
                  id={viewerTitleId}
                  className="mt-4 font-display text-4xl leading-tight sm:text-5xl"
                >
                  {activeSample.label}
                </h2>
                <p className="mt-2 font-script text-3xl text-strawberry-soft">
                  {activeSample.format}
                </p>
              </div>

              <div className="flex items-center justify-between gap-3 border-t border-cream/15 pt-5">
                <button
                  type="button"
                  onClick={showPrevious}
                  aria-label="Previous video"
                  title="Previous video"
                  className="focus-ring grid size-11 place-items-center rounded-full border border-cream/25 transition hover:bg-cream hover:text-cocoa"
                >
                  <ArrowLeft aria-hidden="true" size={17} />
                </button>
                <p className="text-center text-xs font-bold uppercase tracking-wide text-cream/60">
                  {activeIndex + 1} / {samples.length}
                </p>
                <button
                  type="button"
                  onClick={showNext}
                  aria-label="Next video"
                  title="Next video"
                  className="focus-ring grid size-11 place-items-center rounded-full bg-strawberry text-white transition hover:bg-berry"
                >
                  <ArrowRight aria-hidden="true" size={17} />
                </button>
              </div>
            </div>
          </section>
        </div>
      ) : null}
    </VideoShowcaseContext.Provider>
  );
}

function PhoneVideoCard({
  sample,
  index,
  order,
}: {
  sample: VideoSample;
  index: number;
  order: number;
}) {
  const { openSample } = useVideoShowcase();
  const previewRef = useRef<HTMLVideoElement>(null);
  const [previewing, setPreviewing] = useState(false);

  const startPreview = (event: PointerEvent) => {
    if (event.pointerType !== "mouse" || !previewRef.current) {
      return;
    }

    previewRef.current.currentTime = 0;
    previewRef.current.play().then(
      () => setPreviewing(true),
      () => setPreviewing(false),
    );
  };

  const stopPreview = () => {
    previewRef.current?.pause();
    setPreviewing(false);
  };

  return (
    <article
      data-pop
      style={{ "--pop-delay": `${order * 70}ms` } as CSSProperties}
      className="video-tile group"
    >
      <button
        type="button"
        onClick={() => openSample(index)}
        onPointerEnter={startPreview}
        onPointerLeave={stopPreview}
        className="focus-ring block w-full rounded-[1.6rem] text-left"
      >
        <span className="sr-only">
          Play {sample.label}, {sample.format}
        </span>
        <span className="phone-frame block">
          <span className="phone-notch" aria-hidden="true" />
          <span className="relative block aspect-[9/16] overflow-hidden rounded-[1.15rem] bg-cocoa">
            {sample.posterSrc ? (
              <Image
                src={sample.posterSrc}
                alt=""
                fill
                sizes="(max-width: 640px) 46vw, (max-width: 1024px) 30vw, 240px"
                className="object-cover"
              />
            ) : (
              <span className="absolute inset-0 grid place-items-center bg-berry text-cream">
                <span className="text-center">
                  <Clapperboard aria-hidden="true" className="mx-auto" size={30} />
                  <span className="mt-2 block font-display text-2xl">
                    Mysbah
                  </span>
                </span>
              </span>
            )}

            <video
              ref={previewRef}
              src={sample.videoSrc}
              muted
              loop
              playsInline
              preload="none"
              aria-hidden="true"
              tabIndex={-1}
              className={`absolute inset-0 size-full object-cover transition-opacity duration-300 ${
                previewing ? "opacity-100" : "opacity-0"
              }`}
            />

            <span
              aria-hidden="true"
              className={`absolute inset-0 grid place-items-center transition-opacity duration-300 ${
                previewing ? "opacity-0" : "opacity-100"
              }`}
            >
              <span className="grid size-14 place-items-center rounded-full bg-cream/90 text-berry shadow-lg transition duration-300 group-hover:scale-110">
                <Play aria-hidden="true" className="ml-1 fill-current" size={22} />
              </span>
            </span>
          </span>
        </span>
      </button>
      <p className="mt-3 text-center">
        <span className="inline-block rounded-full bg-strawberry px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
          {sample.label}
        </span>
        <span className="mt-1 block text-xs font-medium text-cocoa/70">
          {sample.format}
        </span>
      </p>
    </article>
  );
}

export function CategoryJumpMenu() {
  const { categories, samples } = useVideoShowcase();
  const filled = categories.filter((category) =>
    samples.some((sample) => sample.category === category.id),
  );

  return (
    <nav
      aria-label="Portfolio categories"
      className="flex flex-wrap justify-center gap-2"
    >
      {filled.map((category) => (
        <a
          key={category.id}
          href={`#work-${category.id}`}
          className="focus-ring rounded-full border-2 border-matcha px-4 py-2 text-sm font-bold text-matcha-deep transition hover:-translate-y-0.5 hover:bg-matcha hover:text-white"
        >
          {category.title}
        </a>
      ))}
    </nav>
  );
}

export function CategoryPortfolio() {
  const { categories, samples } = useVideoShowcase();

  if (samples.length === 0) {
    return (
      <p className="rounded-2xl border-2 border-dashed border-matcha/40 p-8 text-center font-medium text-cocoa/70">
        New videos are on their way.
      </p>
    );
  }

  return (
    <div className="space-y-16 sm:space-y-20">
      {categories.map((category) => {
        const items = samples
          .map((sample, index) => ({ sample, index }))
          .filter(({ sample }) => sample.category === category.id);

        if (items.length === 0) {
          return null;
        }

        return (
          <section
            key={category.id}
            id={`work-${category.id}`}
            aria-labelledby={`work-${category.id}-title`}
          >
            <div data-pop className="mb-8 text-center">
              <h3
                id={`work-${category.id}-title`}
                className="font-display text-5xl text-berry sm:text-6xl"
              >
                {category.title}
              </h3>
              <p className="-mt-1 font-script text-2xl text-matcha sm:text-3xl">
                Short form UGC videos
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-8 sm:gap-x-6">
              {items.map(({ sample, index }, order) => (
                <PhoneVideoCard
                  key={sample.id}
                  sample={sample}
                  index={index}
                  order={order}
                />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
