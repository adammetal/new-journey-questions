import QList from "./QList";
import QAdder from "./QAdder";

import "./Editor.css";
import { useState } from "react";

function Editor() {
  const [funnyQuestions, setFunnyQuestions] = useState([
    "If you could communicate with animals for a day, which species would you choose and what would you talk about?",
    "If you were a superhero, what would your totally useless superpower be?",
    "What's the most absurd thing you've ever done to avoid doing something productive?",
    "If you were a vegetable, which one would you be and why?",
    "If you could replace the sound of one common household item with your own voice, what item would you choose and what would you say?"
  ]);

  function handleAddQuestion(question) {
    // immulatble
    // replace the old state
    setFunnyQuestions([...funnyQuestions, question]);
  }

  return (
    <div className="editor">
      <QAdder onQuestionAdded={handleAddQuestion} />
      <QList questions={funnyQuestions} />
    </div>
  )
}

export default Editor;
