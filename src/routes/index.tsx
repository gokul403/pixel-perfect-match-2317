import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Menu, X, MapPin, Phone, Mail, ChevronDown, Star, Shield, Award, Gem } from "lucide-react";

import heroImage from "@/assets/gjs-hero-premium.jpg";
import necklaceImage from "@/assets/gjs-necklaces-new.jpg";
import ringsBanglesImage from "@/assets/gjs-rings-bangles.jpg";
import earringsImage from "@/assets/gjs-earrings-new.jpg";
import goldCoinsImage from "@/assets/gjs-gold-coins.jpg";
import antiqueImage from "@/assets/gjs-antique.jpg";
import legacyNecklaceImage from "@/assets/gjs-necklace.jpg";
import legacyRingImage from "@/assets/gjs-ring.jpg";

export const Route = createFileRoute("/")(({
  head: () => ({
    meta: [
      { title: "GJS Jewellers | Crafted for Generations Â· Thrissur, Kerala" },
      { name: "description", content: "GJS Jewellers â€” precision-crafted gold and diamond jewellery from Thrissur, Kerala. 22K gold necklaces, rings, bangles, earrings, antique jewellery and investment gold coins. BIS certified. Private Limited company." },
      { property: "og:title", content: "GJS Jewellers | Crafted for Generations" },
      { property: "og:description", content: "Traditional craftsmanship meets cutting-edge precision at GJS Jewellers, Manalur, Thrissur, Kerala." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
} as any));

/* â”€â”€â”€ Hooks â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .reveal-scale");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function useCountUp(target: number, duration = 1800, suffix = "") {
  const [value, setValue] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const ran = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      const e = entries[0];
      if (e && e.isIntersecting && !ran.current) {
        ran.current = true;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setValue(Math.floor(eased * target).toLocaleString("en-IN") + (p < 1 ? "" : suffix));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      }
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration, suffix]);
  return { ref, value };
}

/* â”€â”€â”€ Sub-components â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

function GjsLogo({ size = "md", dark = false, className = "" }: { size?: "sm" | "md" | "lg"; dark?: boolean; className?: string }) {
  const sizes = { sm: "text-2xl", md: "text-[34px]", lg: "text-5xl" };
  const sub = { sm: "text-[6px]", md: "text-[8px]", lg: "text-[10px]" };
  return (
    <span className={`flex flex-col items-start leading-none select-none ${className}`}>
      <span
        className={`font-display font-semibold tracking-[-0.06em] ${sizes[size]}`}
        style={{
          background: "linear-gradient(135deg, #8B5E1A 0%, #D4A017 35%, #F5D178 55%, #C8960C 75%, #8B5E1A 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          filter: "drop-shadow(0 1px 3px oklch(0.20 0.038 43 / 0.35))",
        }}
      >
        GJS
      </span>
      <span
        className={`font-cinzel font-medium uppercase ${sub[size]}`}
        style={{ color: dark ? "#D4A547" : "#9A6B0A", letterSpacing: "0.40em" }}
      >
        Jewellers
      </span>
    </span>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return <p className="section-eyebrow">{children}</p>;
}

function GoldRule() {
  return <div className="gold-rule my-5" />;
}

function ProductCard({
  image, name, subtitle, material, delay = 0,
}: {
  image: string; name: string; subtitle: string; material: string; delay?: number;
}) {
  return (
    <article
      className={`product-card reveal reveal-delay-${delay + 1}`}
      style={{ borderRadius: 0 }}
    >
      <div className="relative aspect-[0.82] overflow-hidden">
        <img src={image} alt={name} loading="lazy" className="h-full w-full object-cover" />
        <div className="card-overlay" />
        <div className="card-cta">
          <span className="inline-flex items-center gap-2 border border-primary/60 bg-espresso/80 px-5 py-2 font-cinzel text-[10px] uppercase tracking-[0.2em] text-primary backdrop-blur-sm transition-colors hover:bg-espresso">
            View Collection <ArrowRight className="size-3" />
          </span>
        </div>
      </div>
      <div className="border-t border-border px-4 py-5">
        <p className="section-eyebrow text-[9px]">{material}</p>
        <h3 className="mt-2 font-display text-2xl font-medium leading-tight text-espresso">{name}</h3>
        <p className="mt-1 text-xs text-muted-foreground">{subtitle}</p>
      </div>
    </article>
  );
}

function StatCard({ value, suffix, label, delay = 0 }: { value: number; suffix: string; label: string; delay?: number }) {
  const { ref, value: displayed } = useCountUp(value, 1800, suffix);
  return (
    <div className={`stat-card reveal reveal-delay-${delay + 1} text-center py-8`}>
      <span
        ref={ref}
        className="font-display text-5xl font-semibold sm:text-6xl"
        style={{
          background: "linear-gradient(135deg, #8B5E1A 0%, #C8960C 30%, #F0C84A 55%, #C8960C 75%, #8B5E1A 100%)",
          backgroundSize: "200% auto",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {displayed}
      </span>
      <p className="mt-3 font-cinzel text-[9px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">{label}</p>
    </div>
  );
}

function FooterGroup({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <p className="font-cinzel text-[9px] font-semibold uppercase tracking-[0.28em] text-primary">{title}</p>
      <div className="mt-5 grid gap-3">
        {links.map((link) => (
          <a key={link} href="#top" className="text-sm text-primary-foreground/60 transition-colors hover:text-primary">
            {link}
          </a>
        ))}
      </div>
    </div>
  );
}

/* â”€â”€â”€ Page â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

const tickerMessages = [
  " 22K & 24K BIS Hallmarked Gold",
  " Precision CNC Bangles",
  " Diamond Jewellery IGI Certified",
  " Antique Temple Jewellery",
  " Investment Grade Gold Coins",
  " Jimkis & Traditional Earrings",
  " Private Limited Company· Est. Manalur, Thrissur",
  " Wholesale & Export Operations",
];

const collections = [
  { name: "Necklaces", sub: "Gold & Diamond", image: necklaceImage },
  { name: "Rings & Bangles", sub: "Yellow, Rose & White Gold", image: ringsBanglesImage },
  { name: "Earrings", sub: "Jimkis, Studs & Drops", image: earringsImage },
  { name: "Antique", sub: "Temple & Heritage Pieces", image: antiqueImage },
];

const products = [
  { image: necklaceImage, name: "Diamond Necklace Collection", subtitle: "Floral, leaf & chandelier designs", material: "22K Gold Â· Diamond PavÃ©", delay: 0 },
  { image: ringsBanglesImage, name: "Rings & Bangles", subtitle: "Textured, crossover & geometric", material: "Yellow Â· Rose Â· White Gold", delay: 1 },
  { image: earringsImage, name: "Earrings", subtitle: "Jimkis, chandeliers & hoops", material: "22K Gold Â· Ruby Â· Diamond", delay: 2 },
  { image: goldCoinsImage, name: "Gold Coins & Bars", subtitle: "BIS hallmarked investment gold", material: "24K 999.9 Fine Gold", delay: 3 },
];

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useReveal();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navLinks = [
    ["Collections", "collections"],
    ["Necklaces", "collections"],
    ["Rings", "collections"],
    ["Antique", "collections"],
    ["About Us", "about"],
    ["Contact", "contact"],
  ] as [string, string][];

  return (
    <div className="min-h-screen bg-background text-foreground" id="top">

      {/* â”€â”€ Announcement Ticker â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <div className="bg-espresso py-2.5 ticker-wrap" aria-hidden="true">
        <div className="ticker-inner">
          {[...tickerMessages, ...tickerMessages].map((msg, i) => (
            <span key={i} className="mx-8 font-cinzel text-[9px] uppercase tracking-[0.24em] text-primary whitespace-nowrap">
              {msg}
            </span>
          ))}
        </div>
      </div>

      {/* â”€â”€ Navigation â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${scrolled ? "border-border bg-background/95 shadow-[0_4px_24px_oklch(0.22_0.04_45/0.08)] backdrop-blur-md" : "border-transparent bg-background/90 backdrop-blur-sm"
          }`}
      >
        <div className="mx-auto flex h-[78px] max-w-[1440px] items-center justify-between px-5 lg:px-10">
          {/* Logo */}
          <a href="#top" className="flex-shrink-0" aria-label="GJS Jewellers home">
            <GjsLogo size="md" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
            {navLinks.map(([label, id]) => (
              <button
                key={label}
                onClick={() => scrollTo(id)}
                className="nav-link font-cinzel text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-espresso"
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+919645969022"
              className="hidden items-center gap-2 border border-border/80 px-4 py-2 font-cinzel text-[9px] uppercase tracking-[0.18em] text-espresso transition-all hover:border-gold hover:text-gold-strong sm:flex"
            >
              <Phone className="size-3" />
              +91 9645 969 022
            </a>
            <button
              className="lg:hidden p-2 text-espresso"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="border-t border-border bg-background/98 px-5 py-6 lg:hidden">
            <div className="grid gap-5">
              {navLinks.map(([label, id]) => (
                <button
                  key={label}
                  onClick={() => scrollTo(id)}
                  className="text-left font-cinzel text-[11px] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-espresso"
                >
                  {label}
                </button>
              ))}
              <a href="tel:+919645969022" className="mt-2 inline-flex items-center gap-2 text-sm text-espresso">
                <Phone className="size-4" /> +91 9645 969 022
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* â”€â”€ Hero Section â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section className="relative overflow-hidden" style={{ background: "#0E0804" }}>

          {/* â”€â”€ MOBILE background image (hidden on lg+) â”€â”€ */}
          <div className="absolute inset-0 lg:hidden">
            <img
              src={heroImage}
              alt="Premium 22K gold and diamond necklace by GJS Jewellers"
              className="h-full w-full object-cover"
              style={{ objectPosition: "center 20%" }}
            />
            {/* Dark gradient so text is readable over image on mobile */}
            <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(14,8,4,0.75) 0%, rgba(14,8,4,0.55) 40%, rgba(14,8,4,0.85) 80%, rgba(14,8,4,0.98) 100%)" }} />
          </div>

          {/* â”€â”€ Floating gold particles (left panel only, desktop) â”€â”€ */}
          <div className="pointer-events-none absolute inset-0 z-10 hidden lg:block" aria-hidden="true">
            {[
              { size: 4, x: "8%", bottom: "35%", dur: "9s", delay: "0s" },
              { size: 3, x: "15%", bottom: "55%", dur: "11s", delay: "2s" },
              { size: 5, x: "5%", bottom: "70%", dur: "13s", delay: "4s" },
              { size: 3, x: "22%", bottom: "20%", dur: "8s", delay: "1s" },
              { size: 4, x: "3%", bottom: "48%", dur: "10s", delay: "3s" },
              { size: 2, x: "28%", bottom: "62%", dur: "12s", delay: "5s" },
            ].map((p, i) => (
              <span
                key={i}
                className="hero-particle"
                style={{ width: p.size, height: p.size, left: p.x, bottom: p.bottom, animationDuration: p.dur, animationDelay: p.delay }}
              />
            ))}
          </div>

          {/* â”€â”€ GRID: stacks on mobile, side-by-side on lg+ â”€â”€ */}
          <div className="relative z-20 grid min-h-screen lg:grid-cols-[1fr_1fr] xl:grid-cols-[0.95fr_1.05fr]">

            {/* â”€â”€ LEFT / MOBILE FULL: Content Panel â”€â”€ */}
            <div
              className="relative flex min-h-screen flex-col justify-center px-6 py-20 sm:px-10 lg:min-h-0 lg:px-14 xl:px-20"
              style={{ background: "transparent" }}
            >
              {/* Solid background on desktop only â€” on mobile it's transparent (bg image shows through) */}
              <div
                className="absolute inset-0 hidden lg:block"
                style={{ background: "linear-gradient(135deg, #0E0804 0%, #160C05 70%, #0E0804 100%)" }}
              />

              {/* Vertical gold divider (desktop only) */}
              <div
                className="absolute right-0 top-[10%] bottom-[10%] hidden w-px lg:block"
                style={{ background: "linear-gradient(to bottom, transparent, oklch(0.74 0.14 78 / 0.7) 40%, oklch(0.74 0.14 78 / 0.9) 50%, oklch(0.74 0.14 78 / 0.7) 60%, transparent)" }}
              />

              <div className="relative z-10 max-w-lg">

                {/* Eyebrow */}
                <p
                  className="animate-rise-in font-cinzel text-[10px] font-semibold uppercase tracking-[0.28em]"
                  style={{ color: "#C8960C" }}
                >
                  The GJS Signature Collection Â· Manalur, Thrissur
                </p>

                {/* Gold rule */}
                <div
                  className="animate-rise-in mt-5 mb-5 h-px w-12"
                  style={{ background: "linear-gradient(90deg, #8B5E1A, #F0C84A, #8B5E1A)" }}
                />

                {/* Headline */}
                <h1
                  className="animate-rise-in-delay font-display font-medium leading-[0.92] tracking-[-0.02em]"
                  style={{ fontSize: "clamp(2.6rem, 6vw, 5.5rem)", color: "#FAF0DC" }}
                >
                  Jewellery{" "}
                  <em
                    className="not-italic block"
                    style={{
                      background: "linear-gradient(90deg, #8B5E1A 0%, #C8960C 25%, #F5D178 50%, #C8960C 75%, #8B5E1A 100%)",
                      backgroundSize: "200% auto",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      animation: "gold-text-shimmer 4s linear infinite",
                    }}
                  >
                    crafted
                  </em>
                  for generations.
                </h1>

                {/* Body */}
                <p
                  className="animate-rise-in-2 mt-6 text-sm leading-7 sm:text-[15px] sm:leading-8 font-light"
                  style={{ color: "#FFFFFF", maxWidth: "42ch" }}
                >
                  Traditional craftsmanship meets cutting-edge technology. Backed by ₹50 Crore financial framework, our 2,000 Sq.Ft facility in Kerala crafts precision Jimkis, necklaces, antique jewelleries, CNC bangles, rings, and investment-grade gold coins.
                </p>

                {/* CTA Buttons */}
                <div className="animate-rise-in-2 mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <button
                    onClick={() => scrollTo("collections")}
                    className="inline-flex h-12 items-center justify-center gap-2 px-7 font-cinzel text-[10px] font-semibold uppercase tracking-[0.2em] transition-all sm:h-14 sm:px-8"
                    style={{
                      background: "linear-gradient(135deg, #8B5E1A 0%, #D4A017 35%, #F5D178 55%, #C8960C 80%, #8B5E1A 100%)",
                      backgroundSize: "200% auto",
                      color: "#0E0804",
                      animation: "gold-text-shimmer 6s linear infinite",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.filter = "brightness(1.12)")}
                    onMouseLeave={e => (e.currentTarget.style.filter = "brightness(1)")}
                  >
                    Explore Collections <ArrowRight className="size-4" />
                  </button>
                  <button
                    onClick={() => scrollTo("about")}
                    className="inline-flex h-12 items-center justify-center gap-2 border px-7 font-cinzel text-[10px] uppercase tracking-[0.2em] transition-all hover:text-[#C8960C] sm:h-14 sm:px-8"
                    style={{ borderColor: "rgba(255,255,255,0.35)", color: "#FFFFFF" }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = "#C8960C")}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)")}
                  >
                    Our Story
                  </button>
                </div>

                {/* Trust Badges */}
                <div className="animate-rise-in-2 mt-8 grid grid-cols-2 gap-2 sm:gap-3">
                  {[
                    { icon: Shield, label: "BIS Hallmarked" },
                    { icon: Award, label: "20+ Years" },
                    { icon: Gem, label: "IGI Certified" },
                    { icon: Star, label: "Private Ltd." },
                  ].map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="flex items-center gap-2 border px-3 py-2"
                      style={{ borderColor: "rgba(200,150,12,0.35)", background: "rgba(200,150,12,0.08)" }}
                    >
                      <Icon className="size-3.5 flex-shrink-0" style={{ color: "#D4A547" }} />
                      <span
                        className="font-cinzel text-[9.5px] uppercase tracking-[0.16em] font-medium"
                        style={{ color: "#FFFFFF" }}
                      >
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Kerala tag */}
              <div className="absolute bottom-6 left-6 z-10 sm:left-10 lg:left-14 xl:left-20">
                <span className="font-cinzel text-[8px] uppercase tracking-[0.3em]" style={{ color: "rgba(200,150,12,0.4)" }}>
                  Kerala Â· India
                </span>
              </div>
            </div>

            {/* â”€â”€ RIGHT: Image Panel (desktop only) â”€â”€ */}
            <div className="hero-image-panel relative hidden lg:block" style={{ background: "#050302" }}>
              {/* Full image â€” NO heavy dark overlay */}
              <img
                src={heroImage}
                alt="Premium 22K gold and diamond necklace â€” GJS Jewellers signature collection"
                className="absolute inset-0 h-full w-full object-cover"
                style={{ objectPosition: "center 15%" }}
              />

              {/* Left-edge blend only */}
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to right, #0E0804 0%, transparent 16%)" }}
              />
              {/* Bottom vignette */}
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(14,8,4,0.6) 0%, transparent 22%)" }}
              />

              {/* Shimmer sweep */}
              <div className="hero-sheen absolute inset-0" />

              {/* Gold glow border */}
              <div className="hero-image-glow" />

              {/* Corner brackets */}
              <div className="corner-bracket corner-bracket-tl" />
              <div className="corner-bracket corner-bracket-tr" />
              <div className="corner-bracket corner-bracket-bl" />
              <div className="corner-bracket corner-bracket-br" />

              {/* Featured badge */}
              <div
                className="absolute bottom-10 left-6 right-6 z-10 flex items-start gap-4 border p-5 backdrop-blur-md xl:left-10 xl:max-w-[280px]"
                style={{ borderColor: "rgba(200,150,12,0.45)", background: "rgba(14,8,4,0.84)" }}
              >
                <div className="badge-dot mt-1.5" />
                <div>
                  <p className="font-cinzel text-[8px] uppercase tracking-[0.25em]" style={{ color: "#C8960C" }}>
                    Signature Piece
                  </p>
                  <p className="mt-1.5 font-display text-2xl font-medium leading-tight" style={{ color: "#FAF0DC" }}>
                    Diamond Bridal Necklace
                  </p>
                  <p className="mt-1 text-[11px]" style={{ color: "rgba(250,240,220,0.5)" }}>
                    22K Gold Â· IGI Certified Diamonds
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll hint */}
          <div
            className="absolute bottom-4 left-1/2 z-30 -translate-x-1/2 animate-float"
            style={{ color: "rgba(200,150,12,0.5)" }}
            aria-hidden="true"
          >
            <ChevronDown className="size-5" />
          </div>
        </section>


        {/* â”€â”€ Stats Bar â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section className="border-b border-border bg-ivory-deep">
          <div className="mx-auto grid max-w-[1440px] grid-cols-2 lg:grid-cols-4">
            <StatCard value={20} suffix="+" label="Years of Experience" delay={0} />
            <StatCard value={50} suffix=" Cr" label="Financial Framework (â‚¹)" delay={1} />
            <StatCard value={2000} suffix=" Sq.Ft" label="Manufacturing Facility" delay={2} />
            <StatCard value={100} suffix="%" label="BIS Certified Purity" delay={3} />
          </div>
        </section>

        {/* â”€â”€ Collections â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section id="collections" className="mx-auto max-w-[1440px] px-5 py-20 lg:px-10 lg:py-28">
          <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div className="reveal">
              <SectionEyebrow>The Collection</SectionEyebrow>
              <GoldRule />
              <h2 className="font-display text-5xl font-medium leading-[0.95] text-espresso sm:text-6xl">
                Find your forever piece.
              </h2>
            </div>
            <button
              onClick={() => scrollTo("products")}
              className="reveal reveal-delay-2 flex items-center gap-2 font-cinzel text-[10px] uppercase tracking-[0.2em] text-gold-strong transition-colors hover:text-espresso"
            >
              View All <ArrowRight className="size-3.5" />
            </button>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {collections.map((cat, i) => (
              <a
                key={cat.name}
                href="#collections"
                className={`cat-tile group aspect-[0.72] reveal reveal-delay-${i + 1}`}
                aria-label={cat.name}
              >
                <img src={cat.image} alt={cat.name} loading="lazy" className="h-full w-full object-cover" />
                <div className="cat-label">
                  <p className="font-cinzel text-[9px] uppercase tracking-[0.22em] text-primary/70">{cat.sub}</p>
                  <p className="mt-1 font-display text-3xl font-medium leading-none text-primary-foreground">{cat.name}</p>
                  <p className="mt-2 inline-flex items-center gap-1 font-cinzel text-[9px] uppercase tracking-[0.18em] text-primary">
                    Explore <ArrowRight className="size-3" />
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* â”€â”€ Featured Products â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section id="products" className="bg-ivory-deep py-20 lg:py-28">
          <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
            <div className="reveal text-center">
              <SectionEyebrow>Featured Pieces</SectionEyebrow>
              <GoldRule />
              <h2 className="font-display text-5xl font-medium leading-[0.95] text-espresso sm:text-6xl">
                Curated with care.
              </h2>
              <p className="mx-auto mt-5 max-w-[42ch] text-sm leading-7 text-muted-foreground">
                Each piece is designed, precision-manufactured, and quality-checked at our 2,000 Sq.Ft facility in Manalur, Thrissur.
              </p>
            </div>
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((p) => (
                <ProductCard key={p.name} {...p} />
              ))}
            </div>
          </div>
        </section>

        {/* â”€â”€ About / Introduction â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section id="about" className="mx-auto max-w-[1440px] px-5 py-20 lg:grid lg:grid-cols-2 lg:gap-0 lg:px-10 lg:py-28">
          {/* Image */}
          <div className="reveal-scale relative overflow-hidden aspect-[4/5] lg:aspect-auto">
            <img
              src={antiqueImage}
              alt="Traditional antique gold jewellery â€” GJS Jewellers craftsmanship"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            {/* Floating badge */}
            <div className="absolute bottom-8 right-8 animate-float border border-primary/40 bg-espresso/85 p-5 backdrop-blur-sm">
              <p className="font-cinzel text-[8px] uppercase tracking-[0.25em] text-primary">Established</p>
              <p className="mt-1 font-display text-5xl font-semibold text-primary-foreground">GJS</p>
              <p className="font-cinzel text-[8px] uppercase tracking-[0.3em] text-primary">Jewellers</p>
              <div className="mt-3 h-px w-full bg-primary/30" />
              <p className="mt-2 font-cinzel text-[8px] text-primary-foreground/60 tracking-wide">Manalur· Thrissur· Kerala</p>
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center py-12 lg:pl-16 lg:py-0">
            <div className="reveal">
              <SectionEyebrow>Introduction</SectionEyebrow>
              <GoldRule />
              <h2 className="font-display text-5xl font-medium leading-[0.95] text-espresso sm:text-6xl">
                Tradition,<br /><em className="not-italic gold-shimmer-text">reimagined.</em>
              </h2>
            </div>
            <div className="reveal reveal-delay-2 mt-8 space-y-5 text-sm leading-8 text-muted-foreground">
              <p>
                We combine traditional craftsmanship with cutting-edge technology to create exquisite ornaments. Backed by ₹50 Crore financial framework, our facility in Kerala specialises in precision-crafted Jimkis, earrings, necklaces, Antique Jewelleries, CNC bangles, rings, and investment-grade gold coins.
              </p>
              <p>
                Our production incorporates advanced technology for flawless quality control and certified Safe Vaults for maximum security.
              </p>
            </div>
            <div className="reveal reveal-delay-3 mt-8 space-y-5 text-sm leading-8 text-muted-foreground">
              <p>
                We are an innovative jewellery manufacturing Company dedicated to transforming the B2B gold and diamond fashion scenario. Operating from a state-of-the-art 2,000 Sq.Ft. manufacturing facility, we leverage advanced automation to achieve unparalleled production efficiency.
              </p>
              <p>
                From domestic wholesale distribution to global export operations, our business model stands on financial transparency, modern engineering, and market trust.
              </p>
            </div>
            <div className="reveal reveal-delay-4 mt-10 grid grid-cols-2 gap-4 border-t border-border pt-8">
              {[
                { label: "Constitution", value: "Private Limited Company" },
                { label: "Designation", value: "Managing Director" },
                { label: "Activity", value: "Manufacturing of Gold Jewellery" },
                { label: "Experience", value: "20 Years Managerial" },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="font-cinzel text-[8px] uppercase tracking-[0.2em] text-gold-strong">{label}</p>
                  <p className="mt-1 text-xs font-medium text-espresso">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* â”€â”€ Craftsmanship Process â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section className="bg-ivory-deep py-20 lg:py-28">
          <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
            <div className="reveal mb-14 max-w-xl">
              <SectionEyebrow>The GJS Standard</SectionEyebrow>
              <GoldRule />
              <h2 className="font-display text-5xl font-medium leading-[0.95] text-espresso sm:text-6xl">
                Pure. Precise.<br />Timeless.
              </h2>
            </div>
            <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { num: "01", title: "Design", text: "From considered sketch to refined digital model â€” each piece begins with purpose." },
                { num: "02", title: "Precision Manufacturing", text: "CNC & advanced machinery bring perfect symmetry, consistency, and finish to every piece." },
                { num: "03", title: "Quality Control", text: "Every detail is inspected under magnification before final polishing and finishing." },
                { num: "04", title: "Certification", text: "Gold purity (BIS hallmarked) and diamond grades (IGI certified) are documented for every piece." },
              ].map(({ num, title, text }, i) => (
                <div key={num} className={`process-step reveal reveal-delay-${i + 1}`}>
                  <span className="gold-shimmer-text font-display text-5xl font-semibold">{num}</span>
                  <h3 className="mt-6 font-display text-2xl font-medium text-espresso">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* â”€â”€ Why GJS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section className="mx-auto max-w-[1440px] px-5 py-20 lg:px-10 lg:py-28">
          <div className="reveal mb-14 text-center">
            <SectionEyebrow>Why GJS Jewellers</SectionEyebrow>
            <GoldRule />
            <h2 className="font-display text-5xl font-medium leading-[0.95] text-espresso sm:text-6xl">
              Built on trust. Driven by craft.
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Award,
                title: "20 Years of Excellence",
                text: "Two decades of managerial experience in the manufacturing industry, building lasting relationships across Kerala and beyond.",
                delay: 1,
              },
              {
                icon: Shield,
                title: "Certified Safe Vaults",
                text: "Our facility uses certified Safe Vaults for maximum security of your precious metals and finished jewellery.",
                delay: 2,
              },
              {
                icon: Gem,
                title: "â‚¹6.94 Crore in Assets",
                text: "Backed by substantial property assets including 269.5 cents residential land and a dedicated 2,000 Sq.Ft manufacturing unit.",
                delay: 3,
              },
              {
                icon: Star,
                title: "BIS & IGI Certified",
                text: "Every gold piece carries a BIS hallmark. Diamond jewellery is IGI certified for guaranteed purity and quality.",
                delay: 1,
              },
              {
                icon: ArrowRight,
                title: "B2B & Export Ready",
                text: "From domestic wholesale distribution to global export operations â€” we serve retailers, distributors, and direct customers.",
                delay: 2,
              },
              {
                icon: Phone,
                title: "Personal Consultation",
                text: "Our team offers personal assistance for custom orders, bridal sets, and investment gold â€” reach us directly at any time.",
                delay: 3,
              },
            ].map(({ icon: Icon, title, text, delay }) => (
              <div
                key={title}
                className={`reveal reveal-delay-${delay} group border border-border p-8 transition-all hover:border-primary/40 hover:shadow-[0_8px_40px_oklch(0.72_0.13_78/0.12)]`}
              >
                <div className="mb-5 inline-flex size-12 items-center justify-center border border-primary/30 bg-ivory-deep text-gold-strong transition-colors group-hover:border-primary group-hover:bg-primary/10">
                  <Icon className="size-5" />
                </div>
                <h3 className="font-display text-2xl font-medium text-espresso">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* â”€â”€ Quote â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section className="bg-espresso py-20 lg:py-28">
          <div className="mx-auto max-w-[1440px] px-5 text-center lg:px-10">
            <div className="reveal">
              <div className="mx-auto mb-6 h-px w-16 bg-primary/50" />
              <blockquote className="font-display text-4xl font-medium italic leading-tight text-primary-foreground sm:text-5xl lg:text-6xl">
                "The finest jewellery is not worn.<br />
                <span className="gold-shimmer-text">It is remembered."</span>
              </blockquote>
              <div className="mx-auto mt-6 h-px w-16 bg-primary/50" />
              <p className="mt-6 font-cinzel text-[10px] uppercase tracking-[0.3em] text-primary/60">The GJS Philosophy</p>
            </div>
          </div>
        </section>

        {/* â”€â”€ Legacy / Story Tiles â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section className="mx-auto max-w-[1440px] px-5 py-20 lg:px-10 lg:py-28">
          <div className="reveal mb-14">
            <SectionEyebrow>A Visual Language</SectionEyebrow>
            <GoldRule />
            <h2 className="font-display text-5xl font-medium leading-[0.95] text-espresso sm:text-6xl">
              Every detail<br />tells a story.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { image: legacyNecklaceImage, eyebrow: "01 Â· Light", title: "For the moments that begin quietly." },
              { image: legacyRingImage, eyebrow: "02 Â· Legacy", title: "For the traditions worth carrying forward." },
              { image: earringsImage, eyebrow: "03 Â· Becoming", title: "For every version of who you are." },
            ].map(({ image, eyebrow, title }, i) => (
              <article key={eyebrow} className={`group reveal reveal-delay-${i + 1}`}>
                <div className="overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    className="aspect-[0.85] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-5 border-t border-border pt-5">
                  <p className="section-eyebrow text-[9px]">{eyebrow}</p>
                  <h3 className="mt-3 font-display text-3xl font-medium leading-tight text-espresso">{title}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* â”€â”€ Contact Section â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section id="contact" className="bg-ivory-deep py-20 lg:py-28">
          <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
            <div className="reveal mb-14">
              <SectionEyebrow>Get In Touch</SectionEyebrow>
              <GoldRule />
              <h2 className="font-display text-5xl font-medium leading-[0.95] text-espresso sm:text-6xl">
                Visit us or reach<br />out anytime.
              </h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Contact Details */}
              <div className="reveal space-y-8">
                <div className="border border-border bg-background p-8">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex size-10 shrink-0 items-center justify-center border border-primary/30 bg-ivory-deep text-gold-strong">
                      <MapPin className="size-4" />
                    </div>
                    <div>
                      <p className="font-cinzel text-[9px] uppercase tracking-[0.25em] text-gold-strong">Our Address</p>
                      <p className="mt-2 text-sm leading-7 text-espresso font-medium">GJS Jewellers Private Limited</p>
                      <p className="text-sm leading-7 text-muted-foreground">
                        12/343, Manjady, Manalur P.O,<br />
                        Thrissur, Kerala â€“ 680617<br />
                        India
                      </p>
                      <p className="mt-2 text-xs text-muted-foreground italic">(Also: XII/343, Manalur, Thrissur)</p>
                    </div>
                  </div>
                </div>

                <div className="border border-border bg-background p-8">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex size-10 shrink-0 items-center justify-center border border-primary/30 bg-ivory-deep text-gold-strong">
                      <Phone className="size-4" />
                    </div>
                    <div>
                      <p className="font-cinzel text-[9px] uppercase tracking-[0.25em] text-gold-strong">Mobile</p>
                      <a
                        href="tel:+919645969022"
                        className="mt-2 block font-display text-3xl font-medium text-espresso transition-colors hover:text-gold-strong"
                      >
                        +91 9645 969 022
                      </a>
                    </div>
                  </div>
                </div>

                <div className="border border-border bg-background p-8">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex size-10 shrink-0 items-center justify-center border border-primary/30 bg-ivory-deep text-gold-strong">
                      <Mail className="size-4" />
                    </div>
                    <div className="space-y-3">
                      <p className="font-cinzel text-[9px] uppercase tracking-[0.25em] text-gold-strong">Email</p>
                      <a
                        href="mailto:gjsjewellersprivatelimited@gmail.com"
                        className="block text-sm font-medium text-espresso underline-offset-4 transition-colors hover:text-gold-strong hover:underline"
                      >
                        gjsjewellersprivatelimited@gmail.com
                      </a>
                      <a
                        href="mailto:gjsjewellersmlr@gmail.com"
                        className="block text-sm font-medium text-espresso underline-offset-4 transition-colors hover:text-gold-strong hover:underline"
                      >
                        gjsjewellersmlr@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Info Panel */}
              <div className="reveal reveal-delay-2">
                <div className="h-full border border-border bg-espresso p-8 text-primary-foreground">
                  <p className="font-cinzel text-[9px] uppercase tracking-[0.28em] text-primary">Company Profile</p>
                  <GoldRule />
                  <div className="mt-6 space-y-5">
                    {[
                      { label: "Name of Industry", value: "GJS Jewellers Private Limited" },
                      { label: "Constitution", value: "Private Limited Company" },
                      { label: "Designation", value: "Managing Director" },
                      { label: "Existing Activity", value: "Manufacturing of Gold Jewellery" },
                      { label: "Location", value: "XII/343, Manalur, Thrissur, Kerala" },
                      { label: "Professional Experience", value: "20 Years â€” Managerial Experience in Manufacturing Industry" },
                      { label: "Financial Framework", value: "â‚¹50 Crore" },
                      { label: "Total Asset Worth", value: "â‚¹6.94 Crore" },
                    ].map(({ label, value }) => (
                      <div key={label} className="border-b border-primary-foreground/10 pb-4">
                        <p className="font-cinzel text-[8px] uppercase tracking-[0.2em] text-primary/60">{label}</p>
                        <p className="mt-1 text-sm font-medium text-primary-foreground/90">{value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex gap-4">
                    <a
                      href="mailto:gjsjewellersprivatelimited@gmail.com"
                      className="inline-flex h-12 flex-1 items-center justify-center gap-2 border border-primary bg-primary font-cinzel text-[9px] uppercase tracking-[0.2em] text-espresso transition-all hover:bg-primary/90"
                    >
                      <Mail className="size-3.5" /> Email Us
                    </a>
                    <a
                      href="tel:+919645969022"
                      className="inline-flex h-12 flex-1 items-center justify-center gap-2 border border-primary-foreground/25 font-cinzel text-[9px] uppercase tracking-[0.2em] text-primary-foreground transition-all hover:border-primary hover:text-primary"
                    >
                      <Phone className="size-3.5" /> Call Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* â”€â”€ Footer â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <footer className="bg-espresso text-primary-foreground">
        <div className="mx-auto max-w-[1440px] px-5 py-16 lg:px-10">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
            <div>
              <GjsLogo size="lg" dark />
              <p className="mt-6 max-w-[28ch] text-sm leading-7 text-primary-foreground/55">
                Where timeless craftsmanship meets precision manufacturing. Kerala's trusted name in gold and diamond jewellery.
              </p>
              <div className="mt-6 space-y-2 text-xs text-primary-foreground/45">
                <p>12/343, Manjady, Manalur P.O</p>
                <p>Thrissur, Kerala â€“ 680617</p>
                <p className="pt-1">+91 9645 969 022</p>
              </div>
            </div>

            <FooterGroup
              title="Shop"
              links={["Gold Jewellery", "Diamond Jewellery", "Antique Collection", "CNC Bangles", "Gold Coins"]}
            />
            <FooterGroup
              title="Discover"
              links={["Our Story", "Craftsmanship", "Quality Assurance", "B2B Wholesale", "Export Operations"]}
            />
            <FooterGroup
              title="Connect"
              links={["Contact Us", "Visit Our Store", "WhatsApp", "Email Enquiry", "Custom Orders"]}
            />
          </div>
        </div>

        <div className="border-t border-primary-foreground/10">
          <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-3 px-5 py-5 text-[9px] uppercase tracking-[0.18em] text-primary-foreground/35 sm:flex-row lg:px-10">
            <span>Â© 2026 GJS Jewellers Private Limited. All rights reserved.</span>
            <span>Manalur· Thrissur· Kerala · India</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
