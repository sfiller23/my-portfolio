import { Fragment, useState } from "react";
import { AiFillProject } from "react-icons/ai";
import { Link } from "react-router-dom";
import PageHeaderContent from "../../components/pageHeaderContent/PageHeaderContent";
import "./portfolio.scss";
import { portfolioData } from "./utils";

export default function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="portfolio" id="portfolio">
      <PageHeaderContent
        headerText="My portfolio"
        icon={<AiFillProject size={40} />}
      >
        <span id="feedback-link-container">
          <p>Any feedback would be greatly appreciated:</p>
          <Link to="/feedback">Give Feedback</Link>
        </span>
      </PageHeaderContent>

      <div className="portfolio-content">
        <p id="note">All the demo projects are served and hosted by Firebase</p>
        <div className="portfolio-content-cards">
          {portfolioData.map((item, index) => (
            <div
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              key={index}
              className="portfolio-content-cards-item"
            >
              <div className="portfolio-content-cards-item-img-wrapper">
                <img src={item.projectImage} alt={item.projectName} />
              </div>
              <div className="overlay">
                {hoveredIndex === index && (
                  <div>
                    <p>{item.projectName}</p>
                    <div id="main-content">
                      <p id="description">{item.projectDescription}</p>
                      <p>Skills Demonstrated</p>
                      <ul>
                        {item.skills.map((skill, index) => (
                          <li key={index}>{skill}</li>
                        ))}
                      </ul>

                      {item.drawbacks && (
                        <Fragment>
                          <p>Drawbacks</p>
                          <ul>
                            {item.drawbacks?.map((skill, index) => (
                              <li key={index}>{skill}</li>
                            ))}
                          </ul>
                        </Fragment>
                      )}
                      <div className="links">
                        {item.projectLink && (
                          <a href={item.projectLink} target="_blank">
                            Visit
                          </a>
                        )}
                        {item.projectSourceCode && (
                          <a href={item.projectSourceCode} target="_blank">
                            Code
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
