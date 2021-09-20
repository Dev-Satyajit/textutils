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
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <div>
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
    </div>
  );
}
