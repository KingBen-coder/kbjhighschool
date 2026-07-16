import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section, Card } from "@/components/site";
import img7 from "@/assets/image_7.jpg";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact — Khalifa Bin Jasim High School" },
      { name: "description", content: "Reach Khalifa Bin Jasim High School — phone, email and location. Send us a message using the contact form." },
      { property: "og:title", content: "Contact — Khalifa Bin Jasim High School" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading"); setError("");
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (name.length < 2 || !email.includes("@") || message.length < 5) {
      setStatus("error"); setError("Please fill your name, a valid email and a message."); return;
    }
    await new Promise((r) => setTimeout(r, 800));
    setStatus("success"); form.reset();
  }

  return (
    <>
      <PageHero title="Get in Touch" subtitle="We'd love to hear from you. Reach out about admissions, visits or any questions." image={img7} />
      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-5">
            <Card>
              <h3 className="text-lg font-semibold text-brand-dark">Contact information</h3>
              <ul className="mt-4 space-y-3 text-sm text-foreground/85">
                <li><strong>Phone:</strong> <a href="tel:+254728572929" className="text-brand-dark underline">+254 728 572 929</a></li>
                <li><strong>Email:</strong> <a href="mailto:kbjhigh@gmail.com" className="text-brand-dark underline">kbjhigh@gmail.com</a></li>
                <li><strong>Location:</strong> Tuala Area, Ongata Rongai, past African Nazarene University Main Campus</li>
              </ul>
            </Card>
            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe title="School map" src="https://www.google.com/maps?q=African+Nazarene+University+Ongata+Rongai&output=embed" className="h-72 w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
          <form onSubmit={onSubmit} noValidate className="grid gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-brand-dark">Send us a message</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <F name="name" label="Name" required />
              <F name="phone" label="Phone" type="tel" />
              <F name="email" label="Email" type="email" required />
              <F name="subject" label="Subject" />
            </div>
            <label className="text-sm font-medium">Message
              <textarea name="message" rows={5} required className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring" />
            </label>
            <button disabled={status === "loading"} className="inline-flex items-center justify-center rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-dark disabled:opacity-70">
              {status === "loading" ? "Sending…" : "Send message"}
            </button>
            {status === "success" && <p role="status" className="rounded-md bg-brand-soft px-3 py-2 text-sm text-brand-dark">Thank you — we'll get back to you shortly.</p>}
            {status === "error" && <p role="alert" className="rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive">{error}</p>}
          </form>
        </div>
      </Section>
    </>
  );
}

function F({ name, label, type = "text", required }: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <label className="text-sm font-medium">{label}{required && <span className="text-destructive"> *</span>}
      <input name={name} type={type} required={required} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring" />
    </label>
  );
}
