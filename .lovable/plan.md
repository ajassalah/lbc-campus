## London Business Campus — Build Plan

A modern, professional college site for LBC built on the project's TanStack Start + Tailwind v4 stack. All pages, components, and design intent from your spec are preserved; only framework-specific bits (routing, head, fonts, images) use TanStack equivalents.

### Design system

- **Palette**: primary deep navy `#1a2e5a`, accent gold `#f0a500`, white surfaces, slate text. Defined as semantic tokens in `src/styles.css` (`@theme inline` mapped to CSS vars on `:root`) so all components use `bg-primary`, `text-accent`, etc. — no hardcoded colors.
- **Type**: Inter (sans) via `<link>` in the root route; `--font-sans` token.
- **Motion**: Framer Motion for scroll/in-view fades, card hover lifts, animated stat counters.
- **UI primitives**: shadcn (Button, Dialog, DropdownMenu, Sheet, Select, Input, Textarea, Carousel, Toast). Lucide for icons.

### Routes (file → URL)

```
src/routes/
  __root.tsx                          shell, fonts, sitewide meta, Navbar+Footer, Toaster, BackToTop
  index.tsx                           /
  about.tsx                           /about            (layout: <Outlet/>)
  about.index.tsx                     /about
  about.why-lbc.tsx                   /about/why-lbc
  about.who-we-are.tsx                /about/who-we-are
  about.accreditation.tsx             /about/accreditation
  about.admission.tsx                 /about/admission
  about.recognition.tsx               /about/recognition
  about.assignment-learning.tsx       /about/assignment-learning
  courses.tsx                         /courses          (layout: <Outlet/>)
  courses.index.tsx                   /courses          (search + filter)
  courses.undergraduate.tsx           /courses/undergraduate
  courses.postgraduate.tsx            /courses/postgraduate
  courses.short-courses.tsx           /courses/short-courses
  fast-track.tsx                      /fast-track
  contact.tsx                         /contact
  faqs.tsx                            /faqs
  api/contact.ts                      POST endpoint (server route) for form
```

Every leaf route sets its own `head()` with unique title, description, og:title, og:description, og:url, and canonical. Root holds only sitewide defaults.

### Shared components (`src/components/`)

- `layout/Navbar.tsx` — top utility bar (phone, email, socials, Student Portal + Pay Online buttons), main bar with logo and links, About/Courses dropdowns (NavigationMenu on desktop, accordion in Sheet on mobile), sticky with scroll-based bg change, mobile hamburger via Sheet.
- `layout/Footer.tsx`
- `layout/BackToTop.tsx`
- `home/HeroSearch.tsx` — headline + course search input + category Select; routes to `/courses?q=…&category=…`.
- `home/CategoryCard.tsx`
- `home/WhyChooseUs.tsx`
- `home/StatsBar.tsx` — Framer Motion in-view animated counters.
- `home/TestimonialCarousel.tsx` — shadcn Carousel.
- `courses/CourseCard.tsx` — image, category badge, level pill, price, "Get Enrolled" CTA, hover lift.
- `courses/CourseFilters.tsx` — search input + category/level/price selects, client-side filter.
- `common/SectionHeader.tsx`

### Data (`src/data/courses.ts`)

12+ mock courses across Postgraduate, Undergraduate (Level 4/5/6), Short Courses, spread over all 10 categories. Fields: `id, title, slug, category, level, price ("Free" | number), image, awardingBody, description`. Images are AI-generated and imported from `src/assets/`.

### Imagery (AI-generated)

Generated up front and committed to `src/assets/`:
- 1 hero banner (LBC campus/students, navy + gold tone, 16:9)
- 10 category tiles (square, icon-forward photographic)
- 6 course cover images reused across the 12 courses
- 1 CTA/about banner

### Contact form (Lovable Cloud)

- Enable Lovable Cloud.
- Migration creates `public.contact_submissions` (id, name, email, phone, course_interest, message, created_at) with explicit GRANTs, RLS enabled, INSERT-only policy for `anon` + `authenticated` (no SELECT for public). Admin reads happen in dashboard later.
- `/contact` posts via a `createServerFn` that validates with Zod (trim, lengths, email format) and inserts using `supabaseAdmin` (loaded inside the handler).
- Success/error feedback via shadcn toast.

### Accessibility & SEO

- Semantic landmarks, one H1 per page, alt text on every image.
- JSON-LD: Organization on root, BreadcrumbList on deep routes, FAQPage on `/faqs`, Course schema on course pages.
- Lazy-loaded images, responsive viewport already in root.

### Build order

1. Enable Lovable Cloud + create `contact_submissions` migration.
2. Tailwind tokens, fonts, root layout (Navbar/Footer/BackToTop/Toaster), sitewide meta.
3. Generate hero + category + course images.
4. Courses data file + CourseCard/CategoryCard/SectionHeader.
5. Homepage with all 8 sections.
6. Courses index with client-side filtering; three course-category leaf pages.
7. About hub + 6 about subpages, Fast Track, FAQs (with accordion).
8. Contact page + server fn + insert.
9. Per-route `head()` metadata and JSON-LD pass.
10. Responsive QA in preview (mobile, tablet, desktop).

### Notes / deviations from the original brief

- Framework is TanStack Start, not Next.js — same UX, same URLs, same components. `next/image` → `<img loading="lazy">`; `next/font` → `<link>` in root; `generateMetadata` → route `head()`.
- "Pay Online" and "Student Portal" buttons link to placeholders (`#`) until you provide real destinations.
- Real LBC phone/email used in the top bar as given.
