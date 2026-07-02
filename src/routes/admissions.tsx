import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section, Card } from "@/components/site";
import img23 from "@/assets/image_23.jpg.asset.json";

export const Route = createFileRoute("/admissions")({
  component: Admissions,
  head: () => ({
    meta: [
      { title: "Admissions — Khalifa Bin Jasim High School" },
      { name: "description", content: "Admission process, requirements, fee structure and online application for Khalifa Bin Jasim High School." },
      { property: "og:title", content: "Admissions — Khalifa Bin Jasim High School" },
      { property: "og:url", content: "/admissions" },
    ],
    links: [{ rel: "canonical", href: "/admissions" }],
  }),
});

function Admissions() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    if (name.length < 2 || !email.includes("@") || phone.length < 7) {
      setStatus("error"); setError("Please fill your name, a valid email and phone number.");
      return;
    }
    // Simulate submission — an admin can wire this to a Google Apps Script Web App endpoint later.
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
    form.reset();
  }

  return (
    <>
      <PageHero title="Admissions" subtitle="Join a community where academic excellence meets Islamic values." image={img23.url} />

      <Section eyebrow="How to Apply" title="Admission process">
        <ol className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {["Submit online form", "Attend interview", "Pay admission fee", "Report on opening day"].map((s, i) => (
            <li key={s} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="mb-3 grid h-9 w-9 place-items-center rounded-full bg-brand text-sm font-bold text-white">{i + 1}</div>
              <div className="font-semibold text-brand-dark">{s}</div>
            </li>
          ))}
        </ol>
      </Section>

      <Section eyebrow="What You Need" title="Requirements & documents" className="bg-brand-soft/50">
        <div className="grid gap-5 md:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold text-brand-dark">Requirements</h3>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-foreground/85">
              <li>KCPE certificate / result slip (for Form 1)</li>
              <li>Progress reports (for transfers)</li>
              <li>Copy of birth certificate</li>
              <li>Two passport photos</li>
              <li>Medical form (provided)</li>
            </ul>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-brand-dark">School uniform</h3>
            <p className="mt-3 text-sm text-foreground/85">Grey sweater vest, white shirt, striped tie, dark navy trousers and black shoes. Uniform is available at the school store on reporting day.</p>
          </Card>
        </div>
      </Section>

      <Section eyebrow="Fees" title="Fee structure">
        <Card className="mx-auto max-w-3xl">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-brand-dark">
                  <th className="py-2 pr-4">Item</th><th className="py-2 pr-4">Term 1</th><th className="py-2 pr-4">Term 2</th><th className="py-2">Term 3</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["Tuition & boarding", "KSh 35,000", "KSh 25,000", "KSh 20,000"],
                  ["Meals", "included", "included", "included"],
                  ["Activity fee", "KSh 2,000", "KSh 2,000", "KSh 2,000"],
                ].map((r) => (
                  <tr key={r[0]}><td className="py-3 pr-4 font-medium">{r[0]}</td><td className="py-3 pr-4">{r[1]}</td><td className="py-3 pr-4">{r[2]}</td><td className="py-3">{r[3]}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">Indicative figures. Please contact the office for the current fee schedule.</p>
        </Card>
      </Section>

      <Section eyebrow="Apply Online" title="Online admission form" className="bg-brand-soft/50">
        <form onSubmit={onSubmit} className="mx-auto grid max-w-2xl gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm" noValidate>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field name="name" label="Student full name" required />
            <Field name="dob" label="Date of birth" type="date" />
            <Field name="parent" label="Parent / Guardian" required />
            <Field name="phone" label="Phone number" type="tel" required />
            <Field name="email" label="Email address" type="email" required />
            <Field name="grade" label="Applying for" placeholder="e.g. Form 1" required />
          </div>
          <label className="text-sm font-medium">
            Message
            <textarea name="message" rows={4} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring" />
          </label>
          <div className="flex flex-wrap items-center gap-3">
            <button type="submit" disabled={status === "loading"} className="inline-flex items-center rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-dark disabled:opacity-70">
              {status === "loading" ? "Submitting…" : "Submit application"}
            </button>
            <a href="#" className="text-sm font-medium text-brand-dark underline">Download admission form (PDF)</a>
          </div>
          {status === "success" && <p role="status" className="rounded-md bg-brand-soft px-3 py-2 text-sm text-brand-dark">Thank you — we've received your application and will be in touch shortly.</p>}
          {status === "error" && <p role="alert" className="rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive">{error}</p>}
        </form>
      </Section>
    </>
  );
}

function Field({ name, label, type = "text", required, placeholder }: { name: string; label: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <label className="text-sm font-medium">
      {label}{required && <span className="text-destructive"> *</span>}
      <input name={name} type={type} required={required} placeholder={placeholder} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring" />
    </label>
  );
}
