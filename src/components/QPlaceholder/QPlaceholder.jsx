import "./QPlaceholder.css";

function QPlaceholder(props) {
  const question = props.question;

  // The return value will be the "view" of this component.
  return (
    <div className="q-placeholder">
      <h1>{question}</h1>
      <div>
        <button>+</button>
        <button>-</button>
      </div>
    </div>
  );
}

export default QPlaceholder;
