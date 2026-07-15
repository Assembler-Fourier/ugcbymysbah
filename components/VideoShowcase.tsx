"use client";

import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
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
  useRef,
  useState,
  type ReactNode,
} from "react";

export type VideoSample = {
  id: string;
  title: string;
  type: string;
  videoSrc: string;
  posterSrc?: string;
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
      {children}

      {activeSample && activeIndex !== null ? (
        <div className="fixed inset-0 z-[100] grid place-items-center p-3 sm:p-6">
          <button
            type="button"
            aria-label="Dismiss video viewer backdrop"
            className="absolute inset-0 cursor-default bg-[#17120f]/88 backdrop-blur-md"
            onClick={closeViewer}
            tabIndex={-1}
          />

          <section
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={viewerTitleId}
            className="video-modal-enter relative z-10 grid h-[94dvh] max-h-[900px] w-full max-w-5xl grid-rows-[minmax(0,1fr)_auto] overflow-hidden rounded-lg border border-white/15 bg-[#17120f] text-white shadow-[0_36px_120px_rgba(0,0,0,0.55)] lg:h-[min(88dvh,800px)] lg:grid-cols-[minmax(320px,440px)_1fr] lg:grid-rows-1"
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeViewer}
              aria-label="Close video viewer"
              title="Close"
              className="focus-ring absolute right-3 top-3 z-20 grid size-11 place-items-center rounded-full border border-white/20 bg-[#17120f]/82 text-white shadow-lg backdrop-blur transition hover:rotate-6 hover:bg-white hover:text-[#17120f]"
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
                className="h-full min-h-0 w-full max-w-full rounded-lg object-contain"
              />
            </div>

            <div className="flex min-h-0 flex-col justify-between gap-5 overflow-y-auto p-4 sm:p-7">
              <div aria-live="polite">
                <p className="text-xs font-black uppercase text-[#a8c686]">
                  Sample {activeIndex + 1} of {samples.length}
                </p>
                <h2
                  id={viewerTitleId}
                  className="mt-3 text-2xl font-black sm:mt-5 sm:text-5xl"
                >
                  {activeSample.title}
                </h2>
                <p className="mt-2 text-sm font-bold leading-6 text-white/65 sm:mt-3 sm:text-base sm:leading-7">
                  {activeSample.type}
                </p>
              </div>

              <div className="flex items-center justify-between gap-3 border-t border-white/12 pt-5">
                <button
                  type="button"
                  onClick={showPrevious}
                  aria-label="Previous video sample"
                  title="Previous sample"
                  className="focus-ring grid size-11 place-items-center rounded-full border border-white/16 transition hover:bg-white hover:text-[#17120f]"
                >
                  <ArrowLeft aria-hidden="true" size={17} />
                </button>
                <p className="text-center text-xs font-black uppercase text-white/54">
                  {activeIndex + 1} / {samples.length}
                </p>
                <button
                  type="button"
                  onClick={showNext}
                  aria-label="Next video sample"
                  title="Next sample"
                  className="focus-ring grid size-11 place-items-center rounded-full bg-[#a8c686] text-[#17120f] transition hover:bg-white"
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

type WatchSamplesButtonProps = {
  className?: string;
};

export function WatchSamplesButton({ className }: WatchSamplesButtonProps) {
  const { openSample, samples } = useVideoShowcase();

  return (
    <button
      type="button"
      onClick={() => openSample(0)}
      disabled={samples.length === 0}
      className={className}
    >
      <Play aria-hidden="true" className="fill-current" size={17} />
      Watch Samples
    </button>
  );
}

function VideoCard({ sample, index }: { sample: VideoSample; index: number }) {
  const { openSample } = useVideoShowcase();

  return (
    <article className="video-card-width video-card group relative">
      <button
        type="button"
        onClick={() => openSample(index)}
        aria-label={`Play ${sample.title} video sample`}
        className="focus-ring block w-full text-left"
      >
        <span className="relative block aspect-[9/16] overflow-hidden rounded-lg border-[7px] border-[#17120f] bg-[#2a2220] shadow-[0_22px_55px_rgba(23,18,15,0.24)] transition duration-500 group-hover:-translate-y-2 group-hover:rotate-1 group-hover:shadow-[0_30px_75px_rgba(183,72,104,0.28)]">
          {sample.posterSrc ? (
            <Image
              src={sample.posterSrc}
              alt=""
              fill
              sizes="(max-width: 640px) 44vw, (max-width: 1024px) 29vw, 180px"
              className="object-cover transition duration-700 group-hover:scale-[1.04]"
            />
          ) : (
            <span className="video-poster-fallback absolute inset-0 grid place-items-center px-5 text-center text-white">
              <span>
                <Clapperboard
                  aria-hidden="true"
                  className="mx-auto text-[#a8c686]"
                  size={32}
                />
                <span className="mt-3 block font-serif text-3xl italic">
                  Mysbah
                </span>
              </span>
            </span>
          )}

          <span className="absolute right-3 top-3 grid size-11 place-items-center rounded-full bg-[#a8c686] text-[#17120f] shadow-lg transition duration-300 group-hover:scale-110 group-hover:bg-white">
            <Play aria-hidden="true" className="ml-0.5 fill-current" size={18} />
          </span>
        </span>
      </button>
    </article>
  );
}

export function FeaturedVideoGrid() {
  const { samples } = useVideoShowcase();
  const railRef = useRef<HTMLDivElement>(null);
  const [railState, setRailState] = useState({
    canScrollBack: false,
    canScrollForward: false,
    hasOverflow: false,
  });

  const updateRailState = useCallback(() => {
    const rail = railRef.current;

    if (!rail) {
      return;
    }

    const maxScrollLeft = Math.max(0, rail.scrollWidth - rail.clientWidth);
    const hasOverflow = maxScrollLeft > 2;

    const nextState = {
      canScrollBack: hasOverflow && rail.scrollLeft > 2,
      canScrollForward:
        hasOverflow && rail.scrollLeft < maxScrollLeft - 2,
      hasOverflow,
    };

    setRailState((current) =>
      current.canScrollBack === nextState.canScrollBack &&
      current.canScrollForward === nextState.canScrollForward &&
      current.hasOverflow === nextState.hasOverflow
        ? current
        : nextState,
    );
  }, []);

  useEffect(() => {
    const rail = railRef.current;

    if (!rail) {
      return;
    }

    const resizeObserver = new ResizeObserver(updateRailState);
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        window.requestAnimationFrame(updateRailState);
      }
    });
    const frame = window.requestAnimationFrame(updateRailState);

    resizeObserver.observe(rail);
    intersectionObserver.observe(rail);
    rail.addEventListener("scroll", updateRailState, { passive: true });
    window.addEventListener("resize", updateRailState);

    return () => {
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      rail.removeEventListener("scroll", updateRailState);
      window.removeEventListener("resize", updateRailState);
    };
  }, [samples.length, updateRailState]);

  const scrollRail = (direction: -1 | 1) => {
    const rail = railRef.current;

    if (!rail) {
      return;
    }

    rail.scrollBy({
      left: direction * Math.max(280, rail.clientWidth * 0.72),
      behavior: "smooth",
    });
  };

  if (samples.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-[#17120f]/20 bg-[#f6ebe6] p-8 text-center text-sm font-bold text-[#6b5a58]">
        Portfolio videos are being prepared.
      </div>
    );
  }

  return (
    <div>
      <div className="mb-5 flex min-h-11 justify-end gap-4">
        <div
          aria-hidden={!railState.hasOverflow}
          className={`flex gap-2 transition-opacity ${
            railState.hasOverflow
              ? "opacity-100"
              : "pointer-events-none opacity-0"
          }`}
        >
          <button
            type="button"
            onClick={() => scrollRail(-1)}
            disabled={!railState.canScrollBack}
            aria-label="Show previous portfolio videos"
            title="Previous videos"
            className="focus-ring grid size-11 place-items-center rounded-full border border-[#17120f]/14 bg-white text-[#17120f] transition hover:-translate-y-0.5 hover:bg-[#a8c686] disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:translate-y-0 disabled:hover:bg-white"
          >
            <ArrowLeft aria-hidden="true" size={18} />
          </button>
          <button
            type="button"
            onClick={() => scrollRail(1)}
            disabled={!railState.canScrollForward}
            aria-label="Show more portfolio videos"
            title="More videos"
            className="focus-ring grid size-11 place-items-center rounded-full bg-[#17120f] text-white transition hover:-translate-y-0.5 hover:bg-[#a23b57] disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:translate-y-0 disabled:hover:bg-[#17120f]"
          >
            <ArrowRight aria-hidden="true" size={18} />
          </button>
        </div>
      </div>
      <div
        ref={railRef}
        aria-label="UGC video portfolio"
        className="portfolio-rail"
        role="region"
      >
        {samples.map((sample, index) => (
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
