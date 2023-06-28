import { useState } from "react";
import Editor from "./Editor";
import Home from "./Home";

import "./App.css";

function App() {
  const [page, setPage] = useState("editor");

  let comp;

  if (page === 'editor') {
    comp = <Editor />
  } else {
    comp = <Home />
  }

  return (
    <div className="app">
      {comp}
    </div>
  );
}

export default App;
