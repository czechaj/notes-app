import React from "react";
import { useSelector } from "react-redux";
import { selectNotes, selectFilteredNotes } from "../../redux/notes/notesSlice";
import { Row, Col } from "antd";
import Notes from "./Notes";
function SavedNotes() {
  const savedNotes = useSelector(selectNotes);
  const filteredNotes = useSelector(selectFilteredNotes);

  let filtered = filteredNotes
    ? savedNotes.filter(
        (note) =>
          note.title.toLowerCase().indexOf(filteredNotes.toLowerCase()) !== -1
      )
    : savedNotes;

  return (
    <Row gutter={12}>
      {filtered.map((note) => (
        <Col span={12} key={note.id}>
          <Notes note={note} />
        </Col>
      ))}
    </Row>
  );
}

export default SavedNotes;
