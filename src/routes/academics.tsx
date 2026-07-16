import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, Card } from "@/components/site";
import img9 from "@/assets/image_9.jpg";

export const Route = createFileRoute("/academics")({
  component: Academics,
  head: () => ({
    meta: [
      { title: "Academics — Khalifa Bin Jasim High School" },
      { name: "description", content: "Explore our curriculum, departments, subjects and co-curricular programs at Khalifa Bin Jasim High School." },
      { property: "og:title", content: "Academics — Khalifa Bin Jasim High School" },
      { property: "og:url", content: "/academics" },
    ],
    links: [{ rel: "canonical", href: "/academics" }],
  }),
});

function Academics() {
  const departments = ["Sciences", "Mathematics", "Languages", "Humanities", "Technical", "Islamic Religious Education"];
  const subjects = ["English", "Kiswahili", "Mathematics", "Biology", "Chemistry", "Physics", "Geography", "History", "CRE / IRE", "Business Studies", "Computer Studies", "Arabic"];
  return (
    <>
      <PageHero title="Academics" subtitle="A rigorous curriculum designed to prepare every learner for national exams and beyond." image={img9} />
      <Section eyebrow="Curriculum" title="Kenya 8-4-4 & CBC aligned learning">
        <p className="mx-auto max-w-3xl text-center text-foreground/85">
          Our academic program follows the Kenyan national curriculum with additional emphasis on Islamic Studies and Arabic. Students are prepared for the KCSE examination while developing critical thinking, research and life skills.
        </p>
      </Section>
      <Section eyebrow="Departments" title="Six academic departments" className="bg-brand-soft/50">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map((d) => (
            <Card key={d}>
              <h3 className="text-base font-semibold text-brand-dark">{d}</h3>
              <p className="mt-2 text-sm text-muted-foreground">Led by qualified teachers with a strong exam and mentorship track record.</p>
            </Card>
          ))}
        </div>
      </Section>
      <Section eyebrow="Subjects" title="Subjects offered">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {subjects.map((s) => (
            <div key={s} className="rounded-lg border border-border bg-card px-4 py-3 text-center text-sm font-medium text-foreground/90">{s}</div>
          ))}
        </div>
      </Section>
      <Section eyebrow="Results" title="Examination performance" className="bg-brand-soft/50">
        <div className="grid gap-5 sm:grid-cols-3">
          {[
            { n: "A / A-", l: "Top students each year" },
            { n: "85%+", l: "University qualification" },
            { n: "100%", l: "KCSE candidature completion" },
          ].map((s) => (
            <Card key={s.l} className="text-center">
              <div className="text-3xl font-extrabold text-brand-dark">{s.n}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
            </Card>
          ))}
        </div>
      </Section>
      <Section eyebrow="Beyond Class" title="Co-curricular activities">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {["Quran & Islamic Studies clubs", "Debate & Public speaking", "Football & Athletics", "Science & Innovation clubs"].map((a) => (
            <Card key={a}><p className="text-sm font-medium text-foreground/90">{a}</p></Card>
          ))}
        </div>
      </Section>
    </>
  );
}
