import { useState } from "react";

function RandomColor() {
  const [randomColor, setRandomColor] = useState("rgb(195, 255, 246)");
  function generateRandomRGB() {
    const randomRed = Math.floor(Math.random() * 256);
    const randomGreen = Math.floor(Math.random() * 256);
    const randomBlue = Math.floor(Math.random() * 256);

    return `rgb(${randomRed},${randomGreen},${randomBlue})`;
  }
  function handleClickBtn() {
    const rgb = generateRandomRGB();
    setRandomColor(rgb);
  }
  return (
    <div
      className="random-color-container"
      style={{ backgroundColor: randomColor }}
    >
      <button className="random-color-btn" onClick={handleClickBtn}>
        Generate Random Color
      </button>

      <h3 className="random-color-label">RGB Color:</h3>
      <h1 className="random-color-value">{randomColor}</h1>
    </div>
  );
}

export default RandomColor;
