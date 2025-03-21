interface ResumeData {
  experience: { title: string; description: string, date:string }[];
  education: { title: string; description: string, date:string }[];
}

export const data: ResumeData = {
  experience: [
    {
      title: "React Developer at Sunbit",
      description: "The role involved intensive teamwork using the Agile methodology. Leading technologies and skills: Redux-Toolkit, Typescript, Detox, Cypress, Styled-Components, storybook.",
      date: "December 2021 – October 2023"
    },
    {
      title: "Frontend Developer as a Freelancer",
      description: "As I studied to finish my degree, I developed my FE skills by learning angular At Udemy.I developed a chat website for learning purposes and used Firebase as the Backend and hosting. Additionally, I built a website for a metal band using Django and a website for a personal fitness trainer using WordPress",
      date: "January 2019 - October 2021"
    },
    {
      title: "Full Stack Developer at Indigo Immigration services",
      description: "• Maintained company sites using jQuery and Vanilla JS to ensure smooth functionality. • Managed a PHP-built CRM site for efficient customer relationship management. • Implemented UI/UX enhancements to boost user experience and drive increased site traffic.",
      date: "February 2016 - April 2017"
    },
  ],
  education: [
    {
      title: "The Open University of Israel",
      description: "Bachelor's degree in Computer Science And Education",
      date: "2015-2021"
    },
    {
      title: "React – The Ultimate React Course. (Udemy)",
      description: "Core, Hooks, Routing, Context, Redux, JSX & More",
      date: "2022"
    },
    {
      title: "CSS – The Complete Guide. (Udemy)",
      description: "Flexbox, Grid, Animations, Responsive Design & More",
      date: "2022"
    },
    {
      title: "Cypress End-to-End Testing. (Udemy)",
      description: "E2E Web UI Automation from scratch",
      date: "2022"
    },
    {
      title: "Cypress End-to-End Testing. (Udemy)",
      description: "E2E Web UI Automation from scratch",
      date: "2022"
    },
  ],
};
