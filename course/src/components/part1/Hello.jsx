// React should always be imported in a particular file, that uses JSX if you are working with this library(React) in your project.
import React from "react";

const Hello = (props) => (
  <div>
    <p>
      Hello {props.name}, you are {props.age || 22} years old
    </p>
  </div>
);

export default Hello;
