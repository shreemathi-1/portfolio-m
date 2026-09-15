// ─────────────────────────────────────────────────────────────
// All portfolio content lives in this one file.
// Replace the sample text and image paths with your own —
// no need to touch any component code.
// Images referenced as "/assets/..." should be placed in /public/assets/
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Ananya Rao",
  role: "Software Developer — Fresher",
  // Shown as the dot-separated line above the name in the hero.
  roles: ["Software Developer", "Full-Stack Enthusiast", "Web Developer"],
  tagline:
    "I build clean, functional web applications and back every claim on this page with a screenshot, a certificate, or a working link.",
  location: "Bengaluru, India",
  photo: "/assets/placeholders/profile-circle-placeholder.svg",
  resumeFile: "/assets/Ananya_Rao_Resume.pdf",
  about: [
    "I'm a final-year Computer Science graduate who enjoys turning ideas into working products — from the database schema to the pixel on screen.",
    "Over the last two years I've shipped 15+ personal and academic projects, completed two internships, and picked up a working comfort across the MERN stack, Python, and cloud basics.",
    "I care about writing code that's easy to read a year later, and about proving what I say I can do — every project, skill and internship below links to real evidence.",
  ],
  socials: {
    github: "https://github.com/ananyarao",
    leetcode: "https://leetcode.com/ananyarao",
    linkedin: "https://linkedin.com/in/ananyarao",
    email: "ananya.rao@example.com",
    phone: "+91 90000 00000",
  },
};

// The chip row under "Core Expertise" in the hero. "tone" picks the dot colour
// from the theme tokens — accent | ink | highlight | muted.
export const coreExpertise = [
  { name: "React", tone: "accent" },
  { name: "JavaScript", tone: "ink" },
  { name: "Node.js", tone: "accent" },
  { name: "Python", tone: "highlight" },
  { name: "MongoDB", tone: "accent" },
  { name: "Tailwind CSS", tone: "ink" },
  { name: "Git & GitHub", tone: "muted" },
  { name: "REST APIs", tone: "highlight" },
];

export const stats = [
  { value: "15+", label: "Projects shipped" },
  { value: "2+", label: "Years learning" },
  { value: "100%", label: "Responsive designs" },
  { value: "∞", label: "Learning" },
];

// Skills grouped by category. Each skill can optionally carry "proof" —
// a screenshot, certificate or short clip that backs up the claim.
export const skillGroups = [
  {
    category: "Languages",
    skills: [
      { name: "JavaScript", level: 85, proof: null },
      { name: "Python", level: 80, proof: null },
      { name: "Java", level: 65, proof: null },
      { name: "SQL", level: 75, proof: null },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 85, proof: "/assets/placeholders/certificate-placeholder.svg" },
      { name: "HTML / CSS", level: 90, proof: null },
      { name: "Tailwind CSS", level: 80, proof: null },
      { name: "Redux", level: 70, proof: null },
    ],
  },
  {
    category: "Backend & Data",
    skills: [
      { name: "Node.js / Express", level: 78, proof: null },
      { name: "MongoDB", level: 75, proof: null },
      { name: "REST APIs", level: 82, proof: null },
      { name: "PostgreSQL", level: 60, proof: null },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git & GitHub", level: 88, proof: null },
      { name: "Docker (basics)", level: 55, proof: null },
      { name: "AWS (basics)", level: 50, proof: "/assets/placeholders/certificate-placeholder.svg" },
      { name: "Figma", level: 65, proof: null },
    ],
  },
];

// Each project can include a gallery of screenshots and/or a demo video.
export const projects = [
  {
    id: "campus-connect",
    name: "CampusConnect",
    tagline: "A student club & event management platform used by 6 campus clubs.",
    description:
      "Full-stack MERN app where club leads post events, manage RSVPs and share resources. Includes role-based auth, email reminders, and an admin dashboard with attendance analytics.",
    tech: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    featured: true,
    github: "https://github.com/ananyarao/campus-connect",
    live: "https://campus-connect-demo.vercel.app",
    video: "",
    screenshots: [
      "/assets/placeholders/project-placeholder.svg",
      "/assets/placeholders/project-placeholder.svg",
      "/assets/placeholders/project-placeholder.svg",
    ],
  },
  {
    id: "spendwise",
    name: "SpendWise",
    tagline: "A personal expense tracker with simple spend forecasting.",
    description:
      "Tracks monthly expenses by category and predicts next month's spend using a linear-regression model trained on the user's own history. Built to practice data-driven UI decisions.",
    tech: ["React", "Flask", "SQLite", "scikit-learn"],
    featured: true,
    github: "https://github.com/ananyarao/spendwise",
    live: "https://spendwise-demo.onrender.com",
    video: "",
    screenshots: [
      "/assets/placeholders/project-placeholder.svg",
      "/assets/placeholders/project-placeholder.svg",
    ],
  },
  {
    id: "recipe-radar",
    name: "RecipeRadar",
    tagline: "Search recipes by the ingredients already in your fridge.",
    description:
      "Consumes a public recipes API, ranks results by how many ingredients you already have, and lets you save favourites locally. Focus project for learning custom React hooks.",
    tech: ["React", "REST API", "Tailwind CSS"],
    featured: false,
    github: "https://github.com/ananyarao/recipe-radar",
    live: "https://recipe-radar-demo.vercel.app",
    video: "",
    screenshots: ["/assets/placeholders/project-placeholder.svg"],
  },
  {
    id: "taskflow-cli",
    name: "TaskFlow CLI",
    tagline: "A command-line task manager with tags, due dates and reminders.",
    description:
      "A Python CLI tool storing tasks in a local SQLite file, with fuzzy search and colour-coded priority levels. Packaged and published to TestPyPI as a learning exercise.",
    tech: ["Python", "SQLite", "Click"],
    featured: false,
    github: "https://github.com/ananyarao/taskflow-cli",
    live: "",
    video: "",
    screenshots: ["/assets/placeholders/project-placeholder.svg"],
  },
];

export const internships = [
  {
    id: "internship-1",
    company: "NimbusTech Solutions",
    role: "Frontend Developer Intern",
    duration: "May 2025 – Jul 2025",
    photo: "/assets/placeholders/photo-placeholder.svg",
    certificate: "/assets/placeholders/certificate-placeholder.svg",
    description:
      "Rebuilt the client dashboard in React, cutting first-load time by 40% through code-splitting and lazy-loaded routes. Paired with two senior engineers on a component library adopted across three product teams.",
    tech: ["React", "TypeScript", "Storybook"],
  },
  {
    id: "internship-2",
    company: "Verve Analytics",
    role: "Data & Backend Intern",
    duration: "Dec 2024 – Feb 2025",
    photo: "/assets/placeholders/photo-placeholder.svg",
    certificate: "/assets/placeholders/certificate-placeholder.svg",
    description:
      "Built internal REST APIs for a reporting tool used by 5 analysts daily, and wrote data-cleaning scripts that reduced manual spreadsheet work by roughly 6 hours a week.",
    tech: ["Python", "Flask", "PostgreSQL"],
  },
];

export const achievements = [
  {
    id: "ach-1",
    title: "Smart India Hackathon — Finalist",
    year: "2025",
    photo: "/assets/placeholders/achievement-placeholder.svg",
    description: "Team of 4 selected among top 30 nationally out of 900+ teams for a civic-tech proposal.",
  },
  {
    id: "ach-2",
    title: "College Coding Championship — 1st Place",
    year: "2024",
    photo: "/assets/placeholders/achievement-placeholder.svg",
    description: "Won the annual inter-department competitive programming contest, 120 participants.",
  },
  {
    id: "ach-3",
    title: "Open-source contributor",
    year: "2024",
    photo: "/assets/placeholders/achievement-placeholder.svg",
    description: "Merged 5 accepted pull requests to a mid-size open-source React UI library.",
  },
];

// Used to embed the free, public GitHub / LeetCode stat-card services.
export const tracking = {
  githubUsername: "ananyarao",
  leetcodeUsername: "ananyarao",
};

export const contact = {
  heading: "Let's talk",
  message:
    "I'm actively looking for a full-time or internship role as a fresher developer. The fastest way to reach me is email or LinkedIn — I reply within a day.",
};
