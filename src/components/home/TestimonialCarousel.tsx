import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Dilini Perera",
    course: "MBA in Strategic Management",
    quote:
      "LBC let me complete my UK MBA while running my business. The lecturers are world-class and the schedule actually worked for a working mother.",
  },
  {
    name: "Ashan Fernando",
    course: "BSc (Hons) Software Engineering",
    quote:
      "The hands-on projects pushed me far beyond textbooks. I had a job offer two months before I finished my final year.",
  },
  {
    name: "Nimasha Silva",
    course: "Diploma in Nursing & Patient Care",
    quote:
      "Compassionate teaching, real placements and a UK qualification — LBC opened doors I didn't think were possible from Sri Lanka.",
  },
  {
    name: "Ravindu Jayasinghe",
    course: "LLB (Hons) Law",
    quote:
      "The lecturers are practising lawyers. You learn the law and how it actually moves in a courtroom.",
  },
];

export function TestimonialCarousel() {
  return (
    <Carousel opts={{ align: "start", loop: true }} className="w-full">
      <CarouselContent>
        {testimonials.map((t) => (
          <CarouselItem key={t.name} className="md:basis-1/2 lg:basis-1/3">
            <div className="h-full rounded-2xl border border-border bg-card p-7">
              <Quote className="h-7 w-7 text-accent" />
              <p className="mt-4 text-sm leading-relaxed text-foreground">"{t.quote}"</p>
              <div className="mt-5 border-t pt-4">
                <div className="font-semibold text-primary">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.course}</div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="mt-6 flex justify-center gap-2">
        <CarouselPrevious className="static translate-y-0" />
        <CarouselNext className="static translate-y-0" />
      </div>
    </Carousel>
  );
}