import { Input, Space } from "antd";
import { useDispatch } from "react-redux";
import { filterNotes } from "../../redux/notes/notesSlice";

function SearchInNotes() {
  const dispatch = useDispatch();
   

  const handleChange = (e) => {
    dispatch(filterNotes(e.target.value));
  };

  return (
    <Space direction="vertical" style={{ margin: "2vh auto" }}>
      <Input
        onChange={handleChange}
        placeholder="Search in notes"
        allowClear
        bordered
        style={{ width: "100%" }}
      />
    </Space>
  );
}

export default SearchInNotes;
