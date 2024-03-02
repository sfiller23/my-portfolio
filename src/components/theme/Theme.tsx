import { useEffect, useState } from "react";
import { ImCog } from "react-icons/im";
import setCurrentTheme from "../../helpers/theme";
import "./theme.scss";

interface ColorsArray {
  id: string;
  bgColor: string;
}

export default function Theme() {
  const colorsArray: ColorsArray[] = [
    {
      id: "yellow",
      bgColor: "#ffdd40",
    },
    {
      id: "red",
      bgColor: "#E82A2A",
    },
    {
      id: "green",
      bgColor: "#6AC045",
    },
    {
      id: "blue",
      bgColor: "#5078FF",
    },
  ];
  const [theme, setTheme] = useState<string>("blue");
  const [toggle, setToggle] = useState<boolean>(false);

  const handleToggleTheme = (id: string): void => {
    setTheme(id);
    setToggle(false);
  };

  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  return (
    <div className={`theme-wrapper ${toggle ? "active" : ""}`}>
      <div className="theme-wrapper-toggle-icon">
        <ImCog onClick={() => setToggle(!toggle)} size={40} />
      </div>
      <div className="theme-wrapper-menu">
        <h4>Choose Theme</h4>
        <ul>
          {colorsArray.map((item, index) => (
            <li
              onClick={() => handleToggleTheme(item.id)}
              key={index}
              style={{ backgroundColor: item.bgColor }}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
