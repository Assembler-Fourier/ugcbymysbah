import { BookMeButton } from "@/components/BookMeButton";

// Coiled cord: a short straight drop, then repeated loops down to the handset.
const coil = `M80 0 V14 ${"c 15 3 15 10 0 12 c -15 2 -15 9 0 12 ".repeat(7)}V184 L90 192`;

// Speaker holes: a ring of dots plus one in the centre.
function holes(cx: number, cy: number, ring: number, count: number) {
  const dots = [{ x: cx, y: cy }];
  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2;
    dots.push({ x: cx + Math.cos(angle) * ring, y: cy + Math.sin(angle) * ring });
  }
  return dots;
}

function Cup({ cx, cy, dots }: { cx: number; cy: number; dots: number }) {
  return (
    <g>
      <ellipse cx={cx - 7} cy={cy} rx="30" ry="31" fill="#4e1124" />
      <ellipse cx={cx} cy={cy} rx="31" ry="31" fill="#7a1c38" />
      <ellipse cx={cx + 6} cy={cy} rx="23" ry="24" fill="#8e2343" />
      <ellipse cx={cx + 6} cy={cy} rx="23" ry="24" fill="none" stroke="#5e1530" strokeWidth="2" />
      {holes(cx + 6, cy, 11, dots).map((dot, index) => (
        <circle key={index} cx={dot.x} cy={dot.y} r="2.1" fill="#3d0d1d" />
      ))}
      <path
        d={`M${cx - 20} ${cy - 18} q 10 -12 24 -12`}
        fill="none"
        stroke="#e07a95"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.55"
      />
    </g>
  );
}

// A berry-red telephone handset hanging from the top of the hero.
// Clicking it opens the same "Book me" brief form as the buttons.
export function HangingPhone({ className = "" }: { className?: string }) {
  return (
    <div className={`hanging-phone pointer-events-none ${className}`}>
      <BookMeButton className="focus-ring pointer-events-auto group relative block h-full rounded-3xl">
        <span className="sr-only">Book me</span>
        <svg viewBox="0 0 160 440" className="phone-swing block h-full w-auto" aria-hidden="true">
          <path d={coil} fill="none" stroke="#5e1530" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d={coil} fill="none" stroke="#a8335a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
          <g className="phone-ring">
            {/* Curved handle between the two cups */}
            <path d="M86 226 C 40 268, 40 340, 88 378" fill="none" stroke="#4e1124" strokeWidth="38" strokeLinecap="round" />
            <path d="M91 224 C 47 266, 47 342, 93 380" fill="none" stroke="#7a1c38" strokeWidth="32" strokeLinecap="round" />
            <path d="M80 240 C 50 276, 50 330, 82 364" fill="none" stroke="#c8435f" strokeWidth="5" strokeLinecap="round" opacity="0.7" />
            <Cup cx={100} cy={210} dots={9} />
            <Cup cx={104} cy={394} dots={6} />
          </g>
        </svg>
        <span className="absolute -left-36 top-[30%] hidden -rotate-6 whitespace-nowrap font-script text-2xl text-berry transition group-hover:scale-110 sm:block">
          ring me to book
        </span>
      </BookMeButton>
    </div>
  );
}
