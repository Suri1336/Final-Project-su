// import React, { useState, useEffect, useRef } from 'react';

// export const ColoringPage1 = (props) => {
//     const [currentColor, setCurrentColor] = useState('#ff0000');
//     const [isDrawing, setIsDrawing] = useState(false);
//     const [history, setHistory] = useState([]);
//     const [historyIndex, setHistoryIndex] = useState(-1);
//     const coloringPageRef = useRef(null);
//     const ctxRef = useRef(null);

//     const undo = () => {
//         if (historyIndex > 0) {
//             setHistoryIndex(historyIndex - 1);
//         }
//     };

//     const redo = () => {
//         if (historyIndex < history.length - 1) {
//             setHistoryIndex(historyIndex + 1);
//         }
//     };
//     useEffect(() => {
//         const canvas = coloringPageRef.current;
//         const ctx = canvas.getContext('2d');
//         ctxRef.current = ctx;

//         const saveState = () => {
//             setHistory(prevHistory => {
//                 const newHistory = prevHistory.slice(0, historyIndex + 1);
//                 newHistory.push(ctx.getImageData (0, 0, canvas.width, canvas.height));
//                 setHistoryIndex(newHistory.length - 1);
//                 return newHistory;

//             });
//         };

//         const draw = (x, y) => {
//             if (!isDrawing) return;
//             ctx.fillStyle = currentColor;
//             ctx.beginPath();
//             ctx.arc(x, y, 5, 0, 2 * Math.PI);
//             ctx.fill();
//         };

//         const handleMouseDown = (e) => {
//             setIsDrawing(true);
//             draw(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
//         };

//         const handleMouseMove = (e) => {
//             draw(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
//         };

//         const handleMouseUp = () => {
//             setIsDrawing(false);
//             saveState();
//         };

//         canvas.addEventListener('mousedown', handleMouseDown);
//         canvas.addEventListener('mousemove', handleMouseMove);
//         canvas.addEventListener('mouseup', handleMouseUp);

//         return () => {
//             canvas.removeEventListener('mousedown', handleMouseDown);
//             canvas.removeEventListener('mousemove', handleMouseMove);
//             canvas.removeEventListener('mouseup', handleMouseUp);
//         };
//     }, [currentColor, isDrawing, history, historyIndex]);

//     useEffect(() => {
//         const img = new Image();
//         img.crossOrigin = "anonymous";
//         img.src = props.img;
//         img.width=450;
//         img.onload = () => {
//             const canvas = coloringPageRef.current;
//             canvas.width = img.width;
//             canvas.height = img.height;
//             const ctx = canvas.getContext('2d');
//             ctx.drawImage(img, 0, 0);
//             setHistory([ctx.getImageData(0, 0, canvas.width, canvas.height)]);
//             setHistoryIndex(0);
//         };
//     }, [props.img]);

//     const saveImage = () => {
//         const canvas = coloringPageRef.current;
//         const link = document.createElement('a');
//         link.download = 'coloring_image.png';
//         link.href = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
//         link.click();
//     };

//     return (
//         <div style={{ position: 'relative', minHeight: "100dvh" }}>
//             <h1>Coloring Page Website</h1>

//             <div id="colorPicker">
//                 <div style={{ backgroundColor: '#ff0000' }} onClick={() => setCurrentColor('#ff0000')}></div>
//                 <div style={{ backgroundColor: '#00ff00' }} onClick={() => setCurrentColor('#00ff00')}></div>
//                 <div style={{ backgroundColor: '#0000ff' }} onClick={() => setCurrentColor('#0000ff')}></div>
//                 <div style={{ backgroundColor: '#ffff00' }} onClick={() => setCurrentColor('#ffff00')}></div>
//                 <div style={{ backgroundColor: '#ff00ff' }} onClick={() => setCurrentColor('#ff00ff')}></div>
//                 <input type="color" id="colorPickerInput" onChange={(e) => setCurrentColor(e.target.value)} />
//             </div>

//             <canvas ref={coloringPageRef} id="coloringPage" style={{ position: 'absolute', top: "50px", left: "250px", width: "450px", border: '1px solid #000' }} width="450" height="600"></canvas>
//             <div>
//                 <button onClick={saveImage}>Save Image</button>
//                 <button onClick={undo}>Undo</button>
//                 <button onClick={redo}>Redo</button>
//             </div>
//         </div>
//     );
// };

















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
    const redo = () => {
        if (historyIndex < history.length - 1) {
            setHistoryIndex(historyIndex + 1);
        }
    };
    useEffect(() => {
        const canvas = coloringPageRef.current;
        const ctx = canvas.getContext('2d');
        ctxRef.current = ctx;
        const saveState = () => {
            setHistory(prevHistory => {
                const newHistory = prevHistory.slice(0, historyIndex + 1);
                newHistory.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
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
            console.log(canvas)
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
    // the weird behavior is coming from here I think
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
// to here
    const saveImage = () => {
        const canvas = coloringPageRef.current;
        const link = document.createElement('a');
        link.download = 'coloring_image.png';
        link.href = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
        link.click();
    };
    return (
        <div style={{ position: 'relative', minHeight: "100dvh" }}>
            <h1>Coloring Page Website</h1>
            <div id="colorPicker">
                <div style={{ backgroundColor: '#FF0000' }} onClick={() => setCurrentColor('#FF0000')}></div>
                <div style={{ backgroundColor: '#00FF00' }} onClick={() => setCurrentColor('#00FF00')}></div>
                <div style={{ backgroundColor: '#0000FF' }} onClick={() => setCurrentColor('#0000FF')}></div>
                <div style={{ backgroundColor: '#FFFF00' }} onClick={() => setCurrentColor('#FFFF00')}></div>
                <div style={{ backgroundColor: '#FF00FF' }} onClick={() => setCurrentColor('#FF00FF')}></div>
                <input type="color" id="colorPickerInput" onChange={(e) => setCurrentColor(e.target.value)} />
            </div>
            <canvas ref={coloringPageRef} id="coloringPage" style={{ position: 'absolute', top: "50px", left: "250px", border: '1px solid #000' }}></canvas>
            <div>
                <button onClick={saveImage}>Save Image</button>
                <button onClick={undo}>Undo</button>
                <button onClick={redo}>Redo</button>
            </div>
        </div>
    );
};






















  {/* <script type="text/javascript">
 <html>
    var canvas, ctx, flag = false,
        prevX = 0,
        currX = 0,
        prevY = 0,
        currY = 0,
        dot_flag = false;

    var x = "black",
        y = 2;
    
    function init() {
        canvas = document.getElementById('can');
        ctx = canvas.getContext("2d");
        w = canvas.width;
        h = canvas.height;
    
        canvas.addEventListener("mousemove", function (e) {
            findxy('move', e)
        }, false);
        canvas.addEventListener("mousedown", function (e) {
            findxy('down', e)
        }, false);
        canvas.addEventListener("mouseup", function (e) {
            findxy('up', e)
        }, false);
        canvas.addEventListener("mouseout", function (e) {
            findxy('out', e)
        }, false);
    }
    function color(obj) {
        switch (obj.id) {
            case "green":
                x = "green";
                break;
            case "blue":
                x = "blue";
                break;
            case "red":
                x = "red";
                break;
            case "yellow":
                x = "yellow";
                break;
            case "orange":
                x = "orange";
                break;
            case "black":
                x = "black";
                break;
            case "white":
                x = "white";
                break;
        }
        if (x == "white") y = 14;
        else y = 2;
    
    }
     function draw() {
        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(currX, currY);
        ctx.strokeStyle = x;
        ctx.lineWidth = y;
        ctx.stroke();
        ctx.closePath();
    }
    
    function erase() {
        var m = confirm("Want to clear");
        if (m) {
            ctx.clearRect(0, 0, w, h);
            document.getElementById("canvasimg").style.display = "none";
        }
    }
    
    function save() {
        document.getElementById("canvasimg").style.border = "2px solid";
        var dataURL = canvas.toDataURL();
        document.getElementById("canvasimg").src = dataURL;
        document.getElementById("canvasimg").style.display = "inline";
    }
    
    function findxy(res, e) {
        if (res == 'down') {
            prevX = currX;
            prevY = currY;
            currX = e.clientX - canvas.offsetLeft;
            currY = e.clientY - canvas.offsetTop;
    
            flag = true;
            dot_flag = true;
            if (dot_flag) {
                ctx.beginPath();
                ctx.fillStyle = x;
                ctx.fillRect(currX, currY, 2, 2);
                ctx.closePath();
                dot_flag = false;
            }
        }
        if (res == 'up' || res == "out") {
            flag = false;
        }
        if (res == 'move') {
            if (flag) {
                prevX = currX;
                prevY = currY;
                currX = e.clientX - canvas.offsetLeft;
                currY = e.clientY - canvas.offsetTop;
                draw();
            }
        }
    }
    </script>
    <body onload="init()">
        <canvas id="can" width="400" height="400" style="position:absolute;top:10%;left:10%;border:2px solid;"></canvas>
        <div style="position:absolute;top:12%;left:43%;">Choose Color</div>
        <div style="position:absolute;top:15%;left:45%;width:10px;height:10px;background:green;" id="green" onclick="color(this)"></div>
        <div style="position:absolute;top:15%;left:46%;width:10px;height:10px;background:blue;" id="blue" onclick="color(this)"></div>
        <div style="position:absolute;top:15%;left:47%;width:10px;height:10px;background:red;" id="red" onclick="color(this)"></div>
        <div style="position:absolute;top:17%;left:45%;width:10px;height:10px;background:yellow;" id="yellow" onclick="color(this)"></div>
        <div style="position:absolute;top:17%;left:46%;width:10px;height:10px;background:orange;" id="orange" onclick="color(this)"></div>
        <div style="position:absolute;top:17%;left:47%;width:10px;height:10px;background:black;" id="black" onclick="color(this)"></div>
        <div style="position:absolute;top:20%;left:43%;">Eraser</div>
        <div style="position:absolute;top:22%;left:45%;width:15px;height:15px;background:white;border:2px solid;" id="white" onclick="color(this)"></div>
        <img id="canvasimg" style="position:absolute;top:10%;left:52%;" style="display:none;">
        <input type="button" value="save" id="btn" size="30" onclick="save()" style="position:absolute;top:55%;left:10%;">
        <input type="button" value="clear" id="clr" size="23" onclick="erase()" style="position:absolute;top:55%;left:15%;">
    </body>
</html> */}
