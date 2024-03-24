import React, { useEffect, useRef, useState } from 'react';

export const ColoringPage = (props) => {
  const canvasRef = useRef(null);
  const [chosenColor, setChosenColor] = useState('#FFFFFF');
  const colors = ['#1d561c', '#699b68', '#61ce73', '#afe89a', '#e9edb2', '#efe77b', '#f4d24f', '#bc9d71', '#08316d', '#265a8b', '#5da4ba', '#7ad0d3', '#e7b6af', '#faca9a', '#fe8d7d', '#9b6959', '#552056', '#874a9e', '#b595e5', '#b33a6d', '#e2649e', '#ec8a8e', '#fd6d4a', '#7c373f'];
  const fillSpeed = 0.15;

  useEffect(() => {
    console.clear();
    console.log('svgColor');
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    function drawCanvas() {
      ctx.fillStyle = chosenColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    // Redraw canvas when chosenColor changes
    drawCanvas();

    // Attach event listeners
    function swatchClick(color) {
      setChosenColor(color);
    }

    document.getElementById('btnRandom').addEventListener('click', drawRandom);
    document.getElementById('btnClear').addEventListener('click', clearCanvas);
    document.querySelectorAll('.swatch').forEach((swatch) => {
      swatch.addEventListener('click', () => swatchClick(swatch.dataset.color));
    });

    return () => {
      // Cleanup: Remove event listeners
      document.getElementById('btnRandom').removeEventListener('click', drawRandom);
      document.getElementById('btnClear').removeEventListener('click', clearCanvas);
      document.querySelectorAll('.swatch').forEach((swatch) => {
        swatch.removeEventListener('click', () => swatchClick(swatch.dataset.color));
      });
    };
  }, [chosenColor]);

  function drawRandom() {
    const randomNum = Math.floor(Math.random() * colors.length);
    setChosenColor(colors[randomNum]);
  }

  function clearCanvas() {
    setChosenColor('#FFFFFF');
  }

  return (
    <div className="holder">
      <div className="Title">Interactive Coloring Page</div>

      <div className="image-container">
        <canvas ref={canvasRef} width={800} height={600}></canvas>
        <img height="300px" width="300px" src={props.img} alt="Coloring Page" />
      </div>

      <div className="held">
        <button id="btnRandom" className="button">Random Color</button>
        <button id="btnClear" className="button">Clear Color</button>
      </div>

      <ul className="swatchHolder w-25">
        <li className="colorHolder" style={{ backgroundColor: chosenColor }}>Color Palette</li>
        {colors.map((color, index) => (
          <li key={index} className="swatch" style={{ backgroundColor: color }} data-color={color}></li>
        ))}
      </ul>
    </div>
  );
};


