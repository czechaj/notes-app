import React, { useState } from "react";
import { Button, message } from "antd";
import { useDispatch } from "react-redux";
import { addNote } from "../../redux/notes/notesSlice";
import { nanoid } from "@reduxjs/toolkit";

const colors = ["#FBD6D2", "#BAABDA", "#E4E9BE", "#BDE6F1", "#C1F4C5"];

function NewNote() {
  const [title, setTitle] = useState("");
  const [selectedColor, setSelectedColor] = useState("#C1F4C5");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const selectColor = (color) => {
    setSelectedColor(color);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() !== "") {
      dispatch(addNote({ title: title, color: selectedColor, id: nanoid() }));
      setSelectedColor("#C1F4C5");
    } else
      message.warning({ content: "You can not add blank notes", duration: 2 });
    setTitle("");
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          boxShadow: "1px 1px 1px 1px rgba(128,128,128, 0.2)",
          backgroundColor: "white",
        }}
      >
        <textarea
          placeholder="Enter your note here"
          value={title}
          onChange={handleChange}
          rows={4}
          style={{
            resize: "none",
            outline: "none",
            border: "none",
            padding: "1rem 1rem",
            width: "100%",
          }}
        />

        <div className="newNote-submit">
          <div className="colors" style={{ display: "flex" }}>
            {colors.map((color, i) => (
              <figure
                key={i}
                className="circle"
                style={{ backgroundColor: color }}
                onClick={() => {
                  selectColor(color);
                }}
              >
                {color === selectedColor ? "✓" : ""}
              </figure>
            ))}
          </div>
          <div>
            <Button type="outline" htmlType="submit" size="small">
              Add Note
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}

export default NewNote;
