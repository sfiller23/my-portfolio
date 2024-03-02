import "./pageHeaderContent.scss";

interface PageHeaderContent {
  headerText: string;
  icon: JSX.Element;
}

export default function PageHeaderContent(props: PageHeaderContent) {
  const { headerText, icon } = props;
  return (
    <div className="wrapper">
      <h2>{headerText}</h2>
      <span>{icon}</span>
    </div>
  );
}
