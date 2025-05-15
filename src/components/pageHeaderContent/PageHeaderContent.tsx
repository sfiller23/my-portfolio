import { ReactNode } from "react";
import "./pageHeaderContent.scss";

interface PageHeaderContent {
  headerText: string;
  icon: JSX.Element;
  children?: ReactNode;
}

export default function PageHeaderContent(props: PageHeaderContent) {
  const { headerText, icon, children } = props;
  return (
    <div className="wrapper">
      <h2>{headerText}</h2>
      {children}
      <span>{icon}</span>
    </div>
  );
}
