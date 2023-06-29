import "./QList.css";

function QListItem({ question }) {
  return (
    <li>
      {question}{" "}
      <div>
        <button>+</button>
        <button>-</button>
      </div>
    </li>
  );
}

function QList(props) {
  // array of strings
  const { questions } = props;

  return (
    <div className="q-list">
      <ul>
        {questions.map((question, i) => (
          <QListItem key={i} question={question} />
        ))}
      </ul>
    </div>
  );
}

export default QList;
