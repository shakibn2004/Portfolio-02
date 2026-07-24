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
    color: "#10b981",
    accentGlow: "rgba(16, 185, 129, 0.25)",
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
    color: "#3b82f6",
    accentGlow: "rgba(59, 130, 246, 0.25)",
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
    color: "#e11d48",
    accentGlow: "rgba(225, 29, 72, 0.25)",
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
  }
];
