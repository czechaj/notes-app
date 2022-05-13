import { useState } from "react";
import { Modal, Card, Input, Button } from "antd";
import { changeNote, dropNote } from "../../redux/notes/notesSlice";
import { useDispatch } from "react-redux";

function Notes({ note }) {
  const [newTitle, setNewTitle] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const dispatch = useDispatch();

  return (
    <>
      <Card
        onClick={showModal}
        bordered={false}
        hoverable
        style={{ backgroundColor: note.color }}
      >
        <div style={{ textAlign: "end" }}> </div>
        <h2 className="card-text"> {note.title} </h2>
      </Card>
      <Modal
        visible={isModalVisible}
        onCancel={() => {
          setIsModalVisible(false);
        }}
        footer={[
          <Button
            key={"back"}
            type="danger"
            onClick={() => {
              dispatch(dropNote({ id: note.id }));
              setIsModalVisible(false);
            }}
          >
            Delete note
          </Button>,
          <Button
            key={"submit"}
            type="primary"
            onClick={() => {
              if (newTitle !== "") {
                dispatch(changeNote({ id: note.id, title: newTitle }));
              }
              setIsModalVisible(false);
            }}
          >
            Edit note
          </Button>,
        ]}
      >
        <Input.TextArea
          style={{ backgroundColor: note.color }}
          onChange={(e) => {
            setNewTitle(e.target.value);
          }}
          defaultValue={note.title}
          rows="10"
        />
      </Modal>
    </>
  );
}

export default Notes;
