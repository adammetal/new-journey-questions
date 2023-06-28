import "./QList.css";

function QList(props) {
  // array of strings
  const questions = props.questions;

  const qs = [];

  for (let i = 0; i < questions.length; i++) {
    qs.push(
      <li key={i}>
        {questions[i]}{" "}
        <div>
          <button>+</button>
          <button>-</button>
        </div>
      </li>
    );
  }

  return (
    <div className="q-list">
      <ul>
        {qs}
      </ul>
    </div>
  );
}

export default QList;
