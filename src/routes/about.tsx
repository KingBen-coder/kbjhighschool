import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, Card } from "@/components/site";
import img7 from "@/assets/image_7.jpg.asset.json";
import img6 from "@/assets/image_6.jpg.asset.json";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About — Khalifa Bin Jasim High School" },
      { name: "description", content: "Learn about Khalifa Bin Jasim High School — our vision, mission, values and location in Tuala, Ongata Rongai." },
      { property: "og:title", content: "About — Khalifa Bin Jasim High School" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function About() {
  return (
    <>
      <PageHero title="About Our School" subtitle="A Muslim boys' boarding school rooted in faith, discipline and academic excellence." image={img7.url} />
      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <img src={img6.url} alt="Khalifa Bin Jasim students" className="aspect-[4/3] w-full rounded-2xl object-cover shadow" loading="lazy" />
          <div className="space-y-4 text-foreground/90">
            <p className="text-lg leading-relaxed">
              Khalifa Bin Jasim High School is a Muslim Boys' boarding school located in <strong>Tuala Area, Ongata Rongai</strong>, past African Nazarene University main campus. We combine a rigorous Kenyan curriculum with a strong Islamic character-building program.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Our school provides a safe, disciplined and supportive learning environment where every student is guided to reach their full potential — spiritually, academically and socially.
            </p>
          </div>
        </div>
      </Section>
      <Section eyebrow="Who We Are" title="Vision, Mission, Motto & Values" className="bg-brand-soft/50">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Vision", d: "To be a leading center of Islamic and academic excellence in the region." },
            { t: "Mission", d: "To nurture God-conscious, disciplined, and knowledgeable young leaders." },
            { t: "Motto", d: "Garden of Knowledge and Virtue." },
            { t: "Core Values", d: "Faith · Integrity · Discipline · Excellence · Respect · Service." },
          ].map((v) => (
            <Card key={v.t}>
              <div className="text-xs font-semibold uppercase tracking-wider text-brand">{v.t}</div>
              <p className="mt-2 text-sm text-foreground/85">{v.d}</p>
            </Card>
          ))}
        </div>
      </Section>
      <Section eyebrow="Find Us" title="Our Location">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold text-brand-dark">Contact information</h3>
            <ul className="mt-4 space-y-3 text-sm text-foreground/85">
              <li><strong>Address:</strong> Tuala Area, Ongata Rongai, past African Nazarene University Main Campus</li>
              <li><strong>Phone:</strong> <a href="tel:+254728572929" className="text-brand-dark underline">+254 728 572 929</a></li>
              <li><strong>Email:</strong> <a href="mailto:kbjhigh@gmail.com" className="text-brand-dark underline">kbjhigh@gmail.com</a></li>
            </ul>
          </Card>
          <div className="overflow-hidden rounded-2xl border border-border">
            <iframe
              title="Khalifa Bin Jasim High School location"
              src="https://www.google.com/maps?q=African+Nazarene+University+Ongata+Rongai&output=embed"
              className="h-80 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
