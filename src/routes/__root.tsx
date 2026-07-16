import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import logoAsset from "../assets/logo.jpg";
import { reportLovableError } from "../lib/lovable-error-reporting";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/academics", label: "Academics" },
  { to: "/admissions", label: "Admissions" },
  { to: "/student-life", label: "Student Life" },
  { to: "/news", label: "News" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logoAsset} alt="Khalifa Bin Jasim High School crest" className="h-10 w-10 shrink-0 rounded-md object-contain" />
          <div className="min-w-0 leading-tight">
            <div className="truncate text-sm font-bold text-brand-dark sm:text-base">Khalifa Bin Jasim</div>
            <div className="truncate text-[10px] font-medium uppercase tracking-wider text-muted-foreground sm:text-xs">High School</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-brand-soft hover:text-brand-dark [&.active]:bg-brand-soft [&.active]:text-brand-dark"
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/admissions"
            className="ml-2 inline-flex items-center rounded-md bg-brand px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand-dark"
          >
            Apply Now
          </Link>
        </nav>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-foreground lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-4 w-6">
            <span className={`absolute left-0 top-0 h-0.5 w-6 bg-current transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`absolute left-0 top-1.5 h-0.5 w-6 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 top-3 h-0.5 w-6 bg-current transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>
      {open && (
        <nav className="border-t border-border bg-background lg:hidden" aria-label="Mobile">
          <div className="container-x flex flex-col py-2">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-foreground/90 hover:bg-brand-soft hover:text-brand-dark [&.active]:bg-brand-soft [&.active]:text-brand-dark"
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/admissions"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-brand px-4 py-3 text-base font-semibold text-primary-foreground"
            >
              Apply Now
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-brand-dark text-white">
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src={logoAsset} alt="" className="h-12 w-12 rounded-md bg-white object-contain p-1" />
            <div>
              <div className="text-base font-bold">Khalifa Bin Jasim</div>
              <div className="text-xs uppercase tracking-wider text-white/70">High School</div>
            </div>
          </div>
          <p className="mt-4 text-sm italic text-white/80">"Garden of Knowledge and Virtue"</p>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/90">Quick Links</h3>
          <ul className="space-y-2 text-sm text-white/80">
            {NAV.slice(1).map((n) => (
              <li key={n.to}><Link to={n.to} className="hover:text-white">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/90">Contact</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li>Tuala Area, Ongata Rongai</li>
            <li>Past African Nazarene University</li>
            <li><a href="tel:+254728572929" className="hover:text-white">+254 728 572 929</a></li>
            <li><a href="mailto:kbjhigh@gmail.com" className="hover:text-white">kbjhigh@gmail.com</a></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/90">Admissions Open</h3>
          <p className="text-sm text-white/80">A Muslim Boys' boarding school building character, faith, and academic excellence.</p>
          <Link to="/admissions" className="mt-4 inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-brand-dark hover:bg-white/90">Apply Now</Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-5 text-center text-xs text-white/60">
          © {new Date().getFullYear()} Khalifa Bin Jasim High School. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-brand-dark">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">The page you're looking for doesn't exist or has been moved.</p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-md bg-brand px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-brand-dark">Go home</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong. Please try again.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-md bg-brand px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-brand-dark">Try again</button>
          <a href="/" className="rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Khalifa Bin Jasim High School — Garden of Knowledge and Virtue" },
      { name: "description", content: "Khalifa Bin Jasim High School is a Muslim boys' boarding school in Tuala, Ongata Rongai, Kenya — combining strong Islamic values with academic excellence." },
      { name: "author", content: "Khalifa Bin Jasim High School" },
      { name: "theme-color", content: "#2f7a3b" },
      { property: "og:title", content: "Khalifa Bin Jasim High School — Garden of Knowledge and Virtue" },
      { property: "og:description", content: "Khalifa Bin Jasim High School is a Muslim boys' boarding school in Tuala, Ongata Rongai, Kenya — combining strong Islamic values with academic excellence." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Khalifa Bin Jasim High School" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Khalifa Bin Jasim High School — Garden of Knowledge and Virtue" },
      { name: "twitter:description", content: "Khalifa Bin Jasim High School is a Muslim boys' boarding school in Tuala, Ongata Rongai, Kenya — combining strong Islamic values with academic excellence." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/jnzKZhaU9UceaP9IRxcrdCVEQpn1/social-images/social-1783024997903-image_23.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/jnzKZhaU9UceaP9IRxcrdCVEQpn1/social-images/social-1783024997903-image_23.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: logoAsset, type: "image/jpeg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        name: "Khalifa Bin Jasim High School",
        slogan: "Garden of Knowledge and Virtue",
        email: "kbjhigh@gmail.com",
        telephone: "+254728572929",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Tuala Area, past African Nazarene University Main Campus",
          addressLocality: "Ongata Rongai",
          addressCountry: "KE",
        },
      }),
    }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-dvh flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
