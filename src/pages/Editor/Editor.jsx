import QList from "./components/QList/QList";
import QAdder from "./components/QAdder/QAdder";

import "./Editor.css";

function Editor({ onQuestionAdded, questions }) {
  return (
    <div className="editor">
      <QAdder onQuestionAdded={onQuestionAdded} />
      <QList questions={questions} />
    </div>
  )
}

export default Editor;
