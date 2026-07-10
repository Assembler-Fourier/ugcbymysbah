import { Mail } from "lucide-react";

export type SocialLogoName =
  | "instagram"
  | "tiktok"
  | "linkedin"
  | "upwork"
  | "email";

type SocialLogoProps = {
  logo: SocialLogoName;
  className?: string;
};

export function SocialLogo({ logo, className = "size-4" }: SocialLogoProps) {
  if (logo === "instagram") {
    return (
      <svg
        aria-hidden="true"
        className={className}
        viewBox="0 0 48 48"
        role="img"
      >
        <defs>
          <radialGradient id="instagram-pink" cx="30%" cy="107%" r="115%">
            <stop offset="0%" stopColor="#feda75" />
            <stop offset="25%" stopColor="#fa7e1e" />
            <stop offset="50%" stopColor="#d62976" />
            <stop offset="75%" stopColor="#962fbf" />
            <stop offset="100%" stopColor="#4f5bd5" />
          </radialGradient>
        </defs>
        <rect width="48" height="48" rx="13" fill="url(#instagram-pink)" />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M16.7 10.4h14.6c4.1 0 6.3 2.2 6.3 6.3v14.6c0 4.1-2.2 6.3-6.3 6.3H16.7c-4.1 0-6.3-2.2-6.3-6.3V16.7c0-4.1 2.2-6.3 6.3-6.3Zm0 3.4c-2.1 0-2.9.8-2.9 2.9v14.6c0 2.1.8 2.9 2.9 2.9h14.6c2.1 0 2.9-.8 2.9-2.9V16.7c0-2.1-.8-2.9-2.9-2.9H16.7Zm7.3 4.6a5.6 5.6 0 1 0 0 11.2 5.6 5.6 0 0 0 0-11.2Zm0 3.4a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4Zm8.2-4.1a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  if (logo === "tiktok") {
    return (
      <svg
        aria-hidden="true"
        className={className}
        viewBox="0 0 48 48"
        role="img"
      >
        <path
          fill="#25f4ee"
          d="M26.8 6.2h6.3c.4 4.1 2.8 7.5 6.7 9.1v6.3a14.8 14.8 0 0 1-6.7-1.7v10.9c0 6-4.8 10.9-10.8 10.9S11.5 36.8 11.5 30.8 16.3 20 22.3 20c.8 0 1.6.1 2.3.3v6.7a4.3 4.3 0 1 0 2.2 3.8V6.2Z"
          opacity="0.95"
          transform="translate(-3 2)"
        />
        <path
          fill="#fe2c55"
          d="M26.8 6.2h6.3c.4 4.1 2.8 7.5 6.7 9.1v6.3a14.8 14.8 0 0 1-6.7-1.7v10.9c0 6-4.8 10.9-10.8 10.9S11.5 36.8 11.5 30.8 16.3 20 22.3 20c.8 0 1.6.1 2.3.3v6.7a4.3 4.3 0 1 0 2.2 3.8V6.2Z"
          opacity="0.95"
          transform="translate(2 -1)"
        />
        <path
          fill="currentColor"
          d="M26.8 6.2h6.3c.4 4.1 2.8 7.5 6.7 9.1v6.3a14.8 14.8 0 0 1-6.7-1.7v10.9c0 6-4.8 10.9-10.8 10.9S11.5 36.8 11.5 30.8 16.3 20 22.3 20c.8 0 1.6.1 2.3.3v6.7a4.3 4.3 0 1 0 2.2 3.8V6.2Z"
        />
      </svg>
    );
  }

  if (logo === "linkedin") {
    return (
      <svg
        aria-hidden="true"
        className={className}
        viewBox="0 0 48 48"
        role="img"
      >
        <rect width="48" height="48" rx="8" fill="#0a66c2" />
        <path
          fill="#fff"
          d="M14.7 19.2h6.1v18.2h-6.1V19.2Zm3-8.7a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm7 8.7h5.8v2.5h.1c.8-1.5 2.8-3.1 5.7-3.1 6.1 0 7.2 4 7.2 9.2v9.6h-6.1v-8.5c0-2-.1-4.6-2.8-4.6-2.8 0-3.2 2.2-3.2 4.5v8.6h-6.1V19.2Z"
        />
      </svg>
    );
  }

  if (logo === "upwork") {
    return (
      <svg
        aria-hidden="true"
        className={className}
        viewBox="0 0 48 48"
        role="img"
      >
        <rect width="48" height="48" rx="8" fill="#14a800" />
        <text
          x="24"
          y="31"
          fill="#fff"
          fontFamily="Arial, Helvetica, sans-serif"
          fontSize="19"
          fontWeight="800"
          letterSpacing="-1"
          textAnchor="middle"
        >
          up
        </text>
      </svg>
    );
  }

  return <Mail aria-hidden="true" className={className} />;
}
