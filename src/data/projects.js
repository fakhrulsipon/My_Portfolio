// Project data for the Projects section. Screenshots live in public/.
// Categories render in this order, each as its own group (id becomes #<id>-projects).
// Add a project by adding an entry to its category's `projects` array.

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
];
