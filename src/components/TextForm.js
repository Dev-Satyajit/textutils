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
  
  return (
    <div className="textForm">
      <div className="container my-3">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={upperCase}>
          Convert to UPPERCASE
        </button>
        <button className="btn btn-primary mx-3" onClick={lowerCase}>
          Convert to lowercase
        </button>
        <button
          type="button"
          class="btn btn-outline-primary"
          onClick={clearText}
        >
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
