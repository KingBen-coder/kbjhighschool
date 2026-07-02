import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container-x">
        {(eyebrow || title || intro) && (
          <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
            {eyebrow && <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand">{eyebrow}</div>}
            {title && <h2 className="text-3xl font-bold text-brand-dark md:text-4xl">{title}</h2>}
            {intro && <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{intro}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function PageHero({ title, subtitle, image }: { title: string; subtitle?: string; image?: string }) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-brand-dark text-white">
      {image && (
        <img
          src={image}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
          aria-hidden="true"
        />
      )}
      <div className="container-x relative py-16 md:py-24">
        <h1 className="text-4xl font-bold md:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-lg text-white/85">{subtitle}</p>}
      </div>
    </section>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md ${className}`}>
      {children}
    </div>
  );
}
