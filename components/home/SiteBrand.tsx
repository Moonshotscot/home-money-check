import Image from "next/image";

type SiteBrandProps = {
  inverted?: boolean;
  compact?: boolean;
};

export function SiteBrand({ inverted = false, compact = false }: SiteBrandProps) {
  return (
    <span
      aria-label="Home Money Check"
      className={`inline-flex shrink-0 overflow-hidden ${inverted ? "rounded-[0.9rem]" : ""}`}
      role="img"
    >
      <Image
        alt=""
        className={`block h-auto ${
          compact
            ? "w-[8.5rem] sm:w-[9.5rem] lg:w-[10rem]"
            : "w-[13.5rem] sm:w-[15rem]"
        }`}
        height={620}
        priority={!inverted}
        sizes={
          compact
            ? "(min-width: 1024px) 160px, (min-width: 640px) 152px, 136px"
            : "(min-width: 640px) 240px, 216px"
        }
        src={inverted ? "/brand/hmc-logo-website-dark.png" : "/brand/hmc-logo-website-light.png"}
        width={1432}
      />
    </span>
  );
}
