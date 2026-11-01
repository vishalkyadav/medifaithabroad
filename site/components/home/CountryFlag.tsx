type CountryFlagProps = {
  slug: string;
  className?: string;
  label?: string;
};

/** Circular flag icons for study destinations (standard national colours). */
export function CountryFlag({ slug, className = "", label }: CountryFlagProps) {
  const title = label ? `Flag of ${label}` : undefined;

  return (
    <svg
      viewBox="0 0 80 80"
      className={`h-full w-full ${className}`}
      role="img"
      aria-hidden={!title}
      aria-label={title}
    >
      <defs>
        <clipPath id={`flag-clip-${slug}`}>
          <circle cx="40" cy="40" r="40" />
        </clipPath>
      </defs>
      <g clipPath={`url(#flag-clip-${slug})`}>
        {flagContent(slug)}
      </g>
      <circle
        cx="40"
        cy="40"
        r="39"
        fill="none"
        stroke="rgba(24,48,48,0.12)"
        strokeWidth="2"
      />
    </svg>
  );
}

function flagContent(slug: string) {
  switch (slug) {
    case "russia":
      return (
        <>
          <rect width="80" height="26.67" y="0" fill="#FFFFFF" />
          <rect width="80" height="26.67" y="26.67" fill="#0039A6" />
          <rect width="80" height="26.66" y="53.34" fill="#D52B1E" />
        </>
      );
    case "poland":
      return (
        <>
          <rect width="80" height="40" fill="#FFFFFF" />
          <rect width="80" height="40" y="40" fill="#DC143C" />
        </>
      );
    case "china":
      return (
        <>
          <rect width="80" height="80" fill="#DE2910" />
          <circle cx="22" cy="22" r="10" fill="#FFDE00" />
          <circle cx="34" cy="14" r="3" fill="#FFDE00" />
          <circle cx="38" cy="22" r="3" fill="#FFDE00" />
          <circle cx="36" cy="32" r="3" fill="#FFDE00" />
          <circle cx="28" cy="36" r="3" fill="#FFDE00" />
        </>
      );
    case "uzbekistan":
      return (
        <>
          <rect width="80" height="26" fill="#1EB53A" />
          <rect width="80" height="4" y="26" fill="#CE1126" />
          <rect width="80" height="26" y="30" fill="#FFFFFF" />
          <rect width="80" height="4" y="56" fill="#CE1126" />
          <rect width="80" height="20" y="60" fill="#0099B5" />
          <circle cx="16" cy="16" r="6" fill="#FFFFFF" />
          <circle cx="17" cy="16" r="5" fill="#0099B5" />
        </>
      );
    case "kazakhstan":
      return (
        <>
          <rect width="80" height="80" fill="#00AFCA" />
          <circle cx="40" cy="40" r="14" fill="#FEC50C" />
          <path
            d="M40 28v24M34 40h12"
            stroke="#00AFCA"
            strokeWidth="2"
          />
        </>
      );
    case "georgia":
      return (
        <>
          <rect width="80" height="80" fill="#FFFFFF" />
          <rect x="34" y="10" width="12" height="60" fill="#FF0000" />
          <rect x="10" y="34" width="60" height="12" fill="#FF0000" />
          <rect x="22" y="22" width="8" height="36" fill="#FF0000" />
          <rect x="50" y="22" width="8" height="36" fill="#FF0000" />
          <rect x="22" y="22" width="36" height="8" fill="#FF0000" />
          <rect x="22" y="50" width="36" height="8" fill="#FF0000" />
        </>
      );
    case "nepal":
      return (
        <>
          <rect width="80" height="80" fill="#003893" />
          <polygon points="40,8 68,72 12,72" fill="#DC143C" />
          <polygon points="40,18 58,68 22,68" fill="#003893" />
          <circle cx="40" cy="48" r="6" fill="#FFFFFF" />
        </>
      );
    case "kyrgyzstan":
      return (
        <>
          <rect width="80" height="80" fill="#E8112D" />
          <circle cx="40" cy="40" r="18" fill="#FFEF00" />
          <circle cx="40" cy="40" r="12" fill="#E8112D" />
        </>
      );
    case "bangladesh":
      return (
        <>
          <rect width="80" height="80" fill="#006A4E" />
          <circle cx="36" cy="40" r="16" fill="#F42A41" />
        </>
      );
    case "germany":
      return (
        <>
          <rect width="80" height="26.67" fill="#000000" />
          <rect width="80" height="26.67" y="26.67" fill="#DD0000" />
          <rect width="80" height="26.66" y="53.34" fill="#FFCE00" />
        </>
      );
    case "united-kingdom":
      return (
        <>
          <rect width="80" height="80" fill="#012169" />
          <path d="M0 0 L80 80 M80 0 L0 80" stroke="#FFFFFF" strokeWidth="14" />
          <path d="M0 0 L80 80 M80 0 L0 80" stroke="#C8102E" strokeWidth="6" />
          <path d="M40 0 V80 M0 40 H80" stroke="#FFFFFF" strokeWidth="22" />
          <path d="M40 0 V80 M0 40 H80" stroke="#C8102E" strokeWidth="12" />
        </>
      );
    default:
      return <rect width="80" height="80" fill="#e2e8e8" />;
  }
}
