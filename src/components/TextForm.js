import React, { useState } from "react";

export default function TextForm(props) {
  const upperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const lowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const clearText = () => {
    setText("");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter your text here");

  if (text.length === 0) {
    var word = 0;
  } else {
    word = text.split(" ").length;
  }

  const [myStyle, setMyStyle] = useState({
    color: "inherit",
  });
  const [btnType, setBtnType] = useState("btn btn-primary mx-2");
  const [clrBtnType, setClrBtnType] = useState("btn btn-outline-primary mx-2");
  const [btnTxt, setBtnTxt] = useState("Enable dark mode");

  const toggleMode = () => {
    if (myStyle.color === "inherit") {
      setBtnTxt("Disable dark mode");
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setBtnType("btn btn-outline-light mx-2");
      setClrBtnType("btn btn-light mx-2");
    } else {
      setBtnTxt("Enable dark mode");
      setMyStyle({
        color: "inherit",
      });
      setBtnType("btn btn-primary mx-2");
      setClrBtnType("btn btn-outline-primary mx-2");
    }
  };

  return (
    <div className="textForm" style={myStyle}>
      <button className={btnType + " my-3"} onClick={toggleMode}>
        {btnTxt}
      </button>
      <div className="container my-3">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={myStyle}
          ></textarea>
        </div>
        <button className={btnType} onClick={upperCase}>
          Convert to UPPERCASE
        </button>
        <button className={btnType} onClick={lowerCase}>
          Convert to lowercase
        </button>
        <button type="button" className={clrBtnType} onClick={clearText}>
          Clear text
        </button>
      </div>
      <div className="container">
        <h1>Text summery</h1>
        <p>
          {word} words and {text.length} characters
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
