import { useState } from "react";
import Editor from "./pages/Editor";
import Home from "./pages/Home";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";

function App() {
  const [page, setPage] = useState("home");

  const [funnyQuestions, setFunnyQuestions] = useState([
    "If you could communicate with animals for a day, which species would you choose and what would you talk about?",
    "If you were a superhero, what would your totally useless superpower be?",
    "What's the most absurd thing you've ever done to avoid doing something productive?",
    "If you were a vegetable, which one would you be and why?",
    "If you could replace the sound of one common household item with your own voice, what item would you choose and what would you say?",
  ]);

  function handleAddQuestion(question) {
    setFunnyQuestions([...funnyQuestions, question]);
  }

  let comp;

  if (page === "editor") {
    comp = (
      <Editor questions={funnyQuestions} onQuestionAdded={handleAddQuestion} />
    );
  } else {
    comp = <Home questions={funnyQuestions} />;
  }

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            New Journey
          </Typography>
          <Button color="inherit" onClick={() => setPage("home")}>
            Home
          </Button>
          <Button color="inherit" onClick={() => setPage("editor")}>
            Editor
          </Button>
        </Toolbar>
      </AppBar>
      {comp}
    </Box>
  );
}

export default App;
