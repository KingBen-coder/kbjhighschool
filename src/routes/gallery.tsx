import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero, Section } from "@/components/site";
import img6 from "@/assets/image_6.jpg";
import img7 from "@/assets/image_7.jpg";
import img9 from "@/assets/image_9.jpg";
import img12 from "@/assets/image_12.jpg";
import img16 from "@/assets/image_16.jpg";
import img18 from "@/assets/image_18.jpg";
import img19 from "@/assets/image_19.jpg";
import img23 from "@/assets/image_23.jpg";
import img24 from "@/assets/image_24.jpg";

export const Route = createFileRoute("/gallery")({
  component: Gallery,
  head: () => ({
    meta: [
      { title: "Gallery — Khalifa Bin Jasim High School" },
      { name: "description", content: "Photos from classrooms, sports, events and student life at Khalifa Bin Jasim High School." },
      { property: "og:title", content: "Gallery — Khalifa Bin Jasim High School" },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
});

type Item = { src: string; cat: "Students" | "Classroom" | "Sports" | "Events"; alt: string };
const items: Item[] = [
  { src: img6, cat: "Students", alt: "Students in school uniform" },
  { src: img7, cat: "Classroom", alt: "Classroom lesson" },
  { src: img9, cat: "Classroom", alt: "Student writing in class" },
  { src: img12, cat: "Events", alt: "School assembly" },
  { src: img16, cat: "Sports", alt: "School football team" },
  { src: img19, cat: "Sports", alt: "Football training" },
  { src: img18, cat: "Events", alt: "Quran competition trophy" },
  { src: img24, cat: "Events", alt: "Awards ceremony" },
  { src: img23, cat: "Students", alt: "Prefects" },
];

const cats = ["All", "Students", "Classroom", "Sports", "Events"] as const;

function Gallery() {
  const [cat, setCat] = useState<(typeof cats)[number]>("All");
  const [lightbox, setLightbox] = useState<Item | null>(null);
  const filtered = useMemo(() => (cat === "All" ? items : items.filter((i) => i.cat === cat)), [cat]);

  return (
    <>
      <PageHero title="Gallery" subtitle="Moments from life at Khalifa Bin Jasim High School." image={img12} />
      <Section>
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {cats.map((c) => (
            <button key={c} onClick={() => setCat(c)} className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${cat === c ? "bg-brand text-white" : "bg-brand-soft text-brand-dark hover:bg-brand hover:text-white"}`}>{c}</button>
          ))}
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((i) => (
            <button key={i.src} onClick={() => setLightbox(i)} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <img src={i.src} alt={i.alt} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </button>
          ))}
        </div>
      </Section>
      {lightbox && (
        <div role="dialog" aria-modal="true" onClick={() => setLightbox(null)} className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-4">
          <img src={lightbox.src} alt={lightbox.alt} className="max-h-[85vh] w-auto max-w-full rounded-lg" />
          <button onClick={() => setLightbox(null)} aria-label="Close" className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-brand-dark">Close</button>
        </div>
      )}
    </>
  );
}
