import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, Card } from "@/components/site";
import hero from "@/assets/image_7.jpg";
import img9 from "@/assets/image_9.jpg";
import img6 from "@/assets/image_6.jpg";
import img12 from "@/assets/image_12.jpg";
import img16 from "@/assets/image_16.jpg";
import img18 from "@/assets/image_18.jpg";
import img19 from "@/assets/image_19.jpg";
import img23 from "@/assets/image_23.jpg";
import img24 from "@/assets/image_24.jpg";

export const Route = createFileRoute("/")({ component: Home });

const values = [
  { title: "Islamic Values", desc: "A learning environment grounded in faith, character, and integrity." },
  { title: "Qualified Teachers", desc: "Experienced, dedicated educators mentoring every learner." },
  { title: "Boarding Facilities", desc: "Safe, comfortable dormitories that feel like home." },
  { title: "Modern Laboratories", desc: "Well-equipped science and computer labs for hands-on learning." },
  { title: "Library", desc: "A rich collection of books and digital resources for research." },
  { title: "Sports", desc: "Football, athletics and clubs that build teamwork and discipline." },
  { title: "Discipline", desc: "Structured routines that nurture responsibility and focus." },
  { title: "Academic Excellence", desc: "A proven curriculum aimed at strong national exam results." },
];

const stats = [
  { n: "600+", l: "Students" },
  { n: "45+", l: "Qualified Teachers" },
  { n: "20+", l: "Subjects Offered" },
  { n: "10+", l: "Clubs & Sports" },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-dark text-white">
        <img src={hero} alt="Students in a Khalifa Bin Jasim classroom" className="absolute inset-0 h-full w-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-brand-dark/75" />
        <div className="container-x relative grid gap-10 py-20 md:py-32 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div className="animate-fade-up">
            <div className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider">
              Admissions Open
            </div>
            <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
              Welcome to Khalifa Bin Jasim High School
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/85 md:text-xl">
              Garden of Knowledge and Virtue — a Muslim boys' boarding school shaping tomorrow's leaders through faith, discipline, and academic excellence.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/admissions" className="inline-flex items-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-brand-dark hover:bg-white/90">
                Apply Now
              </Link>
              <Link to="/about" className="inline-flex items-center rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
                Explore Our School
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              <img src={img9} alt="" className="aspect-[3/4] w-full rounded-2xl object-cover shadow-xl" loading="lazy" />
              <img src={img6} alt="" className="mt-8 aspect-[3/4] w-full rounded-2xl object-cover shadow-xl" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-brand-soft">
        <div className="container-x grid grid-cols-2 gap-6 py-10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l} className="text-center">
              <div className="text-3xl font-extrabold text-brand-dark md:text-4xl">{s.n}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <Section eyebrow="About Our School" title="A community built on faith and learning">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <img src={img6} alt="Khalifa Bin Jasim students in school uniform" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-md" loading="lazy" />
          <div>
            <p className="text-lg leading-relaxed text-foreground/90">
              We are a Muslim Boys' boarding school located in <strong>Tuala Area, Ongata Rongai</strong>, past African Nazarene University main campus. Our school blends a strong Islamic foundation with a rigorous academic curriculum to nurture confident, disciplined, and God-conscious young men.
            </p>
            <dl className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                { t: "Vision", d: "To be a leading center of Islamic and academic excellence." },
                { t: "Mission", d: "Nurture God-conscious, disciplined and knowledgeable leaders." },
                { t: "Motto", d: "Garden of Knowledge and Virtue." },
              ].map((v) => (
                <div key={v.t} className="rounded-xl border border-border bg-card p-4">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-brand">{v.t}</dt>
                  <dd className="mt-1 text-sm text-foreground/80">{v.d}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <a href="tel:+254728572929" className="rounded-md bg-brand px-4 py-2 font-semibold text-white hover:bg-brand-dark">Call +254 728 572 929</a>
              <a href="mailto:kbjhigh@gmail.com" className="rounded-md border border-border px-4 py-2 font-semibold hover:bg-accent">kbjhigh@gmail.com</a>
            </div>
          </div>
        </div>
      </Section>

      {/* Why choose us */}
      <Section eyebrow="Why Choose Us" title="Everything a young learner needs to thrive" className="bg-brand-soft/50">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <Card key={v.title}>
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-lg bg-brand text-white">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
              </div>
              <h3 className="text-base font-semibold text-brand-dark">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Principal message */}
      <Section eyebrow="Principal's Message" title="A word from our Principal">
        <Card className="mx-auto max-w-4xl">
          <div className="grid gap-6 md:grid-cols-[auto_1fr] md:items-center">
            <div className="mx-auto grid h-28 w-28 place-items-center rounded-full bg-brand-soft text-3xl font-bold text-brand-dark">
              KBJ
            </div>
            <div>
              <p className="text-base leading-relaxed text-foreground/90">
                "At Khalifa Bin Jasim High School, we are committed to shaping young men who are not only academically outstanding but also grounded in Islamic values. We welcome you to a community that treats every student as a unique gift, guiding them toward becoming responsible leaders of tomorrow."
              </p>
              <div className="mt-4 text-sm">
                <div className="font-semibold text-brand-dark">The Principal</div>
                <div className="text-muted-foreground">Khalifa Bin Jasim High School</div>
              </div>
            </div>
          </div>
        </Card>
      </Section>

      {/* Life snapshots */}
      <Section eyebrow="Student Life" title="Learning inside and beyond the classroom" className="bg-brand-soft/50">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { src: img12, label: "Assemblies & lectures" },
            { src: img16, label: "School football team" },
            { src: img19, label: "Sports & fitness" },
            { src: img18, label: "Quran competitions" },
            { src: img23, label: "Leadership & prefects" },
            { src: img24, label: "Awards & achievements" },
          ].map((i) => (
            <figure key={i.label} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={i.src} alt={i.label} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <figcaption className="px-4 py-3 text-sm font-medium text-brand-dark">{i.label}</figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/gallery" className="inline-flex items-center rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-dark">View full gallery</Link>
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-brand-dark text-white">
        <div className="container-x flex flex-col items-center gap-6 py-14 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Ready to join our school community?</h2>
            <p className="mt-2 text-white/85">Admissions are open for Form 1 to Form 4. Speak to our team today.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/admissions" className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-brand-dark hover:bg-white/90">Apply Now</Link>
            <Link to="/contact" className="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold hover:bg-white/10">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
