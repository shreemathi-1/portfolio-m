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


// The three areas the About section highlights, each with an icon tile.
export const focusAreas = [
  { icon: "🧩", label: "Full-Stack Web Development" },
  { icon: "⚡", label: "Performance & Clean Code" },
  { icon: "☁️", label: "Cloud & DevOps Fundamentals" },
];

// Shown as the Education column beside the About text.
export const education = [
  {
    id: "edu-1",
    degree: "B.E. Computer Science & Engineering",
    institution: "Sample Institute of Technology",
    years: "2022–2026",
    score: "CGPA: 8.6",
  },
  {
    id: "edu-2",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Sample Higher  School",
    years: "2021–2022",
    score: "91%",
  },
 
];

// Skills grouped by category. Each group gets an icon for its card.
// "proof" is a screenshot, certificate or short video clip backing the skill —
// an .mp4/.webm/.mov opens as a video, anything else as an image. null means
// nothing is uploaded yet.
export const skillGroups = [
  {
    category: "Programming Languages",
    icon: "💻",
    skills: [
      { name: "JavaScript", proof: null },
      { name: "Python", proof: null },
      { name: "Java", proof: null },
      { name: "SQL", proof: null },
    ],
  },
  {
    category: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React", proof: "/assets/placeholders/certificate-placeholder.svg" },
      { name: "HTML / CSS", proof: null },
      { name: "Tailwind CSS", proof: null },
      { name: "Redux", proof: null },
    ],
  },
  {
    category: "Backend & APIs",
    icon: "⚙️",
    skills: [
      { name: "Node.js / Express", proof: null },
      { name: "REST APIs", proof: null },
    ],
  },
  {
    category: "Databases",
    icon: "🗄️",
    skills: [
      { name: "MongoDB", proof: null },
      { name: "PostgreSQL", proof: null },
    ],
  },
  {
    category: "Tools & Workflow",
    icon: "🛠️",
    skills: [
      { name: "Git & GitHub", proof: null },
      { name: "Figma", proof: null },
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: "☁️",
    skills: [
      { name: "Docker (basics)", proof: null },
      { name: "AWS (basics)", proof: "/assets/placeholders/certificate-placeholder.svg" },
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
    github: "https://github.com/ananyarao/taskflow-cli",
    live: "",
    video: "",
    screenshots: ["/assets/placeholders/project-placeholder.svg"],
  },
];

// Rendered as the Experience timeline. "highlights" are the arrow bullets;
// "photo" is kept for reference but the timeline layout does not display it.
export const internships = [
  {
    id: "internship-1",
    company: "NimbusTech Solutions",
    role: "Frontend Developer Intern",
    duration: "May 2025 – Jul 2025",
    length: "3 months",
    location: "Bengaluru, India",
    photo: "/assets/placeholders/photo-placeholder.svg",
    certificate: "/assets/placeholders/certificate-placeholder.svg",
    description:
      "Three months on the product team, working across the client-facing dashboard and the shared component library.",
    highlights: [
      "Rebuilt the client dashboard in React, cutting first-load time by 40% through code-splitting and lazy-loaded routes",
      "Paired with two senior engineers on a component library adopted across three product teams",
      "Documented every shared component in Storybook with typed props",
    ],
    tech: ["React", "TypeScript", "Storybook"],
  },
  {
    id: "internship-2",
    company: "Verve Analytics",
    role: "Data & Backend Intern",
    duration: "Dec 2024 – Feb 2025",
    length: "3 months",
    location: "Remote",
    photo: "/assets/placeholders/photo-placeholder.svg",
    certificate: "/assets/placeholders/certificate-placeholder.svg",
    description:
      "A backend-leaning internship on the internal reporting stack used by the analytics team.",
    highlights: [
      "Built internal REST APIs for a reporting tool used by 5 analysts daily",
      "Wrote data-cleaning scripts that reduced manual spreadsheet work by roughly 6 hours a week",
      "Worked in Python and Flask against a PostgreSQL warehouse",
    ],
    tech: ["Python", "Flask", "PostgreSQL"],
  },
];

// Certifications gallery. "image" is the certificate picture itself —
// drop the real file in /public/assets and point at it here. These entries are
// sample placeholders: replace the titles, issuers and dates with your own.
export const certifications = [
  {
    id: "cert-1",
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "March 2025",
    image: "/assets/placeholders/certificate-placeholder.svg",
  },
  {
    id: "cert-2",
    title: "React — The Complete Guide",
    issuer: "Udemy",
    date: "January 2025",
    image: "/assets/placeholders/certificate-placeholder.svg",
  },
  {
    id: "cert-3",
    title: "Python for Everybody",
    issuer: "Coursera",
    date: "November 2024",
    image: "/assets/placeholders/certificate-placeholder.svg",
  },
  {
    id: "cert-4",
    title: "AWS Cloud Practitioner Essentials",
    issuer: "AWS Skill Builder",
    date: "August 2024",
    image: "/assets/placeholders/certificate-placeholder.svg",
  },
  {
    id: "cert-5",
    title: "Git & GitHub Fundamentals",
    issuer: "Sample Academy",
    date: "May 2024",
    image: "/assets/placeholders/certificate-placeholder.svg",
  },
  {
    id: "cert-6",
    title: "SQL for Data Analysis",
    issuer: "Sample Academy",
    date: "February 2024",
    image: "/assets/placeholders/certificate-placeholder.svg",
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
// Events and workshops attended, shown under Highlights. "image" is the
// participation certificate. These are sample placeholders — replace them.
export const workshops = [
  {
    id: "ws-1",
    title: "Hands-on Workshop on Modern React Patterns",
    organiser: "Sample Institute of Technology · Dept. of Computer Science",
    format: "2-Day Workshop",
    date: "Aug 12–13, 2025",
    image: "/assets/placeholders/certificate-placeholder.svg",
  },
  {
    id: "ws-2",
    title: "Cloud Fundamentals Bootcamp",
    organiser: "Sample Tech Community · Bengaluru Chapter",
    format: "1-Day Bootcamp",
    date: "Apr 6, 2025",
    image: "/assets/placeholders/certificate-placeholder.svg",
  },
  {
    id: "ws-3",
    title: "Open Source Contribution Sprint",
    organiser: "Sample Academy · Student Developer Program",
    format: "Weekend Program",
    date: "Nov 23–24, 2024",
    image: "/assets/placeholders/certificate-placeholder.svg",
  },
];

export const tracking = {
  githubUsername: "ananyarao",
  leetcodeUsername: "ananyarao",
};

export const contact = {
  heading: "Let's connect",
  message:
    "I'm actively looking for a full-time or internship role as a fresher developer. The fastest way to reach me is email or LinkedIn — I reply within a day.",
};
