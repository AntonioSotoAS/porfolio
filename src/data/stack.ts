export const stack = [
  {
    name: "React",
    icon: "devicon-react-original colored",
    category: "Frontend",
  },
  {
    name: "Next.js",
    icon: "devicon-nextjs-plain dark:text-white text-neutral-900",
    category: "Frontend",
  },
  {
    name: "Astro",
    icon: "devicon-astro-plain colored",
    category: "Frontend",
  },
  {
    name: "NestJS",
    icon: "devicon-nestjs-plain colored",
    category: "Backend",
  },
  {
    name: "Django",
    icon: "devicon-django-plain colored",
    category: "Backend",
  },
  {
    name: "Spring Boot",
    icon: "devicon-spring-original colored",
    category: "Backend",
  },
  {
    name: "Python",
    icon: "devicon-python-plain colored",
    category: "Backend",
  },
  {
    name: "Kotlin",
    icon: "devicon-kotlin-plain colored",
    category: "Mobile",
  },
  {
    name: "Flutter",
    icon: "devicon-flutter-plain colored",
    category: "Mobile",
  },
  {
    name: "Firebase",
    icon: "devicon-firebase-plain colored",
    category: "Cloud / Tools",
  },
  {
    name: "PostgreSQL",
    icon: "devicon-postgresql-plain colored",
    category: "Database",
  },
  {
    name: "Docker",
    icon: "devicon-docker-plain colored",
    category: "DevOps",
  },
  {
    name: "Git",
    icon: "devicon-git-plain colored",
    category: "Tools",
  },
  {
    name: "TypeScript",
    icon: "devicon-typescript-plain colored",
    category: "Language",
  },
];

/**
 * Retorna la clase de Devicon correspondiente para un nombre de tecnología,
 * permitiendo renderizar iconos en cualquier parte de la web.
 */
export const getTechIcon = (techName: string): string | null => {
  const normalized = techName.toLowerCase().trim();
  switch (normalized) {
    case "react":
      return "devicon-react-original colored";
    case "next.js":
    case "nextjs":
      return "devicon-nextjs-plain dark:text-white text-neutral-950";
    case "nestjs":
      return "devicon-nestjs-plain colored";
    case "django":
      return "devicon-django-plain colored";
    case "python":
      return "devicon-python-plain colored";
    case "opencv":
      return "devicon-opencv-plain colored";
    case "firebase":
      return "devicon-firebase-plain colored";
    case "android":
    case "mobile":
      return "devicon-android-plain colored";
    case "typescript":
    case "ts":
      return "devicon-typescript-plain colored";
    case "javascript":
    case "js":
      return "devicon-javascript-plain colored";
    case "html5":
    case "html":
      return "devicon-html5-plain colored";
    case "css3":
    case "css":
      return "devicon-css3-plain colored";
    case "tailwind":
    case "tailwindcss":
      return "devicon-tailwindcss-plain colored";
    case "git":
      return "devicon-git-plain colored";
    case "docker":
      return "devicon-docker-plain colored";
    case "spring":
    case "spring boot":
      return "devicon-spring-original colored";
    case "java":
      return "devicon-java-plain colored";
    case "kotlin":
      return "devicon-kotlin-plain colored";
    case "flutter":
      return "devicon-flutter-plain colored";
    case "firestore":
    case "cloud firestore":
      return "devicon-firebase-plain colored";
    case "postgresql":
    case "postgres":
      return "devicon-postgresql-plain colored";
    case "figma":
    case "ux":
      return "devicon-figma-plain colored";
    case "nodejs":
    case "node":
    case "apis":
      return "devicon-nodejs-plain colored";
    case "gemini":
    case "ia":
    case "ai":
      return "devicon-google-plain colored";
    default:
      return null;
  }
};
