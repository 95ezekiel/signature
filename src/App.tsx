import React, { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import "./App.css";

function App() {
    const sigCanvasRef = useRef(null);
    const [savedSignature, setSavedSignature] = useState("");

    // 서명 지우기
    const clearSignature = () => {
        sigCanvasRef.current.clear();
        setSavedSignature("");
    };

    // 서명 저장 (Base64)
    const saveSignature = () => {
        const dataURL = sigCanvasRef.current.toDataURL("image/png");
        setSavedSignature(dataURL);
    };

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h2>React Signature Pad</h2>

            {/* 서명 캔버스 */}
            <div
                style={{
                    border: "2px solid black",
                    display: "inline-block",
                    padding: "5px",
                }}
            >
                <SignatureCanvas
                    ref={sigCanvasRef}
                    penColor="black"
                    canvasProps={{
                        width: 500,
                        height: 200,
                        className: "sigCanvas",
                    }}
                />
            </div>

            {/* 버튼 */}
            <div style={{ marginTop: "10px" }}>
                <button onClick={clearSignature} style={{ marginRight: "10px" }}>
                    Clear
                </button>
                <button onClick={saveSignature}>Save</button>
            </div>

            {/* 저장된 서명 미리보기 */}
            {savedSignature && (
                <div style={{ marginTop: "20px" }}>
                    <h3>Saved Signature</h3>
                    <img src={savedSignature} alt="Saved Signature" style={{ border: "1px solid gray" }} />
                </div>
            )}
        </div>
    );
}

export default App;