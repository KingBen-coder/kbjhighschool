import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, Card } from "@/components/site";
import img16 from "@/assets/image_16.jpg";
import img19 from "@/assets/image_19.jpg";
import img12 from "@/assets/image_12.jpg";
import img18 from "@/assets/image_18.jpg";

export const Route = createFileRoute("/student-life")({
  component: StudentLife,
  head: () => ({
    meta: [
      { title: "Student Life — Khalifa Bin Jasim High School" },
      { name: "description", content: "Boarding, sports, clubs, leadership, guidance, dining and health services at Khalifa Bin Jasim High School." },
      { property: "og:title", content: "Student Life — Khalifa Bin Jasim High School" },
      { property: "og:url", content: "/student-life" },
    ],
    links: [{ rel: "canonical", href: "/student-life" }],
  }),
});

const items = [
  { t: "Boarding", d: "Comfortable dormitories under caring supervision." },
  { t: "Sports", d: "Football, athletics and indoor games for every learner." },
  { t: "Clubs", d: "Science, Quran, Debate, ICT and more." },
  { t: "Leadership", d: "Student council and prefect body developing leaders." },
  { t: "Guidance & Counselling", d: "Trained counsellors supporting every student." },
  { t: "Dining", d: "Balanced halal meals prepared daily on campus." },
  { t: "Health Services", d: "On-site sick bay with qualified staff." },
  { t: "Islamic Life", d: "Daily prayers, halaqas and Islamic mentorship." },
];

export default function _() { return null; }

function StudentLife() {
  return (
    <>
      <PageHero title="Student Life" subtitle="A vibrant community balancing academics, faith, sports and personal growth." image={img12} />
      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((i) => (
            <Card key={i.t}>
              <h3 className="text-base font-semibold text-brand-dark">{i.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{i.d}</p>
            </Card>
          ))}
        </div>
      </Section>
      <Section eyebrow="Snapshots" title="Life on campus" className="bg-brand-soft/50">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[img16, img19, img18].map((im, idx) => (
            <img key={idx} src={im} alt="Student life" loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-sm" />
          ))}
        </div>
      </Section>
    </>
  );
}
