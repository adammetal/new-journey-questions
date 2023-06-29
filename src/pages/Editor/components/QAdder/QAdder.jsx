import QPlaceholder from "../../../../components/QPlaceholder";
import QAdderForm from "./QAdderForm";
import { useState } from "react";

function QAdder(props) {
  const onQuestionAdded = props.onQuestionAdded;
  const [newQuestion, setNewQuestion] = useState("");

  function handleQuestionChange(text) {
    setNewQuestion(text);
  }

  return (
    <>
      <QPlaceholder question={newQuestion} />
      <QAdderForm onQuestionAdded={onQuestionAdded} onQuestionChange={handleQuestionChange} question={newQuestion} />
    </>
  );
}

export default QAdder;
