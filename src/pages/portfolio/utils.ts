interface PortfolioData {
  projectName: string;
  projectLink?: string;
  projectSourceCode?: string;
  projectDescription: string;
  skills: string[];
  drawbacks?: string[];
  projectImage: string;
}

const imagesPath = "/images/";

export const portfolioData: PortfolioData[] = [
  {
    projectName: "Current Site",
    projectDescription:
      "This is a portfolio web side. It's built with React and TypeScript, using context API for state management.",
    projectSourceCode: "https://github.com/sfiller23/my-portfolio",
    skills: [
      "Cool animations",
      "Responsive design (Desktop and tablet)",
      "SCSS",
      "Theme colors management using global state",
    ],
    drawbacks: ["No common component library", "Not responsive for mobile"],
    projectImage: `${imagesPath}portfolio.png`,
  },
  {
    projectName: "Demo chat app",
    projectLink: "https://sfchat-47232.web.app/login",
    projectSourceCode: "https://github.com/sfiller23/sfChat",
    projectDescription:
      "The app was created to demonstrate complex data handling in a Real-time chat, including states like seen, sent, writing and profile image upload (React+Typescript)",
    skills: [
      "Authentication flow",
      "Fully responsive",
      "Webhooks",
      "Complex UI and logic",
      "API management using Redux-toolkit",
      "SCSS",
      "Code splitting",
    ],
    projectImage: `${imagesPath}chat.png`,
  },
  {
    projectName: "My UI component library",
    projectSourceCode: "https://github.com/sfiller23/sf-component-library",
    projectDescription:
      "An open-source project that provides a set of reusable UI components based on CSS-Grid for React applications.",
    skills: [
      "Storybook",
      "CSS-Grid",
      "Styled-Components",
      "Version bumping and Published on npm with github actions",
    ],
    drawbacks: ["No unit Testing", "No CI/CD"],
    projectImage: `${imagesPath}storybook.png`,
  },
  {
    projectName: "Demo Real Estate search website",
    projectSourceCode: "https://github.com/sfiller23/sf-dream-home",
    projectLink: "https://sf-dream-home.web.app/",
    projectDescription:
      "This site uses the UI component library to demonstrate the usage of the components in a real-world scenario.",
    skills: ["Advanced React", "Advenced Firebase use", "Styled-components"],
    drawbacks: ["Not fully responsive"],
    projectImage: `${imagesPath}dream-house.png`,
  },
  {
    projectName: "Angular chat app",
    projectLink: "https://mychatapp4-1f82e.web.app/",
    projectSourceCode: "https://github.com/sfiller23/myChatApp",
    projectDescription:
      "This is my first Angular project. The objective was to implement my knowledge while I'm studying to finish my degree",
    skills: [
      "Authentication flow",
      "Fully responsive",
      "Complex UI and logic",
      "Ngrx",
      "Rxjs",
      "Code splitting",
    ],
    drawbacks: ["Based on Timers"],
    projectImage: `${imagesPath}angularChat.jpg`,
  },
  {
    projectName: "Youtube mirror site",
    projectLink: "https://my-773b1.web.app/",
    projectSourceCode: "https://github.com/sfiller23/my-youtube",
    projectDescription:
      "The purpose of this project was to learn React by mimicking youtube main functionality.",
    skills: ["Styled-components", "context API", "reuseable components"],
    drawbacks: ["basic react knowledge"],
    projectImage: `${imagesPath}my-youtube.png`,
  },
  {
    projectName: "Personal trainer website",
    projectLink: "https://50plusfitness.co.uk/",
    projectDescription: "My first freelance work",
    skills: ["WordPress", "SEO", "Contact chat"],
    drawbacks: ["CMS"],
    projectImage: `${imagesPath}fitness.jpg`,
  },
  {
    projectName: "Valid notes",
    projectLink: "https://valid-notes.web.app",
    projectSourceCode: "https://github.com/sfiller23/valid-notes",
    projectDescription:
      "This website is built for personal use. as a guitar player, I want to know what notes I can play while a chord is playing in the background.",
    skills: ["From music theory to code"],
    drawbacks: ["no frontend clean code considerations were taken"],
    projectImage: `${imagesPath}notes.png`,
  },
  {
    projectName: "Admin dashboard",
    projectLink: "https://admin-dashboard-83b97.web.app",
    projectSourceCode: "https://github.com/sfiller23/admin-dashboard-grid",
    projectDescription:
      "CSS-Grid learning project using advanced Grid concepts to make the page responsive using only CSS-grid.",
    skills: ["CSS-Grid", "Responsive design"],
    drawbacks: ["Static page"],
    projectImage: `${imagesPath}dashboard.png`,
  },
];
