import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";

const quickLinks = [
  { to: "/about", label: "About Us" },
  { to: "/about/who-we-are", label: "Overview" },
  { to: "/courses", label: "Courses" },
  { to: "/faqs", label: "FAQs" },
] as const;

const programLinks = [
  { to: "/courses/postgraduate", label: "Postgraduate" },
  { to: "/courses/undergraduate", label: "Undergraduate" },
  { to: "/courses/short-courses", label: "Short Courses" },
  { to: "/about/accreditation", label: "Accreditation" },
  { to: "/about/admission", label: "Admission" },
] as const;

export function Footer() {
  return (
    <footer className="mt-20 bg-primary text-primary-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src="/images/New LBC Logo JPG-01.jpg.jpeg" alt="LBC crest" className="h-12 w-12 rounded-sm" />
            <div className="font-display text-lg font-bold">London Business Campus</div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/75">
            A UK-accredited Sri Lankan higher education institution committed to making world-class
            qualifications accessible, flexible and affordable.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a href="#" aria-label="Facebook" className="rounded-full bg-white/10 p-2 hover:bg-accent hover:text-accent-foreground"><Facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="Twitter" className="rounded-full bg-white/10 p-2 hover:bg-accent hover:text-accent-foreground"><Twitter className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="rounded-full bg-white/10 p-2 hover:bg-accent hover:text-accent-foreground"><Instagram className="h-4 w-4" /></a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-primary-foreground/80 hover:text-accent">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">Programs</h3>
          <ul className="space-y-2 text-sm">
            {programLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-primary-foreground/80 hover:text-accent">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">Contact</h3>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>No. 49, Galle Road, Colombo 03, Sri Lanka</span>
            </li>
            <li>
              <a href="tel:+94112589202" className="flex items-center gap-2 hover:text-accent">
                <Phone className="h-4 w-4 text-accent" /> +94 112 589 202
              </a>
            </li>
            <li>
              <a href="mailto:info@lbc.lk" className="flex items-center gap-2 hover:text-accent">
                <Mail className="h-4 w-4 text-accent" /> info@lbc.lk
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-4 py-5 text-xs text-primary-foreground/70 sm:flex-row">
          <span className="sm:flex-1">© {new Date().getFullYear()} London Business Campus. All rights reserved.</span>
          <span className="sm:flex-1 sm:text-center">Powered by <a href="https://levelweb.co.uk" target="_blank" rel="noopener noreferrer" className="hover:text-accent">Levelweb.co.uk</a></span>
          <span className="sm:flex-1 sm:text-right">Recognize yourself with LBC.</span>
        </div>
      </div>
    </footer>
  );
}