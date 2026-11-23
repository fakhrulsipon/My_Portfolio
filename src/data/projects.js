// Project data for the Projects section. Screenshots live in public/.
// Categories render in this order, each as its own group (id becomes #<id>-projects).
// Add a project by adding an entry to its category's `projects` array.

export const PROJECT_CATEGORIES = [
  {
    id: "saas",
    label: "SaaS & E-commerce",
    blurb: "Full-scale platforms I designed, built and shipped end to end.",
    projects: [
      {
        name: "Sitebari",
        subtitle: "E-commerce Management Platform",
        tag: "E-commerce SaaS",
        description:
          "All-in-one e-commerce platform to launch online stores, manage products, inventory and orders, connect payments and couriers, and track sales from one dashboard.",
        tech: [
          "Next.js",
          "TypeScript",
          "Node.js",
          "NestJS",
          "PostgreSQL",
          "Prisma",
          "Tailwind CSS",
          "GSAP",
          "Docker",
          "AWS",
          "Nginx",
          "Redis",
          "CI/CD",
          "REST API",
          "Payment Gateway Integration",
        ],
        live: "https://sitebari.com/",
        image: "/Sitebari.png",
      },
      {
        name: "CodeClash",
        subtitle: "Competitive Programming Platform",
        tag: "EdTech Platform",
        description:
          "Competitive programming platform with real-time contests, live rankings and an in-browser code editor for solving problems.",
        tech: [
          "React.js",
          "TypeScript",
          "Node.js",
          "Express.js",
          "Tailwind CSS",
          "MongoDB",
          "Monaco Editor",
          "jwt",
          "Firebase Authentication",
        ],
        live: "https://code-clash-d9152.web.app/",
        image: "/download (1).png",
      },
      {
        name: "RideX",
        subtitle: "Ride Sharing Platform",
        tag: "Mobility Platform",
        description:
          "Ride-sharing platform that connects passengers with nearby rides through a smooth, animated, mobile-friendly booking experience.",
        tech: ["Next.js", "MongoDB", "JavaScript", "Express.js", "Node.js", "GSAP", "Tailwind CSS", "REST API"],
        live: "https://ridex-ride-sharing.vercel.app/",
        image: "/ridex.png",
      },
      {
        name: "Mailbari",
        subtitle: "Business Email & Collaboration Platform",
        tag: "Business Email SaaS",
        description:
          "Business email platform for custom-domain mailboxes, with centralized admin, security controls and easy account management.",
        tech: [
          "Next.js",
          "TypeScript",
          "Node.js",
          "NestJS",
          "PostgreSQL",
          "Prisma",
          "Tailwind CSS",
          "GSAP",
          "Docker",
          "AWS",
          "Nginx",
          "Redis",
          "CI/CD",
          "REST API",
          "Email Integration",
        ],
        live: "https://mailbari.com/",
        image: "/mailbari.png",
      },
      {
        name: "Gadget & Gear",
        subtitle: "Apple Authorized Reseller E-commerce Store",
        tag: "E-commerce · Bangladesh",
        description:
          "Online store for an Apple Authorized Reseller in Bangladesh, with fast product search, rich category browsing, EMI options and secure checkout.",
        tech: ["Next.js", "React", "Headless WordPress", "REST API"],
        live: "https://gadgetandgear.com/",
        image: "/gadgetandgear.png",
      },
      {
        name: "Beauty Booth",
        subtitle: "Beauty & Cosmetics E-commerce Platform",
        tag: "E-commerce · Bangladesh",
        description:
          "Beauty and cosmetics store with flash sales, brand and category browsing, smart product search and a smooth mobile-first checkout.",
        tech: ["Next.js", "React", "REST API"],
        live: "https://beautybooth.com.bd/",
        image: "/beautybooth.png",
      },
    ],
  },
];
