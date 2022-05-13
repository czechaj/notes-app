import Header from "../Header";
import SearchInNotes from "../SearchInNotes";
import NewNote from "../NewNote";
import SavedNotes from "../SavedNotes";
import Footer from "../Footer";
function Container() {
  return (
    <div  className={"container"}>
      <Header />
      <SearchInNotes />
      <NewNote />
      <SavedNotes />
      <Footer />
    </div>
  );
}

export default Container;
