import { useState } from "react";
import { AiFillProject } from "react-icons/ai";
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
      />
      <div className="portfolio-content">
        <div className="portfolio-content-cards">
          {portfolioData.map((item, index) => (
            <div
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              key={index}
              className="portfolio-content-cards-item"
            >
              <div className="portfolio-content-cards-item-img-wrapper">
                <a href="">
                  <img src={item.projectImage} alt={item.projectName} />
                </a>
              </div>
              <div className="overlay">
                {hoveredIndex === index && (
                  <div>
                    <p>{item.projectName}</p>
                    <button>visit</button>
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
