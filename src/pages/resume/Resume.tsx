import { FaBlackTie } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import PageHeaderContent from "../../components/pageHeaderContent/PageHeaderContent";
import "./resume.scss";
import { data } from "./utils";

export default function Resume() {
  return (
    <section className="resume" id="resume">
      <PageHeaderContent
        headerText="My Resume"
        icon={<FaBlackTie size={40} />}
      />
      <div className="timeline">
        <div className="timeline-experience">
          <h3 className="timeline-experience-header-text">Experience</h3>
          <VerticalTimeline
            layout="1-column"
            lineColor="var(--selected-theme-main-color)"
          >
            <>
              {data.experience.map((item, index) => (
                <VerticalTimelineElement
                  key={index}
                  className="timeline-experience-vertical-timeline-component"
                  contentStyle={{
                    background: "none",
                    color: "var(--selected-theme-main-color)",
                    border: "1.5px solid var(--selected-theme-main-color)",
                  }}
                  iconStyle={{
                    background: "#181818",
                    color: "var(--selected-theme-main-color)",
                  }}
                  date="2020 - present" //change to derive from the data
                  icon={<MdWork />}
                >
                  <div className="vertical-timeline-element-title-wrapper">
                    <h3>{item.title}</h3>
                    <h4>{item.subTitle}</h4>
                  </div>
                  <p className="vertical-timeline-element-description-wrapper">
                    {item.description}
                  </p>
                </VerticalTimelineElement>
              ))}
            </>
          </VerticalTimeline>
        </div>
        <div className="timeline-education">
          <h3 className="timeline-education-header-text">Education</h3>
          <VerticalTimeline
            layout="1-column"
            lineColor="var(--selected-theme-main-color)"
          >
            <>
              {data.education.map((item, index) => (
                <VerticalTimelineElement
                  key={index}
                  className="timeline-education-vertical-timeline-component"
                  contentStyle={{
                    background: "none",
                    color: "var(--selected-theme-main-color)",
                    border: "1.5px solid var(--selected-theme-main-color)",
                  }}
                  iconStyle={{
                    background: "#181818",
                    color: "var(--selected-theme-main-color)",
                  }}
                  date="2020 - present" //change to derive from the data
                  icon={<MdWork />}
                >
                  <div className="vertical-timeline-element-title-wrapper">
                    <h3>{item.title}</h3>
                    <h4>{item.subTitle}</h4>
                  </div>
                  <p className="vertical-timeline-element-description-wrapper">
                    {item.description}
                  </p>
                </VerticalTimelineElement>
              ))}
            </>
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
}
