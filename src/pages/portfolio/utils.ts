interface PortfolioData {
  projectName: string;
  projectLink?: string;
  projectSourceCode?: string;
  projectDescription: string;
  skills: string[];
  drawbacks?: string[];
  projectImage: string;
}

export const portfolioData: PortfolioData[] = [
  {
    projectName: "Current Site",
    projectDescription:"This is a portfolio web side. It's built with React and TypeScript, using context API for state management.",
    projectSourceCode: "https://github.com/sfiller23/my-portfolio",
    skills: ["Cool animations", "Responsive design (Desktop and tablet)", "SCSS", "Theme colors managment using global state"],
    drawbacks:["No common component library", "Not responsive for mobile"],
    projectImage: "../../../../public/images/Portfolio.png",
  },
  {
    projectName: "Demo chat app",
    projectLink: "https://sfchat-47232.web.app/login",
    projectSourceCode: "https://github.com/sfiller23/sfChat",
    projectDescription:
      "The app was created to demontstare complex data handling in a Real-time chat, including states like seen, sent, writing and profile image upload (React+Typescript)",
    skills: ["Authentication flow","Fully responsive","Webhooks","Combination of Context and Redux","API management using Redux-toolkit","SCSS","Code splitting"],
    projectImage: "../../../../public/images/chat.png",
  },
  {
    projectName: "My UI component library",
    projectSourceCode: "https://github.com/sfiller23/sf-component-library",
    projectDescription:
      "An open-source project that provides a set of reusable UI components based on CSS-Grid for React applications.",
    skills: ["Storybook","CSS-Grid", "Styled-Components", "Version bumping and Published on npm with github actions"],
    drawbacks:["No unit Testing" , "No CI/CD"],
    projectImage: "../../../../public/images/storybook.png",
  },
  {
    projectName: "Demo Real Estate search website",
    projectSourceCode: "https://github.com/sfiller23/sf-dream-home",
    projectLink: "https://sf-dream-home.web.app/",
    projectDescription:
      "This site uses the UI component library to demonstrate the usage of the components in a real-world scenario.",
    skills: ["Advanced React", "Advenced Firebase use", "Styled-components"],
    drawbacks:["Not fully responsive"],
    projectImage: "../../../../public/images/dream-house.png",
  },
  {
    projectName: "Admin dashboard",
    projectLink: "https://admin-dashboard-83b97.web.app",
    projectSourceCode:"https://github.com/sfiller23/admin-dashboard-grid",
    projectDescription:
      "CSS-Grid learning project using advanced Grid concepts to make the page responsive using only CSS-grid.",
    skills: ["CSS-Grid", "Responsive design"],
    drawbacks:["Static page"],
    projectImage: "../../../../public/images/dashboard.png",
  },
  {
    projectName: "Youtube mirror site",
    projectLink: "https://my-773b1.web.app/",
    projectSourceCode:"https://github.com/sfiller23/my-youtube",
    projectDescription:
      "The purpose of this project was to learn React by mimicking youtube main functionality.",
    skills: ["Styled-components", "context API","reuseable components"],
    drawbacks:["basic react knowledge"],
    projectImage: "../../../../public/images/my-youtube.png",
  },
  {
    projectName: "Valid notes",
    projectLink: "https://valid-notes.web.app",
    projectSourceCode:"https://github.com/sfiller23/valid-notes",
    projectDescription:
      "This website is built for personal use. as a guitar player, I want to know what notes I can play while a chord is playing in the background.",
    skills: ["From music theory to code"],
    drawbacks:["no frontend clean code considerations were taken"],
    projectImage: "../../../../public/images/notes.png",
  },
  
];
