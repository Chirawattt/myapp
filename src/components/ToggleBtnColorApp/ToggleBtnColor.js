import { useState } from "react";
import "./ToggleBtnColor.css";

const ToggleBtnColor = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [textColor, setTextColor] = useState("#1b1b1b");
  const [buttonStyle, setbuttonStyle] = useState("white");

  function handleClick() {
    setBackgroundColor(backgroundColor === "white" ? "#1b1b1b" : "white");
    setTextColor(textColor === "#1b1b1b" ? "#ffa31a" : "#1b1b1b");
    setbuttonStyle(buttonStyle === "white" ? "#1b1b1b" : "white");
  }

  return (
    <>
      <section style={{ backgroundColor: backgroundColor, color: textColor }}>
        <button
          style={{
            backgroundColor: buttonStyle,
            color: textColor,
            border: `2px solid ${textColor}`,
          }}
          onClick={handleClick}
        >
          {backgroundColor === "white" ? "Dark Mode" : "Light Mode"}
        </button>

        <div className="content">
          <h1>
            Welcome To a <br />
            New World.
          </h1>
        </div>
      </section>
    </>
  );
};

export default ToggleBtnColor;
