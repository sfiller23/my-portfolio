import { BsInfoCircleFill } from "react-icons/bs";
import { DiAndroid, DiApple } from "react-icons/di";
import { FaDatabase, FaDev } from "react-icons/fa";
import PageHeaderContent from "../../components/pageHeaderContent/PageHeaderContent";
import "./about.scss";
import { personalData } from "./utils";
import { useState } from "react";
import { longAboutMe, shortAboutMe } from "./texts";

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <section className="about" id="about">
      <PageHeaderContent
        headerText="About me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about-content">
        <div className="about-content-personal-wrapper">
          <h3 className="developer-content">Front end developer</h3>
          <h4 className="brief">Brief overview</h4>
            <p id="about-me">
              {shortAboutMe}
              {isExpanded && <p id="long"> {longAboutMe} </p>}
              <button
              className="toggle-about-me"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "Show Less" : "Read More"}
            </button>
            </p>         
          <h3 className="personal-content">Personal Information</h3>
          <ul>
            {personalData.map((item, index) => (
              <li key={index}>
                <span className="title">{item.label}</span>
                <span className="value">{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="about-content-services-wrapper">
          <div className="about-content-services-wrapper-inner-content">
            <div>
              <DiApple size={60} color="var(--selected-theme-main-color)" />
            </div>
            <div>
              <FaDatabase size={60} color="var(--selected-theme-main-color)" />
            </div>
            <div>
              <DiAndroid size={60} color="var(--selected-theme-main-color)" />
            </div>
            <div>
              <FaDev size={60} color="var(--selected-theme-main-color)" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
