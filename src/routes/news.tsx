import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, Card } from "@/components/site";
import img24 from "@/assets/image_24.jpg.asset.json";
import img18 from "@/assets/image_18.jpg.asset.json";
import img23 from "@/assets/image_23.jpg.asset.json";

export const Route = createFileRoute("/news")({
  component: News,
  head: () => ({
    meta: [
      { title: "News & Events — Khalifa Bin Jasim High School" },
      { name: "description", content: "Latest news, events, achievements and announcements from Khalifa Bin Jasim High School." },
      { property: "og:title", content: "News & Events — Khalifa Bin Jasim High School" },
      { property: "og:url", content: "/news" },
    ],
    links: [{ rel: "canonical", href: "/news" }],
  }),
});

const posts = [
  { img: img24.url, tag: "Achievement", date: "March 2026", title: "Ramadhan Quiz Competition — Certificate of Participation", excerpt: "Our students represented the school at the annual Ramadhan Quiz Competition and were awarded for their brilliant performance." },
  { img: img18.url, tag: "Award", date: "March 2026", title: "Runners-up at Khalifa Bin Jasim Quran Contest", excerpt: "Congratulations to our team for taking 2nd place in this year's inter-school Quran contest." },
  { img: img23.url, tag: "Leadership", date: "February 2026", title: "New Prefect Body Inducted", excerpt: "The 2026 prefect body was officially inducted in a colourful ceremony attended by parents and staff." },
];

function News() {
  return (
    <>
      <PageHero title="News & Events" subtitle="Stay up to date with what's happening at Khalifa Bin Jasim High School." image={img24.url} />
      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Card key={p.title} className="flex flex-col overflow-hidden !p-0">
              <img src={p.img} alt="" loading="lazy" className="aspect-[16/10] w-full object-cover" />
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-2 flex items-center gap-2 text-xs">
                  <span className="rounded-full bg-brand-soft px-2 py-0.5 font-semibold text-brand-dark">{p.tag}</span>
                  <span className="text-muted-foreground">{p.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-brand-dark">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.excerpt}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
