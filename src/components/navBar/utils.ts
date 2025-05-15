interface INavBar {
  label: string;
  to: string;
}

export const navMenus: INavBar[] = [
  {
    label: "HOME",
    to: "/",
  },
  {
    label: "PORTFOLIO",
    to: "/portfolio",
  },
  {
    label: "RESUME",
    to: "/resume",
  },
  {
    label: "ABOUT ME",
    to: "/about",
  },
  {
    label: "FEEDBACK",
    to: "/feedback",
  },
];
