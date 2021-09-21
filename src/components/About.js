import React from "react";
import { Helmet } from "react-helmet";
export default function About() {
  return (
    <div className="about">
      <Helmet>
        <title>TextUtils | About</title>
      </Helmet>
      <div className="container">
        <h1>About TextUtils</h1>
        <p>
          You can use this application to convert your text to UPPERCASE,
          lowercase, Sentence case and also can determine the number of words
          and characters.
        </p>
      </div>
    </div>
  );
}
