export const PROJECTS = [
  {
    id: "nomad-ai",
    name: "NomadAI",
    title: "NomadAI - Agentic AI Travel Planner",
    image: "/nomad_ai_landing.png",
    tagline: "Your personalized, context-aware AI travel planning assistant.",
    desc: "NomadAI is an Agentic AI-driven travel planning web application that dynamically builds, adapts, and customizes travel itineraries in real time based on live context, weather, user preferences, and budgets.",
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Agentic AI", "Gemini API", "Framer Motion", "Lucide Icons"],
    live: "https://assignment-04-client.vercel.app",
    github: "https://github.com/shakibn2004/Assignment-04-client",
    color: "#f4f4f5",
    accentGlow: "rgba(255, 255, 255, 0.08)",
    status: "Live",
    challenges: [
      "Orchestrating multi-step AI agent workflows to dynamically construct structured travel itineraries with low latency.",
      "Handling real-time flight/reservation adjustments seamlessly when schedule delays or weather changes occur.",
      "Designing a modern glassmorphism UI layout with high contrast and accessibility across desktop and mobile devices."
    ],
    improvements: [
      "Direct 1-click booking integration with live airline and hotel reservation APIs (Skyscanner / Amadeus).",
      "Offline travel mode with downloadable PWA and interactive PDF export for travelers without active internet.",
      "Multi-traveler real-time collaborative trip planning allowing group members to co-edit and vote on destinations."
    ]
  },
  {
    id: "sparklift",
    name: "SparkLift",
    title: "SparkLift - Premium Luxury Crowdfunding Platform",
    image: "/sparklift_landing.png",
    tagline: "The next generation of luxury crowdfunding and project realization.",
    desc: "SparkLift is a premium luxury crowdfunding platform designed for creators and visionaries to launch campaigns, raise capital, showcase high-impact innovations, and build backer communities.",
    tech: ["Next.js", "React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Firebase Auth", "Lucide Icons"],
    live: "https://assainment-11-client.vercel.app",
    github: "https://github.com/shakibn2004/Assainment-11-client",
    color: "#e4e4e7",
    accentGlow: "rgba(255, 255, 255, 0.08)",
    status: "Live",
    challenges: [
      "Designing a sleek, high-end luxury dark interface while keeping initial page load fast and responsive.",
      "Implementing multi-tiered pledge tracking logic with real-time campaign progress updates and strict data validation.",
      "Managing complex client-side state across dynamic search, campaign category filters, and real-time funding progress bars."
    ],
    improvements: [
      "Integrating smart contract milestone releases for enhanced backer transparency and fund security.",
      "Building an AI-assisted campaign builder tool to help creators generate engaging proposal copy and campaign visuals.",
      "Enabling live video streaming and interactive Q&A webinars for project creators and potential backers."
    ]
  },
  {
    id: "bloodbridge",
    name: "BloodBridge",
    title: "BloodBridge - Emergency Blood Donation Platform",
    image: "/bloodbridge_landing.png",
    tagline: "Connecting blood donors with recipients in real time across Bangladesh.",
    desc: "BloodBridge is a full-stack emergency blood donation platform bridging the gap between urgent blood recipients and volunteer donors across Bangladesh with district-level donor searching and urgent request management.",
    tech: ["Next.js", "React", "Node.js", "Express", "MongoDB", "Stripe", "Tailwind CSS", "Lucide Icons"],
    live: "https://assainment-10-client.vercel.app",
    github: "https://github.com/shakibn2004/Assainment-10-client",
    color: "#d4d4d8",
    accentGlow: "rgba(255, 255, 255, 0.08)",
    status: "Live",
    challenges: [
      "Creating an efficient MongoDB search indexing schema to quickly filter donors by blood group, division, and district.",
      "Protecting donor privacy while ensuring emergency contact details are securely accessible to verified requestors.",
      "Seamlessly integrating Stripe payment processing for platform funding and managing real-time status updates on urgent requests."
    ],
    improvements: [
      "Automated SMS and Push notification alerts sending emergency broadcasts to eligible donors within a 10km radius.",
      "Interactive Google Maps API integration to display nearest blood banks and real-time donor distance.",
      "In-app encrypted real-time chat between requestors and volunteer donors."
    ]
  },
  {
    id: "learnhub",
    name: "LearnHub",
    title: "LearnHub - Enterprise Project-Based LMS Platform",
    image: "/learnhub_landing.png",
    tagline: "Full-stack engineering education with Strapi v5 headless CMS and multi-role access.",
    desc: "LearnHub is an enterprise-grade Learning Management System built for developers. It features project-based curriculum paths, interactive auto-graded quizzes, and multi-role portals (Admin, Instructor, Student, Content Manager) powered by Next.js 14, Strapi v5 headless CMS, and PostgreSQL.",
    tech: ["Next.js 14", "React", "Strapi v5", "PostgreSQL", "Tailwind CSS", "Framer Motion", "Docker", "JWT Auth"],
    live: "https://learning-management-nine-omega.vercel.app",
    github: "https://github.com/shakibn2004",
    color: "#06b6d4",
    accentGlow: "rgba(6, 182, 212, 0.15)",
    status: "Live",
    challenges: [
      "Architecting a secure role-based access control (RBAC) layer supporting 4 discrete user roles across Next.js 14 App Router and Strapi v5.",
      "Structuring efficient PostgreSQL relational schemas and indexed queries for course hierarchies, modules, lessons, and auto-graded quizzes.",
      "Designing an ultra-responsive, WCAG AAA compliant glassmorphism UI with real-time student progress tracking and instant quiz evaluations."
    ],
    improvements: [
      "Live coding playground sandbox allowing students to compile and test code snippets directly in the browser.",
      "AI-powered personalized learning mentor to provide contextual feedback and hints on quiz mistakes.",
      "Real-time peer discussion channels with WebSockets and peer review submission workflows."
    ]
  },
  {
    id: "pizzadash",
    name: "PizzaDash",
    title: "PizzaDash - Gourmet Wood-Fired Pizza Delivery",
    image: "/pizzadash_landing.png",
    tagline: "Handcrafted artisanal sourdough pizza ordering with interactive 3D builder and AI assistant.",
    desc: "PizzaDash is a modern gourmet pizza delivery web application featuring an interactive 5-step custom pizza builder lab with live calorie and price estimation, an integrated 'Ask AI' assistant for meal recommendations, rotational 360° oven showcases, and end-to-end order tracking.",
    tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "AI Assistant", "Lucide Icons", "Cart Engine", "Vercel"],
    live: "https://pizzadash-one.vercel.app",
    github: "https://github.com/shakibn2004",
    color: "#ff6b35",
    accentGlow: "rgba(255, 107, 53, 0.18)",
    status: "Live",
    challenges: [
      "Building a high-performance interactive 5-step Custom Pizza Builder with dynamic price, weight, and calorie calculations across multi-crust and topping combinations.",
      "Crafting fluid micro-animations for rotational 360° oven showcases and ingredient physics without sacrificing 60 FPS mobile performance.",
      "Integrating a conversational 'Ask AI' assistant seamlessly into search and checkout flows for contextual meal and allergy recommendations."
    ],
    improvements: [
      "Real-time GPS delivery rider tracking on interactive vector maps with live ETA countdowns.",
      "Augmented Reality (AR) 3D pizza preview directly on mobile browser before placing an order.",
      "Group split-bill ordering system enabling multiple users to customize slices and checkout together."
    ]
  }
];
