import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Menu,
  Play,
  Quote,
  ArrowUpRight,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import heroImage from "@/assets/gjs-hero.jpg";
import necklaceImage from "@/assets/gjs-necklace.jpg";
import earringsImage from "@/assets/gjs-earrings.jpg";
import bangleImage from "@/assets/gjs-bangle.jpg";
import ringImage from "@/assets/gjs-ring.jpg";

const categoryTiles = [
  { name: "Rings", image: ringImage },
  { name: "Necklaces", image: necklaceImage },
  { name: "Earrings", image: earringsImage },
  { name: "Bangles", image: bangleImage },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GJS Jewellers | Jewellery Crafted for Generations" },
      { name: "description", content: "Discover GJS Jewellers: traditional Indian craftsmanship, precision manufacturing, and certified gold and diamond jewellery." },
      { property: "og:title", content: "GJS Jewellers | Jewellery Crafted for Generations" },
      { property: "og:description", content: "Traditional craftsmanship meets precision manufacturing in the GJS collection." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function formatPrice(value: number) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(value);
}

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="bg-espresso px-4 py-2 text-center text-[10px] font-medium uppercase tracking-[0.22em] text-primary-foreground">
        Crafted with precision <span className="mx-2 text-gold">•</span> Designed for generations
      </div>

      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 lg:px-10">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label="Open menu"><Menu /></Button>
            <a href="#top" className="group flex items-center gap-2" aria-label="GJS Jewellers home">
              <span className="font-display text-[34px] font-semibold leading-none tracking-[-0.08em] text-espresso">GJS</span>
              <span className="mt-4 hidden text-[8px] font-semibold uppercase tracking-[0.32em] text-gold-strong sm:block">Jewellers</span>
            </a>
          </div>
          <nav className="hidden items-center gap-7 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground lg:flex">
            {[["Collections", "#collections"], ["Gold", "#new-arrivals"], ["Diamond", "#new-arrivals"], ["Antique", "#craftsmanship"], ["About", "#about"], ["Craftsmanship", "#craftsmanship"]].map(([label, href]) => <a key={label} href={href} className="transition-colors hover:text-gold-strong">{label}</a>)}
          </nav>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="hidden sm:inline-flex" aria-label="Play film"><Play /></Button>
            <Button variant="ghost" size="icon" className="hidden sm:inline-flex" aria-label="Visit Instagram"><ArrowUpRight /></Button>
          </div>
        </div>
        {menuOpen && <div className="border-t border-border bg-background px-5 py-5 lg:hidden"><div className="grid gap-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{["Collections", "Gold", "Diamond", "Antique", "About", "Craftsmanship"].map((item) => <a key={item} href={item === "About" ? "#about" : item === "Craftsmanship" ? "#craftsmanship" : "#collections"} onClick={() => setMenuOpen(false)}>{item}</a>)}</div></div>}
      </header>

      <main id="top">
        <section className="relative overflow-hidden border-b border-border bg-ivory-deep">
          <div className="mx-auto grid min-h-[620px] max-w-[1440px] items-stretch lg:grid-cols-[0.92fr_1.08fr]">
            <div className="flex flex-col justify-center px-6 py-16 sm:px-10 lg:px-20 lg:py-24">
              <p className="animate-rise-in text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-strong">The GJS signature collection</p>
              <h1 className="animate-rise-in-delay mt-5 max-w-[11ch] font-display text-6xl font-medium leading-[0.9] tracking-[-0.04em] text-espresso sm:text-7xl lg:text-[92px]">Jewellery crafted for generations.</h1>
              <p className="mt-7 max-w-[38ch] text-sm leading-7 text-muted-foreground sm:text-base">Traditional craftsmanship, modern precision, and pieces made to become part of your family story.</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button className="h-12 rounded-none bg-espresso px-7 text-sm text-primary-foreground hover:bg-espresso-soft" onClick={() => document.getElementById("collections")?.scrollIntoView({ behavior: "smooth" })}>Explore collection <ArrowRight /></Button>
                <Button variant="outline" className="h-12 rounded-none border-espresso/30 bg-transparent px-6 text-sm text-espresso hover:bg-background" onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>Discover our story</Button>
              </div>
              <div className="mt-14 flex items-center gap-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground"><span>Kerala, India</span><span className="size-1 rounded-full bg-gold" /><span>Certified purity</span></div>
            </div>
            <div className="hero-sheen relative min-h-[520px] overflow-hidden lg:min-h-full">
              <img src={heroImage} alt="Ornate gold necklace on ivory silk" width={1200} height={1504} className="absolute inset-0 h-full w-full object-cover object-center" />
              <div className="absolute bottom-6 left-6 max-w-[230px] border border-primary-foreground/35 bg-espresso/75 p-4 text-primary-foreground backdrop-blur-sm sm:bottom-10 sm:left-10"><p className="text-[10px] uppercase tracking-[0.2em] text-primary">Featured piece</p><p className="mt-2 font-display text-2xl leading-none">The Aranya Haaram</p><p className="mt-2 text-xs text-primary-foreground/75">22K gold · Ruby & emerald</p></div>
            </div>
          </div>
        </section>

        <section id="collections" className="mx-auto max-w-[1440px] px-5 py-16 lg:px-10 lg:py-24">
          <div className="flex items-end justify-between gap-4"><div><p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-gold-strong">The collection</p><h2 className="mt-3 font-display text-4xl leading-none text-espresso sm:text-5xl">Find your forever piece.</h2></div><a href="#new-arrivals" className="hidden items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-gold-strong sm:flex">Shop all <ArrowRight className="size-4" /></a></div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">{categoryTiles.map((tile) => <a key={tile.name} href="#collections" className="group relative aspect-[0.78] overflow-hidden bg-ivory-deep"><img src={tile.image} alt={tile.name} loading="lazy" width={900} height={900} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" /><div className="absolute bottom-4 left-4 text-primary-foreground"><p className="font-display text-2xl sm:text-3xl">{tile.name}</p><p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-primary-foreground/70">View story</p></div></a>)}</div>
        </section>

        <section id="about" className="bg-ivory-deep py-16 lg:py-24">
          <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 lg:grid-cols-2 lg:gap-24 lg:px-10"><div className="relative"><div className="absolute -left-3 -top-3 h-full w-full border border-gold/50" /><img src={ringImage} alt="Antique gold ring with ruby and emerald details" loading="lazy" width={900} height={900} className="relative aspect-square w-full object-cover" /></div><div><p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-gold-strong">Our story</p><h2 className="mt-4 max-w-[12ch] font-display text-5xl leading-[0.95] text-espresso sm:text-6xl">Tradition, reimagined.</h2><p className="mt-7 max-w-[48ch] text-sm leading-7 text-muted-foreground">GJS Jewellers brings together traditional craftsmanship and cutting-edge technology to create exquisite ornaments. From Kerala, our approach is grounded in purity, precision manufacturing, and a deep respect for the craft.</p><p className="mt-5 max-w-[48ch] text-sm leading-7 text-muted-foreground">Every piece is created with a clear eye for proportion, finish, and lasting beauty — from the first design to final quality control.</p><a href="#craftsmanship" className="mt-8 inline-flex items-center gap-2 border-b border-gold-strong pb-2 text-xs font-semibold uppercase tracking-[0.16em] text-espresso">Meet the atelier <ArrowRight className="size-4" /></a></div></div>
        </section>

        <section id="craftsmanship" className="mx-auto max-w-[1440px] px-5 py-16 lg:px-10 lg:py-24"><div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]"><div><p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-gold-strong">The GJS standard</p><h2 className="mt-4 max-w-[10ch] font-display text-5xl leading-[0.95] text-espresso">Pure. Precise. Timeless.</h2></div><div className="grid gap-0 border-t border-border sm:grid-cols-2 lg:grid-cols-4">{[["01", "Design", "From a considered sketch to a refined digital model."], ["02", "Precision manufacturing", "Modern machines bring symmetry and consistency."], ["03", "Quality control", "Every detail is inspected before finishing."], ["04", "Certification", "Gold purity and stones are documented with care."]].map(([number, title, text]) => <div key={number} className="border-b border-border py-6 sm:px-5 lg:border-r lg:px-6 lg:py-7 first:lg:pl-0 last:lg:border-r-0"><span className="font-display text-3xl text-gold">{number}</span><h3 className="mt-5 font-display text-2xl text-espresso">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></div>)}</div></div></section>

        <section id="collection-notes" className="border-y border-border bg-background py-16 lg:py-24"><div className="mx-auto max-w-[1440px] px-5 lg:px-10"><div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end"><div><p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-gold-strong">A visual language</p><h2 className="mt-3 max-w-[11ch] font-display text-5xl leading-[0.95] text-espresso">Every detail tells a story.</h2></div><p className="max-w-[46ch] text-sm leading-7 text-muted-foreground">From the devotional geometry of antique gold to the clean brilliance of diamonds, GJS pieces are made to carry memory — not follow a season.</p></div><div className="mt-12 grid gap-5 md:grid-cols-3"><StoryTile image={necklaceImage} eyebrow="01 / Light" title="For the moments that begin quietly." /><StoryTile image={earringsImage} eyebrow="02 / Legacy" title="For the traditions worth carrying forward." /><StoryTile image={bangleImage} eyebrow="03 / Becoming" title="For every version of who you are." /></div></div></section>

        <section className="bg-espresso py-16 text-primary-foreground lg:py-24"><div className="mx-auto grid max-w-[1440px] gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-10"><div><p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-primary">The personal edit</p><h2 className="mt-4 max-w-[11ch] font-display text-5xl leading-[0.95] text-primary-foreground sm:text-6xl">Not sure where to start?</h2><p className="mt-6 max-w-[42ch] text-sm leading-7 text-primary-foreground/70">Tell us about the moment, and our jewellery specialists will help you find a piece that feels entirely yours.</p></div><div className="border border-primary-foreground/20 p-6 sm:p-8"><div className="grid gap-5 sm:grid-cols-2"><label className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary-foreground/60">I am shopping for<select className="mt-2 h-12 w-full border border-primary-foreground/20 bg-transparent px-3 text-sm font-normal normal-case tracking-normal text-primary-foreground outline-none"><option className="text-foreground">An engagement</option><option className="text-foreground">A wedding</option><option className="text-foreground">Everyday wear</option><option className="text-foreground">A meaningful gift</option></select></label><label className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary-foreground/60">My preferred style<select className="mt-2 h-12 w-full border border-primary-foreground/20 bg-transparent px-3 text-sm font-normal normal-case tracking-normal text-primary-foreground outline-none"><option className="text-foreground">Classic & timeless</option><option className="text-foreground">Heritage & antique</option><option className="text-foreground">Modern & minimal</option></select></label></div><Button className="mt-5 h-12 w-full rounded-none bg-primary text-espresso hover:bg-gold">Show me the edit <ArrowRight /></Button></div></div></section>

        <section className="mx-auto max-w-[1440px] px-5 py-16 lg:px-10"><div className="border-y border-border py-10"><Quote className="size-7 text-gold" /><p className="mt-5 max-w-[22ch] font-display text-4xl leading-tight text-espresso sm:text-5xl">“The finest jewellery is not worn. It is remembered.”</p><p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">The GJS philosophy</p></div></section>

        <section className="bg-ivory-deep px-5 py-16 lg:px-10 lg:py-20"><div className="mx-auto max-w-2xl text-center"><p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-gold-strong">The GJS letter</p><h2 className="mt-4 font-display text-4xl text-espresso sm:text-5xl">A little beauty, delivered.</h2><p className="mx-auto mt-4 max-w-[42ch] text-sm leading-6 text-muted-foreground">Be first to see new collections, craft stories, and private appointments.</p>{subscribed ? <p className="mt-8 text-sm font-semibold text-gold-strong">Thank you. You are on the list.</p> : <form className="mx-auto mt-8 flex max-w-md gap-2" onSubmit={(event) => { event.preventDefault(); if (email) setSubscribed(true); }}><input aria-label="Email address" type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Your email address" className="h-12 min-w-0 flex-1 border border-border bg-background px-4 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-gold" /><Button className="h-12 rounded-none bg-espresso px-5 text-primary-foreground hover:bg-espresso-soft">Join us</Button></form>}</div></section>
      </main>

      <footer className="bg-espresso text-primary-foreground"><div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:px-10"><div><span className="font-display text-4xl tracking-[-0.08em]">GJS</span><p className="mt-4 max-w-[28ch] text-sm leading-6 text-primary-foreground/65">Where timeless craftsmanship meets precision.</p><p className="mt-6 text-[10px] uppercase tracking-[0.18em] text-primary-foreground/45">Kerala · India</p></div><FooterGroup title="Shop" links={["Gold jewellery", "Diamond jewellery", "Antique collection", "Gold coins"]} /><FooterGroup title="Discover" links={["Our story", "Craftsmanship", "Personal consultation", "Journal"]} /><FooterGroup title="Care" links={["Shipping & delivery", "Returns", "Certification", "Contact us"]} /></div><div className="border-t border-primary-foreground/15"><div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-3 px-5 py-5 text-[10px] uppercase tracking-[0.14em] text-primary-foreground/40 sm:flex-row lg:px-10"><span>© 2026 GJS Jewellers</span><span>Privacy · Terms · Instagram · WhatsApp</span></div></div></footer>

    </div>
  );
}

function StoryTile({ image, eyebrow, title }: { image: string; eyebrow: string; title: string }) {
  return <article className="group"><div className="overflow-hidden bg-ivory-deep"><img src={image} alt={title} loading="lazy" width={900} height={900} className="aspect-[0.9] w-full object-cover transition-transform duration-700 group-hover:scale-105" /></div><p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-strong">{eyebrow}</p><h3 className="mt-2 max-w-[18ch] font-display text-3xl leading-none text-espresso">{title}</h3></article>;
}

function FooterGroup({ title, links }: { title: string; links: string[] }) {
  return <div><p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">{title}</p><div className="mt-4 grid gap-3 text-sm text-primary-foreground/65">{links.map((link) => <a key={link} href="#top" className="transition-colors hover:text-primary-foreground">{link}</a>)}</div></div>;
}