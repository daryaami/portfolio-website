import Image from "next/image";

type ProjectCoverProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
};

export function ProjectCover({
  src,
  alt,
  priority = false,
  className = "object-cover",
  sizes = "(max-width: 768px) 100vw, 560px",
}: ProjectCoverProps) {
  const isSvg = src.endsWith(".svg");

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      unoptimized={isSvg}
      className={className}
      sizes={sizes}
    />
  );
}
