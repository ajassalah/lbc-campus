import { useEffect, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, Menu, Phone, Twitter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { courses } from "@/data/courses";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const aboutLinks = [
  { to: "/about/why-lbc", label: "Why Choose LBC?" },
  { to: "/about/who-we-are", label: "Who Are We?" },
  { to: "/about/accreditation", label: "Accreditation" },
  { to: "/about/admission", label: "Admission Procedure" },
  { to: "/about/recognition", label: "Recognition" },
  { to: "/about/assignment-learning", label: "Assignment Based Learning" },
] as const;

const coursesLinks = [
  { to: "/courses", label: "All Courses" },
  { to: "/courses/undergraduate", label: "Undergraduate" },
  { to: "/courses/postgraduate", label: "Postgraduate" },
  { to: "/courses/short-courses", label: "Short Courses" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const filteredCourses = searchQuery.trim()
    ? courses.filter(
        (c) =>
          c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          c.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Top utility bar */}
      <div className="hidden bg-primary text-primary-foreground md:block">
        <div className="container-page flex h-10 items-center justify-between text-xs">
          <div className="flex items-center gap-6">
            <a href="tel:+94112589202" className="inline-flex items-center gap-2 hover:text-accent">
              <Phone className="h-3.5 w-3.5" /> +94 112 589 202
            </a>
            <a href="mailto:info@lbc.lk" className="inline-flex items-center gap-2 hover:text-accent">
              <Mail className="h-3.5 w-3.5" /> info@lbc.lk
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Facebook" className="hover:text-accent"><Facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-accent"><Twitter className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-accent"><Instagram className="h-4 w-4" /></a>
            <span className="mx-2 h-4 w-px bg-primary-foreground/20" />
            <a
              href="https://student.lbc.edu.lk/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-accent"
            >
              Student Portal
            </a>
            <a
              href="https://myfees.lk/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-accent px-3 py-1 font-semibold text-accent-foreground hover:bg-accent/90"
            >
              Pay Online
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={cn(
          "border-b border-border/60 bg-background/95 backdrop-blur transition-shadow",
          scrolled && "shadow-sm",
        )}
      >
        <div className="container-page flex h-16 items-center justify-between md:h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src="/images/lbc-logo-new.png" alt="LBC crest" className="h-20 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 object-contain" />
            <div className="leading-tight">
              <div className="font-display text-base font-bold text-primary sm:text-lg md:text-xl">
                London Business Campus
              </div>
              <div className="hidden text-[10px] uppercase tracking-widest text-muted-foreground md:block">
                Recognize yourself
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <Link
                  to="/"
                  className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary"
                  activeProps={{ className: "text-primary" }}
                  activeOptions={{ exact: true }}
                >
                  Home
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-sm font-medium">Courses</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[240px] gap-1 p-3">
                    {coursesLinks.map((l) => (
                      <li key={l.to}>
                        <Link
                          to={l.to}
                          className="block rounded-md px-3 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary"
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  to="/fast-track"
                  className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary"
                  activeProps={{ className: "text-primary" }}
                >
                  Fast Track
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-sm font-medium">About Us</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[280px] gap-1 p-3">
                    {aboutLinks.map((l) => (
                      <li key={l.to}>
                        <Link
                          to={l.to}
                          className="block rounded-md px-3 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary"
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  to="/contact"
                  className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary"
                  activeProps={{ className: "text-primary" }}
                >
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden items-center gap-2 lg:flex">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-accent text-primary hover:bg-accent hover:text-accent-foreground"
            >
              <a href="https://verification.lbc.lk/" target="_blank" rel="noopener noreferrer">
                Verification
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowSearch(!showSearch)}
              aria-label="Search courses"
              className="text-foreground hover:text-primary"
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-1 lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowSearch(!showSearch)}
              aria-label="Search courses"
              className="text-foreground hover:text-primary"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
            <SheetContent side="right" className="w-[88%] max-w-sm">
              <SheetHeader>
                <SheetTitle className="font-display text-primary">London Business Campus</SheetTitle>
              </SheetHeader>
              <nav className="mt-4 flex flex-col gap-1 px-4 pb-6">
                <MobileLink to="/" onClick={() => setOpen(false)}>Home</MobileLink>
                <Accordion type="single" collapsible>
                  <AccordionItem value="courses" className="border-b-0">
                    <AccordionTrigger className="px-2 py-2 text-sm font-medium hover:no-underline">Courses</AccordionTrigger>
                    <AccordionContent>
                      <div className="ml-4 flex flex-col border-l border-border/50 pl-2">
                        {coursesLinks.map((l) => (
                          <MobileLink key={l.to} to={l.to} onClick={() => setOpen(false)}>{l.label}</MobileLink>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <MobileLink to="/fast-track" onClick={() => setOpen(false)}>Fast Track</MobileLink>
                <Accordion type="single" collapsible>
                  <AccordionItem value="about" className="border-b-0">
                    <AccordionTrigger className="px-2 py-2 text-sm font-medium hover:no-underline">About Us</AccordionTrigger>
                    <AccordionContent>
                      <div className="ml-4 flex flex-col border-l border-border/50 pl-2">
                        {aboutLinks.map((l) => (
                          <MobileLink key={l.to} to={l.to} onClick={() => setOpen(false)}>{l.label}</MobileLink>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <MobileLink to="/contact" onClick={() => setOpen(false)}>Contact</MobileLink>
                <div className="mt-4 flex flex-col gap-2">
                  <Button asChild variant="outline">
                    <a href="https://verification.lbc.lk/" target="_blank" rel="noopener noreferrer">
                      Verification
                    </a>
                  </Button>
                  <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link to="/contact" onClick={() => setOpen(false)}>Apply Now</Link>
                  </Button>
                </div>
                <div className="mt-6 space-y-2 border-t pt-4 text-sm text-muted-foreground">
                  <a href="tel:+94112589202" className="flex items-center gap-2"><Phone className="h-4 w-4" /> +94 112 589 202</a>
                  <a href="mailto:info@lbc.lk" className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@lbc.lk</a>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
          </div>
        </div>
      </div>
      {/* Search Bar Collapsible */}
      {showSearch && (
        <div
          onMouseLeave={() => {
            setShowSearch(false);
            setSearchQuery("");
          }}
          className="border-b border-border/60 bg-background/95 py-4 shadow-inner animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="container-page max-w-2xl relative">
            <form onSubmit={(e) => e.preventDefault()} className="relative flex flex-col gap-2">
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search courses, e.g. MBA, Nursing..."
                  className="h-10 pl-9 text-sm focus-visible:ring-1 focus-visible:ring-primary bg-background"
                  autoFocus
                />
              </div>

              {/* Live search results */}
              {searchQuery.trim() && (
                <div className="absolute top-full left-0 z-50 mt-1 max-h-60 w-full overflow-y-auto rounded-md border border-border bg-popover p-1 shadow-lg">
                  {filteredCourses.length > 0 ? (
                    filteredCourses.map((course) => (
                      <button
                        key={course.id}
                        type="button"
                        onClick={() => {
                          navigate({
                            to: "/courses/$courseId",
                            params: { courseId: course.slug },
                          });
                          setShowSearch(false);
                          setSearchQuery("");
                        }}
                        className="flex w-full items-center justify-between rounded-sm px-3 py-2 text-left text-sm hover:bg-accent hover:text-accent-foreground cursor-pointer transition-colors"
                      >
                        <div>
                          <div className="font-semibold text-foreground">{course.title}</div>
                          <div className="text-xs text-muted-foreground">
                            {course.category} · {course.level}
                          </div>
                        </div>
                        <div className="text-xs font-bold text-primary ml-2 shrink-0">{course.price}</div>
                      </button>
                    ))
                  ) : (
                    <div className="px-3 py-2 text-sm text-muted-foreground">
                      No courses found matching "{searchQuery}"
                    </div>
                  )}
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </header>
  );
}

function MobileLink({
  to,
  children,
  onClick,
}: {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="rounded-md px-2 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary"
      activeProps={{ className: "text-primary font-semibold" }}
    >
      {children}
    </Link>
  );
}