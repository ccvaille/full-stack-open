import React, { useState, useEffect } from "react";
import Note from "./Note";
import noteService from "../../services/notes";
import "./note.css";

const Part2Main = () => {
  let notesData = [];
  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };
  const [notes, setNotes] = useState(notesData);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);
  const hook = () => {
    noteService.getAll().then((initialNotes) => {
      setNotes(initialNotes);
    });
  };
  // 第二个参数 [] 表示只在组件的第一次渲染时运行
  useEffect(hook, []);
  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);
  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    };
    noteService.create(noteObject).then((initialNotes) => {
      setNotes(notes.concat(initialNotes));
      setNewNote("");
    });
  };
  const toggleImportanceOf = (id) => {
    // console.log(id, "important");
    const note = notes.find((n) => n.id === id);
    const changeNote = { ...note, important: !note.important };
    noteService
      .update(id, changeNote)
      .then((initialNotes) => {
        setNotes(notes.map((note) => (note.id !== id ? note : initialNotes)));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h2>PART 2</h2>
      <h2>Notes</h2>
      <button onClick={() => setShowAll(!showAll)}>
        show {showAll ? "important" : "all"}
      </button>
      <ul>
        {notesToShow.map((note) => (
          <Note
            note={note}
            key={note.id}
            toggleImportance={() => toggleImportanceOf(note.id)}
          ></Note>
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input type="text" value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default Part2Main;
