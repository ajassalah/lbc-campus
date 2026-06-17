import businessImg from "@/assets/course-business.jpg";
import itImg from "@/assets/course-it.jpg";
import healthImg from "@/assets/course-health.jpg";
import tourismImg from "@/assets/course-tourism.jpg";
import lawImg from "@/assets/course-law.jpg";
import engineeringImg from "@/assets/course-engineering.jpg";

export type CourseCategory =
  | "Health Care"
  | "Information Technology"
  | "Business Management"
  | "Tourism & Hospitality"
  | "Law"
  | "Engineering"
  | "Fashion & Textile"
  | "Logistics & Supply Chain"
  | "Human Resource Management"
  | "Accounting & Finance";

export type CourseGroup = "Postgraduate" | "Undergraduate" | "Short Courses" | "Fast Track";
export type CourseLevel = "Level 4" | "Level 5" | "Level 6" | "Level 7" | "Intermediate" | "Advanced";

export interface Course {
  id: string;
  slug: string;
  title: string;
  category: CourseCategory;
  group: CourseGroup;
  level: CourseLevel;
  price: "Free" | string;
  image: string;
  awardingBody: string;
  description: string;
  units?: { title: string; weeks: string }[];
}

export const categoryImages: Record<CourseCategory, string> = {
  "Health Care": healthImg,
  "Information Technology": itImg,
  "Business Management": businessImg,
  "Tourism & Hospitality": tourismImg,
  Law: lawImg,
  Engineering: engineeringImg,
  "Fashion & Textile": businessImg,
  "Logistics & Supply Chain": engineeringImg,
  "Human Resource Management": businessImg,
  "Accounting & Finance": businessImg,
};

export const courses: Course[] = [
  {
    id: "c01",
    slug: "mba-strategic-management",
    title: "MBA in Strategic Management",
    category: "Business Management",
    group: "Postgraduate",
    level: "Level 7",
    price: "LKR 495,000",
    image: businessImg,
    awardingBody: "CQHE, UK",
    description: "An accelerated UK-accredited MBA developing strategic thinkers and senior decision-makers.",
    units: [
      { title: "Strategic Leadership", weeks: "Weeks 1-3" },
      { title: "Strategic Human Resource Management", weeks: "Weeks 4-6" },
      { title: "Advanced Business Research Methods", weeks: "Weeks 7-9" },
      { title: "Strategic Financial Management", weeks: "Weeks 10-12" },
      { title: "Strategic Marketing", weeks: "Weeks 13-15" }
    ]
  },
  {
    id: "c02",
    slug: "msc-cybersecurity",
    title: "MSc in Cybersecurity",
    category: "Information Technology",
    group: "Postgraduate",
    level: "Level 7",
    price: "LKR 525,000",
    image: itImg,
    awardingBody: "LMQ, UK",
    description: "Advanced study of digital defence, secure architectures, governance and incident response.",
  },
  {
    id: "c03",
    slug: "bsc-software-engineering",
    title: "BSc (Hons) Software Engineering",
    category: "Information Technology",
    group: "Undergraduate",
    level: "Level 6",
    price: "LKR 325,000",
    image: itImg,
    awardingBody: "Pearson BTEC, UK",
    description: "Build production-grade software with modern stacks, agile practice and a capstone project.",
  },
  {
    id: "c04",
    slug: "ba-hons-business-management",
    title: "BA (Hons) Business Management",
    category: "Business Management",
    group: "Undergraduate",
    level: "Level 6",
    price: "LKR 295,000",
    image: businessImg,
    awardingBody: "CQHE, UK",
    description: "A career-ready degree covering leadership, marketing, finance, operations and analytics.",
    units: [
      { title: "Business Environment", weeks: "Semester 1" },
      { title: "Marketing Process and Planning", weeks: "Semester 1" },
      { title: "Human Resource Management", weeks: "Semester 2" },
      { title: "Leadership and Management", weeks: "Semester 2" },
      { title: "Accounting and Finance", weeks: "Semester 3" }
    ]
  },
  {
    id: "c05",
    slug: "diploma-nursing-care",
    title: "Diploma in Nursing & Patient Care",
    category: "Health Care",
    group: "Undergraduate",
    level: "Level 5",
    price: "LKR 185,000",
    image: healthImg,
    awardingBody: "TQUK, UK",
    description: "Clinical fundamentals, patient communication and ward placements with NHS-aligned standards.",
  },
  {
    id: "c06",
    slug: "diploma-tourism-hospitality",
    title: "Diploma in Tourism & Hospitality",
    category: "Tourism & Hospitality",
    group: "Undergraduate",
    level: "Level 4",
    price: "LKR 145,000",
    image: tourismImg,
    awardingBody: "CQHE, UK",
    description: "Hotel operations, guest experience and sustainable tourism in Sri Lanka's booming sector.",
  },
  {
    id: "c07",
    slug: "llb-hons-law",
    title: "LLB (Hons) Law",
    category: "Law",
    group: "Undergraduate",
    level: "Level 6",
    price: "LKR 365,000",
    image: lawImg,
    awardingBody: "University of London (Affiliate)",
    description: "Foundation, contract, tort, constitutional and international law, taught by LMQed solicitors.",
  },
  {
    id: "c08",
    slug: "diploma-mechanical-engineering",
    title: "Diploma in Mechanical Engineering",
    category: "Engineering",
    group: "Undergraduate",
    level: "Level 5",
    price: "LKR 215,000",
    image: engineeringImg,
    awardingBody: "Pearson BTEC, UK",
    description: "Thermodynamics, CAD, materials and a workshop module with industry-grade equipment.",
  },
  {
    id: "c09",
    slug: "diploma-logistics-scm",
    title: "Diploma in Logistics & Supply Chain",
    category: "Logistics & Supply Chain",
    group: "Undergraduate",
    level: "Level 4",
    price: "LKR 165,000",
    image: engineeringImg,
    awardingBody: "CILT, UK",
    description: "Procurement, warehousing, freight and lean operations for global supply chains.",
  },
  {
    id: "c10",
    slug: "diploma-hrm",
    title: "Diploma in Human Resource Management",
    category: "Human Resource Management",
    group: "Undergraduate",
    level: "Level 5",
    price: "LKR 175,000",
    image: businessImg,
    awardingBody: "CIPD-aligned, CQHE",
    description: "Talent acquisition, performance, employment law and people analytics.",
  },
  {
    id: "c11",
    slug: "diploma-accounting-finance",
    title: "Diploma in Accounting & Finance",
    category: "Accounting & Finance",
    group: "Undergraduate",
    level: "Level 4",
    price: "LKR 155,000",
    image: businessImg,
    awardingBody: "ACCA-aligned, CQHE",
    description: "Financial reporting, management accounting, tax and audit basics with software practice.",
  },
  {
    id: "c12",
    slug: "certificate-fashion-textile",
    title: "Certificate in Fashion & Textile Design",
    category: "Fashion & Textile",
    group: "Short Courses",
    level: "Intermediate",
    price: "Free",
    image: businessImg,
    awardingBody: "LBC Academy",
    description: "Sketching, pattern making, fabric science and a capsule collection for your portfolio.",
  },
  {
    id: "c13",
    slug: "short-digital-marketing",
    title: "Digital Marketing Essentials",
    category: "Business Management",
    group: "Short Courses",
    level: "Intermediate",
    price: "LKR 35,000",
    image: businessImg,
    awardingBody: "LBC Academy",
    description: "SEO, paid media, content and analytics with a live campaign project.",
    units: [
      { title: "Introduction to Digital Marketing", weeks: "Week 1" },
      { title: "Search Engine Optimization (SEO)", weeks: "Week 2" },
      { title: "Social Media Marketing", weeks: "Week 3" },
      { title: "Pay-Per-Click (PPC) Advertising", weeks: "Week 4" },
      { title: "Analytics and Strategy", weeks: "Week 5" }
    ]
  },
  {
    id: "c14",
    slug: "short-python-data",
    title: "Python for Data Analytics",
    category: "Information Technology",
    group: "Short Courses",
    level: "Advanced",
    price: "LKR 45,000",
    image: itImg,
    awardingBody: "LBC Academy",
    description: "Pandas, visualisation and machine-learning basics for working professionals.",
  },
  {
    id: "c15",
    slug: "fast-track-business",
    title: "Fast Track Top-Up: BA Business",
    category: "Business Management",
    group: "Fast Track",
    level: "Level 6",
    price: "LKR 245,000",
    image: businessImg,
    awardingBody: "CQHE, UK",
    description: "Complete your UK Bachelor's degree in 9 months with prior diploma credit.",
  },
];

export const categories: CourseCategory[] = [
  "Health Care",
  "Information Technology",
  "Business Management",
  "Tourism & Hospitality",
  "Law",
  "Engineering",
  "Fashion & Textile",
  "Logistics & Supply Chain",
  "Human Resource Management",
  "Accounting & Finance",
];
