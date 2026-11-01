import Image from "next/image";

type ImageBackdropProps = {
  src: string;
  /** Overlay classes used to keep white text readable over the photograph. */
  overlayClassName?: string;
  imageClassName?: string;
};

/**
 * Decorative full-bleed photograph for dark CTA sections. The parent section
 * must be `relative` (and usually `isolate overflow-hidden`); CTA content then
 * sits above it with `relative`.
 */
export function ImageBackdrop({
  src,
  overlayClassName = "bg-brand-midnight/75",
  imageClassName = "object-cover object-center",
}: ImageBackdropProps) {
  return (
    <>
      <Image
        src={src}
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className={imageClassName}
      />
      <div className={`absolute inset-0 ${overlayClassName}`} aria-hidden />
    </>
  );
}
