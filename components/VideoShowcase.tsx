"use client";

import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Captions,
  Clapperboard,
  Play,
  X,
} from "lucide-react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

export type VideoSample = {
  id: string;
  title: string;
  type: string;
  category: string;
  format: string;
  useCase: string;
  videoSrc: string;
  posterSrc?: string;
  captionSrc?: string;
};

type VideoShowcaseContextValue = {
  activeIndex: number | null;
  closeViewer: () => void;
  openSample: (index: number) => void;
  samples: VideoSample[];
  showNext: () => void;
  showPrevious: () => void;
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
  children: ReactNode;
  samples: VideoSample[];
};

export function VideoShowcaseProvider({
  children,
  samples,
}: VideoShowcaseProviderProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLElement>(null);
  const pageContentRef = useRef<HTMLDivElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const viewerTitleId = useId();
  const viewerDescriptionId = useId();
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
    const pageContent = pageContentRef.current;
    document.body.style.overflow = "hidden";
    pageContent?.setAttribute("inert", "");
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
      pageContent?.removeAttribute("inert");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeViewer, showNext, showPrevious, viewerIsOpen]);

  const activeSample = activeIndex === null ? null : samples[activeIndex];

  return (
    <VideoShowcaseContext.Provider
      value={{
        activeIndex,
        closeViewer,
        openSample,
        samples,
        showNext,
        showPrevious,
      }}
    >
      <div ref={pageContentRef}>{children}</div>

      {activeSample && activeIndex !== null ? (
        <div className="fixed inset-0 z-[100] grid place-items-center p-3 sm:p-6">
          <button
            type="button"
            aria-label="Dismiss video viewer"
            className="absolute inset-0 cursor-default bg-[#171513]/92 backdrop-blur-md"
            onClick={closeViewer}
            tabIndex={-1}
          />

          <section
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={viewerTitleId}
            aria-describedby={viewerDescriptionId}
            className="video-modal-enter relative z-10 grid h-[94dvh] max-h-[880px] w-full max-w-5xl grid-rows-[minmax(0,1fr)_auto] overflow-hidden rounded-[1.4rem] border border-white/12 bg-[#171513] text-white shadow-[0_36px_120px_rgba(0,0,0,0.58)] lg:h-[min(88dvh,800px)] lg:grid-cols-[minmax(320px,440px)_1fr] lg:grid-rows-1"
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeViewer}
              aria-label="Close video viewer"
              title="Close"
              className="focus-ring absolute right-3 top-3 z-20 grid size-11 place-items-center rounded-full border border-white/20 bg-[#171513]/82 text-white shadow-lg backdrop-blur transition hover:rotate-6 hover:bg-white hover:text-[#171513]"
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
                className="h-full min-h-0 w-full max-w-full rounded-[1rem] object-contain"
              >
                {activeSample.captionSrc ? (
                  <track
                    kind="captions"
                    src={activeSample.captionSrc}
                    srcLang="en"
                    label="English"
                  />
                ) : null}
                Your browser does not support HTML video. You can still open the
                video file directly.
              </video>
            </div>

            <div className="flex min-h-0 flex-col justify-between gap-6 overflow-y-auto p-5 sm:p-8">
              <div aria-live="polite">
                <div className="flex flex-wrap gap-2 text-[0.68rem] font-black uppercase tracking-[0.12em]">
                  <span className="rounded-full bg-[#d7f36a] px-3 py-2 text-[#171513]">
                    {activeSample.category}
                  </span>
                  <span className="rounded-full border border-white/16 px-3 py-2 text-white/70">
                    {activeSample.useCase}
                  </span>
                </div>
                <p className="mt-7 text-xs font-black uppercase tracking-[0.18em] text-[#f58ba4]">
                  Sample {activeIndex + 1} of {samples.length}
                </p>
                <h2
                  id={viewerTitleId}
                  className="mt-3 text-3xl font-black leading-tight sm:text-5xl"
                >
                  {activeSample.title}
                </h2>
                <p
                  id={viewerDescriptionId}
                  className="mt-4 text-sm font-semibold leading-7 text-white/64 sm:text-base"
                >
                  {activeSample.format} · {activeSample.type}
                </p>
                {activeSample.captionSrc ? (
                  <p className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-white/55">
                    <Captions aria-hidden="true" size={16} />
                    Optional English captions are available in the player.
                  </p>
                ) : null}
              </div>

              <div className="flex items-center justify-between gap-3 border-t border-white/12 pt-5">
                <button
                  type="button"
                  onClick={showPrevious}
                  aria-label="Previous video sample"
                  title="Previous sample"
                  className="focus-ring grid size-11 place-items-center rounded-full border border-white/16 transition hover:bg-white hover:text-[#171513]"
                >
                  <ArrowLeft aria-hidden="true" size={18} />
                </button>
                <p className="text-center text-xs font-black uppercase tracking-[0.18em] text-white/48">
                  Use arrow keys to browse
                </p>
                <button
                  type="button"
                  onClick={showNext}
                  aria-label="Next video sample"
                  title="Next sample"
                  className="focus-ring grid size-11 place-items-center rounded-full bg-[#d7f36a] text-[#171513] transition hover:bg-white"
                >
                  <ArrowRight aria-hidden="true" size={18} />
                </button>
              </div>
            </div>
          </section>
        </div>
      ) : null}
    </VideoShowcaseContext.Provider>
  );
}

type SampleTriggerProps = {
  children?: ReactNode;
  className?: string;
  index?: number;
  label?: string;
};

export function SampleTrigger({
  children,
  className,
  index = 0,
  label = "Watch selected work",
}: SampleTriggerProps) {
  const { openSample, samples } = useVideoShowcase();

  return (
    <button
      type="button"
      onClick={() => openSample(index)}
      disabled={samples.length <= index}
      aria-label={label}
      className={className}
    >
      {children ?? (
        <>
          <Play aria-hidden="true" className="fill-current" size={17} />
          Watch selected work
        </>
      )}
    </button>
  );
}

export function WatchSamplesButton({ className }: { className?: string }) {
  return <SampleTrigger className={className} />;
}

function VideoCard({ sample, index }: { sample: VideoSample; index: number }) {
  const { openSample } = useVideoShowcase();

  return (
    <article className="video-card group relative">
      <button
        type="button"
        onClick={() => openSample(index)}
        className="focus-ring block w-full rounded-[1.3rem] text-left"
      >
        <span className="sr-only">Play </span>
        <span className="relative block aspect-[9/16] overflow-hidden rounded-[1.3rem] bg-[#2b2622] shadow-[0_22px_55px_rgba(23,18,15,0.16)] transition duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_30px_75px_rgba(121,46,71,0.25)]">
          {sample.posterSrc ? (
            <Image
              src={sample.posterSrc}
              alt=""
              fill
              sizes="(max-width: 639px) 36vw, (max-width: 1023px) 30vw, 22vw"
              className="object-cover transition duration-700 group-hover:scale-[1.035]"
            />
          ) : (
            <span className="video-poster-fallback absolute inset-0 grid place-items-center px-5 text-center text-white">
              <span>
                <Clapperboard
                  aria-hidden="true"
                  className="mx-auto text-[#d7f36a]"
                  size={32}
                />
                <span className="mt-3 block font-serif text-3xl italic">
                  Mysbah
                </span>
              </span>
            </span>
          )}

          <span className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/72 to-transparent" />
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-2 text-[0.64rem] font-black uppercase tracking-[0.12em] text-[#171513] backdrop-blur">
            {sample.category}
          </span>
          <span className="absolute right-3 top-3 grid size-11 place-items-center rounded-full bg-[#d7f36a] text-[#171513] shadow-lg transition duration-300 group-hover:scale-110 group-hover:bg-white">
            <Play aria-hidden="true" className="ml-0.5 fill-current" size={18} />
          </span>
          <span className="absolute inset-x-4 bottom-4 text-white">
            <span className="block text-xs font-bold text-white/72">
              {sample.format}
            </span>
            <span className="mt-1 block text-lg font-black leading-tight">
              {sample.title}
            </span>
          </span>
        </span>
        <span className="mt-3 flex flex-col items-start gap-1 px-1 text-xs font-bold text-[#6d625c] sm:flex-row sm:items-center sm:justify-between sm:gap-3">
          <span>{sample.type}</span>
          <span className="text-[#8e304f] sm:shrink-0">{sample.useCase}</span>
        </span>
      </button>
    </article>
  );
}

export function PortfolioGallery() {
  const { samples } = useVideoShowcase();
  const [activeCategory, setActiveCategory] = useState("All work");

  const categories = useMemo(
    () => ["All work", ...Array.from(new Set(samples.map((sample) => sample.category)))],
    [samples],
  );

  const visibleSamples = useMemo(
    () =>
      samples
        .map((sample, index) => ({ sample, index }))
        .filter(
          ({ sample }) =>
            activeCategory === "All work" || sample.category === activeCategory,
        ),
    [activeCategory, samples],
  );

  if (samples.length === 0) {
    return (
      <div className="rounded-[1.3rem] border border-dashed border-[#171513]/20 bg-[#f1ebe4] p-8 text-center text-sm font-bold text-[#6d625c]">
        Portfolio videos are being prepared.
      </div>
    );
  }

  return (
    <div>
      <div
        aria-label="Filter portfolio videos"
        className="portfolio-filters mb-7 flex gap-2 overflow-x-auto pb-2"
        role="group"
      >
        {categories.map((category) => {
          const isActive = category === activeCategory;

          return (
            <button
              key={category}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveCategory(category)}
              className={`focus-ring min-h-11 shrink-0 rounded-full px-5 text-xs font-black uppercase tracking-[0.08em] transition ${
                isActive
                  ? "bg-[#171513] text-white"
                  : "border border-[#171513]/10 bg-white text-[#5f5651] hover:border-[#8e304f]/40 hover:text-[#171513]"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="portfolio-grid" aria-live="polite">
        {visibleSamples.map(({ sample, index }) => (
          <VideoCard
            key={`${sample.id}-${sample.videoSrc}`}
            sample={sample}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
