// Project data for the Projects section. Screenshots live in public/.
// Categories render in this order, each as its own group (ids become #saas-projects,
// #plumbing-projects). Add a project by adding an entry to its category's `projects` array.

export const PROJECT_CATEGORIES = [
  {
    id: "saas",
    label: "SaaS Products",
    blurb: "Full-scale platforms I designed, built and shipped end to end.",
    projects: [
      {
        name: "Sitebari",
        subtitle: "E-commerce Management Platform",
        tag: "E-commerce SaaS",
        description:
          "Sitebari is an e-commerce management platform that helps businesses create and manage online stores, organize products and inventory, process orders, integrate payment gateways and courier services, and monitor sales through an analytics dashboard. It streamlines business operations with storefront customization, marketing tools, and efficient order management workflows.",
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
          "CodeClash is a competitive programming platform where users can solve coding problems, participate in real-time contests, track rankings, and improve their skills through an interactive coding environment.",
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
          "RideX is a ride-sharing platform designed to simplify urban transportation by connecting passengers with convenient ride options. It features an interactive user interface, smooth animations, and engaging visual elements to enhance the user experience. Built with a focus on responsive design and intuitive navigation, the platform provides an engaging experience for exploring ride options and booking transportation.",
        tech: ["Next.js", "MongoDB", "JavaScript", "Express.js", "Node.js", "GSAP", "Tailwind CSS", "REST API"],
        live: "https://ridex-ride-sharing.vercel.app/",
        image: "/ridex.png",
      },
      {
        name: "Mailbari",
        subtitle: "Business Email & Collaboration Platform",
        tag: "Business Email SaaS",
        description:
          "Mailbari is a business email platform that enables organizations to manage professional email accounts using custom domains. It provides email management, centralized administration, and security controls to support reliable business communication. The platform is designed to simplify email operations and improve productivity through efficient account and resource management.",
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
    ],
  },
  {
    id: "plumbing",
    label: "Plumbing Company Websites",
    blurb: "Lead-generating websites for plumbing companies in the USA, Canada and the UK.",
    projects: [
      {
        name: "Elizabeth Plumbing Pros",
        subtitle: "Local Plumbing Lead Platform",
        tag: "Elizabeth, NJ · USA",
        description:
          "A fast, mobile-first plumbing referral website for Elizabeth, New Jersey and Union County. Statically generated pages load instantly, every screen leads to one clear action — call now — and dedicated service and problem pages are built to rank in local search.",
        tech: ["Next.js 16", "TypeScript", "Tailwind CSS", "Turbopack"],
        live: "https://elizabethplumbingpros.com/",
        image: "/1.png",
      },
      {
        name: "18 Plumbing",
        subtitle: "24/7 Plumbing Website for Toronto & GTA",
        tag: "Toronto · Canada",
        description:
          "A modern, trust-first website for a licensed Toronto plumbing company. A bold navy hero, a live Google review card and one-tap call, text and quote buttons turn visitors into bookings, while a Supabase backend securely handles customer accounts and data.",
        tech: ["Next.js", "TypeScript", "Supabase", "Vercel"],
        live: "https://www.18plumbing.ca/",
        image: "/2.png",
      },
      {
        name: "Plumb-All",
        subtitle: "Plumbing & Septic Website for Atlanta, GA",
        tag: "Atlanta, GA · USA",
        description:
          "A conversion-focused website for a family plumbing and septic company serving Jonesboro and south Atlanta since 2003. Service-area pages, real customer reviews and industry credentials build instant trust, and Jobber Client Hub integration lets customers manage their jobs online.",
        tech: ["Next.js", "React", "Jobber Client Hub", "Local SEO"],
        live: "https://plumb-all.com/",
        image: "/3.png",
      },
      {
        name: "AAA Plumbing & Heating",
        subtitle: "Gas Safe Plumber Website, UK",
        tag: "Berkshire · UK",
        description:
          "A high-performance website for a Gas Safe registered plumbing and heating company in Berkshire and Middlesex. Programmatic SEO generates dedicated service and local-guide pages, emergency boiler repair is one tap away, and a Supabase dashboard tracks visitor activity.",
        tech: ["Next.js", "Tailwind CSS", "Supabase", "Programmatic SEO"],
        live: "https://aaaplumbingandheating.co.uk/",
        image: "/4.png",
      },
      {
        name: "Urgent Plumbing & Drainage",
        subtitle: "Cambridge Plumber Website",
        tag: "Cambridge · UK",
        description:
          "A clean, fast website for a plumbing and drainage business serving Cambridge and surrounding towns. An enquiry form sits right in the hero, every service and town has its own page, and all content lives in typed data files for effortless updates.",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
        live: "https://urgentplumbing.uk/",
        image: "/5.png",
      },
      {
        name: "Miracle Man Plumbing",
        subtitle: "Prescott Valley Plumber Website",
        tag: "Prescott Valley, AZ · USA",
        description:
          "A modern, responsive website for a licensed plumbing company serving Prescott Valley, Arizona since 2005. Clear service pages, emergency contact paths and a validated contact form with instant email delivery turn local searches into booked jobs.",
        tech: ["Next.js 15", "TypeScript", "shadcn/ui", "Resend"],
        live: "https://www.miraclemanplumbing.net/",
        image: "/6.png",
      },
    ],
  },
];
