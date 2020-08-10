import React from "react";

const Statistics = ({ text, value }) => {
  return (
    <div>
      {value ? (
        <p>
          {text}:{value}
        </p>
      ) : (
        "No feedback given"
      )}
    </div>
  );
};
export default Statistics;
