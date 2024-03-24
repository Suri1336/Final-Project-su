import React, { useState, useEffect, useRef } from 'react';

export const ColoringPage = () => {
    const [currentColor, setCurrentColor] = useState('#ff0000');
    const [isDrawing, setIsDrawing] = useState(false);
    const [history, setHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const coloringPageRef = useRef(null);

    const undo = () => {
        if (historyIndex > 0) {
            setHistoryIndex(historyIndex - 1);
        }
    };

    const redo = () => {
        if (historyIndex < history.length - 1) {
            setHistoryIndex(historyIndex + 1);
        }
    };
    useEffect(() => {
        const canvas = coloringPageRef.current;
        const ctx = canvas.getContext('2d');

        const saveState = () => {
            setHistory(prevHistory => {
                const newHistory = prevHistory.slice(0, historyIndex + 1);
                newHistory.push(canvas.toDataURL());
                setHistoryIndex(newHistory.length - 1);
                return newHistory;
            });
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
    }, [currentColor, isDrawing, history, historyIndex]);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (event) => {
            const img = new Image();
            img.onload = () => {
                const canvas = coloringPageRef.current;
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);
                setHistory([canvas.toDataURL()]);
                setHistoryIndex(0);
            };
            img.src = event.target.result;
        };
        reader.readAsDataURL(file);
    };

    const saveImage = () => {
        const canvas = coloringPageRef.current;
        const link = document.createElement('a');
        link.download = 'coloring_image.png';
        link.href = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
        link.click();
    };

    return (
        <div>
            <h1>Coloring Page Website</h1>

            <input type="file" accept="image/*" onChange={handleFileChange} />
            <div id="colorPicker">
                <div style={{ backgroundColor: '#ff0000' }} onClick={() => setCurrentColor('#ff0000')}></div>
                <div style={{ backgroundColor: '#00ff00' }} onClick={() => setCurrentColor('#00ff00')}></div>
                <div style={{ backgroundColor: '#0000ff' }} onClick={() => setCurrentColor('#0000ff')}></div>
                <div style={{ backgroundColor: '#ffff00' }} onClick={() => setCurrentColor('#ffff00')}></div>
                <div style={{ backgroundColor: '#ff00ff' }} onClick={() => setCurrentColor('#ff00ff')}></div>
                <input type="color" id="colorPickerInput" onChange={(e) => setCurrentColor(e.target.value)} />
            </div>

            <canvas ref={coloringPageRef} id="coloringPage" style={{ border: '1px solid #000' }}></canvas>

            <button onClick={saveImage}>Save Image</button>
            <button onClick={undo}>Undo</button>
            <button onClick={redo}>Redo</button>
        </div>
    );
};
