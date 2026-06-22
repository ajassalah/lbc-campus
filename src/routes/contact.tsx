import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PageHero } from "@/components/common/PageHero";
import { submitContact } from "@/lib/contact.functions";
import { courses, categories } from "@/data/courses";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact LBC — London Business Campus" },
      { name: "description", content: "Get in touch with London Business Campus. Visit our Colombo campus, call admissions or send us a message — we usually reply within one business day." },
      { property: "og:title", content: "Contact London Business Campus" },
      { property: "og:description", content: "Talk to LBC admissions about programs, fees, intakes and Fast Track eligibility." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Page,
});

function Page() {
  const submit = useServerFn(submitContact);
  const [pending, setPending] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const payload = {
      name: String(f.get("name") ?? ""),
      email: String(f.get("email") ?? ""),
      phone: String(f.get("phone") ?? ""),
      courseInterest: String(f.get("courseInterest") ?? ""),
      message: String(f.get("message") ?? ""),
    };
    setPending(true);
    try {
      await submit({ data: payload });
      toast.success("Thanks! An admissions advisor will reply within one business day.");
      e.currentTarget.reset();
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Something went wrong.";
      toast.error(msg);
    } finally {
      setPending(false);
    }
  }

  return (
    <>
      <PageHero eyebrow="Contact" title="Talk to admissions" subtitle="We usually reply within one business day. Visit our Colombo campus or message us below." />
      <section className="container-page grid gap-10 py-12 md:py-16 lg:grid-cols-[1fr_380px]">
        <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-6 md:p-8">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="name">Full name *</Label>
              <Input id="name" name="name" required maxLength={120} className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input id="email" name="email" type="email" required maxLength={200} className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" name="phone" maxLength={40} className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="courseCategory">Category of interest</Label>
              <Select onValueChange={setSelectedCategory} value={selectedCategory}>
                <SelectTrigger id="courseCategory" className="mt-1.5"><SelectValue placeholder="Choose a category" /></SelectTrigger>
                <SelectContent>
                  {categories.map((c) => (
                    <SelectItem key={c} value={c}>{c}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {selectedCategory && (
              <div>
                <Label htmlFor="courseInterest">Select your Course</Label>
                <Select name="courseInterest">
                  <SelectTrigger id="courseInterest" className="mt-1.5"><SelectValue placeholder="Choose a course" /></SelectTrigger>
                  <SelectContent className="w-[var(--radix-select-trigger-width)] [&_*]:whitespace-normal">
                    {courses.filter(c => c.category === selectedCategory).map((c) => (
                      <SelectItem key={c.id} value={c.title}>{c.title}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>
          <div className="mt-4">
            <Label htmlFor="message">Message *</Label>
            <Textarea id="message" name="message" required maxLength={4000} rows={5} className="mt-1.5" />
          </div>
          <Button
            type="submit"
            disabled={pending}
            size="lg"
            className="mt-6 w-full bg-accent text-accent-foreground hover:bg-accent/90 md:w-auto"
          >
            {pending ? "Sending…" : "Send message"}
          </Button>
        </form>

        <aside className="space-y-4">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-semibold text-primary">Visit our campus</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> No. 16, Beltona Lane, Colombo 04, Sri Lanka</li>
              <li><a href="tel:+94112589202" className="flex items-center gap-2 text-foreground hover:text-primary"><Phone className="h-4 w-4 text-accent" /> +94 112 589 202</a></li>
              <li><a href="mailto:info@lbc.lk" className="flex items-center gap-2 text-foreground hover:text-primary"><Mail className="h-4 w-4 text-accent" /> info@lbc.lk</a></li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-primary p-6 text-primary-foreground">
            <h2 className="font-semibold text-accent">Office hours</h2>
            <p className="mt-3 text-sm text-primary-foreground/85">
              Monday – Friday: 8:30 – 18:00<br />
              Saturday: 9:00 – 14:00<br />
              Sunday: Closed
            </p>
          </div>
        </aside>
      </section>
    </>
  );
}
