import "./QAdderForm.css";

function QAdderForm(props) {
  const question = props.question;
  const onQuestionChange = props.onQuestionChange;
  const onQuestionAdded = props.onQuestionAdded;

  return (
    <div className="q-adder-form">
      <input
        value={question}
        onChange={(e) => {
          onQuestionChange(e.target.value);
        }}
        type="text"
        placeholder="Type your question here"
      />
      <button onClick={() => {
        onQuestionAdded(question);
        onQuestionChange("");
      }}>Save</button>
    </div>
  );
}

export default QAdderForm;
