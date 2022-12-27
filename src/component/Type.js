import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Developer",
          "React.js Developer",
          "Frontend web developer",
        ],
        autoStart: true,
        loop: true, 
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;