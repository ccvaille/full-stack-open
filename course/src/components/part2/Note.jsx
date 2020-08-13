import React from "react";

const Note = (props) => {
  const { note, toggleImportance } = props;
  const label = note.important ? "make not important" : "make important";
  const btnStyle = {
    fontStyle: "italic",
    display: "inline-block",
    marginLeft: "20px",
  };
  return (
    <>
      <li className="note">
        {note.content}
        <button style={btnStyle} onClick={toggleImportance}>
          {label}
        </button>
      </li>
    </>
  );
};

export default Note;
