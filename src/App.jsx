import { useState } from "react";
import Editor from "./pages/Editor";
import Home from "./pages/Home";

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
