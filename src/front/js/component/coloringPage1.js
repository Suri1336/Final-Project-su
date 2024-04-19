
import "../../styles/home.css";
import React, { useState, useEffect, useRef } from 'react';

export const ColoringPage1 = (props) => {
    const [currentColor, setCurrentColor] = useState('#FF0000');
    const [isDrawing, setIsDrawing] = useState(false);
    const [history, setHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const coloringPageRef = useRef(null);
    const ctxRef = useRef(null);

    const undo = () => {
        if (historyIndex > 0) {
            setHistoryIndex(historyIndex - 1);
        }
    };


    useEffect(() => {
        const canvas = coloringPageRef.current;
        const ctx = canvas.getContext('2d');
        ctxRef.current = ctx;

        const saveState = () => {
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            setHistory(prevHistory => [...prevHistory.slice(0, historyIndex + 1), imageData]);
            setHistoryIndex(prevIndex => prevIndex + 1);
        };

        const draw = (x, y) => {
            if (!isDrawing) return;
            ctx.fillStyle = currentColor;
            ctx.beginPath();
            ctx.arc(x, y, 5, 0, 2 * Math.PI);
            ctx.fill();
        };

        const handleMouseDown = (e) => {
            setIsDrawing(true);
            draw(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
        };

        const handleMouseMove = (e) => {
            draw(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
        };

        const handleMouseUp = () => {
            setIsDrawing(false);
            saveState();
        };

        canvas.addEventListener('mousedown', handleMouseDown);
        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseup', handleMouseUp);

        return () => {
            canvas.removeEventListener('mousedown', handleMouseDown);
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseup', handleMouseUp);
        };
    }, [currentColor, isDrawing]);

    useEffect(() => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = props.img;
        img.onload = () => {
            const canvas = coloringPageRef.current;
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            setHistory([ctx.getImageData(0, 0, canvas.width, canvas.height)]);
            setHistoryIndex(0);
        };
    }, [props.img]);

    useEffect(() => {
        const canvas = coloringPageRef.current;
        const ctx = canvas.getContext('2d');
        if (historyIndex >= 0 && historyIndex < history.length) {
            ctx.putImageData(history[historyIndex], 0, 0);
        }
    }, [history, historyIndex]);

    const saveImage = () => {
        const canvas = coloringPageRef.current;
        const link = document.createElement('a');
        link.download = 'coloring_image.png';
        link.href = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
        link.click();
    };

    return (
        <div style={{ position: 'relative', minHeight: "100dvh" }}>
            <h1 className="canvastop">Lets Color</h1>
            <div id="colorPicker">
                <div style={{ backgroundColor: '#FF0000' }} onClick={() => setCurrentColor('#FF0000')}></div>
                <div style={{ backgroundColor: '#00FF00' }} onClick={() => setCurrentColor('#00FF00')}></div>
                <div style={{ backgroundColor: '#0000FF' }} onClick={() => setCurrentColor('#0000FF')}></div>
                <div style={{ backgroundColor: '#FFFF00' }} onClick={() => setCurrentColor('#FFFF00')}></div>
                <div style={{ backgroundColor: '#FF00FF' }} onClick={() => setCurrentColor('#FF00FF')}></div>
                <input  className="btn purple m-2" type="color" id="colorPickerInput" onChange={(e) => setCurrentColor(e.target.value)} />
            </div>
            <canvas ref={coloringPageRef} id="coloringPage" style={{ position: 'absolute', top: "50px", left: "250px", border: '1px solid #000',  maxHeight: "1000px"}}></canvas>
            <div>
                <button  className="btn purple m-2" onClick={saveImage}>Save Image</button>
                <button  className="btn purple m-2" onClick={undo}>Undo</button>
               
            </div>
        </div>
    );
};
