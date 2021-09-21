import React, { useState } from "react";
import { Helmet } from "react-helmet";
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

  const [text, setText] = useState("");

  if (text.length === 0) {
    var word = 0;
  } else {
    word = text.split(" ").length;
  }

  const [myStyle, setMyStyle] = useState({
    color: "inherit",
  });
  const [myStyle1, setMyStyle1] = useState({
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
        backgroundColor: "#18191A",
      });
      setMyStyle1({
        color: "white",
        backgroundColor: "#242526",
        border: "none",
      });
      setBtnType("btn btn-outline-light mx-2");
      setClrBtnType("btn btn-light mx-2");
    } else {
      setBtnTxt("Enable dark mode");
      setMyStyle({
        color: "inherit",
      });
      setMyStyle1({});
      setBtnType("btn btn-primary mx-2");
      setClrBtnType("btn btn-outline-primary mx-2");
    }
  };

  return (
    <div className="textForm" style={myStyle}>
      <Helmet>
        <title>TextUtils | Home</title>
      </Helmet>
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
            style={myStyle1}
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
