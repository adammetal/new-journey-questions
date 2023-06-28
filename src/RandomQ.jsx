import QPlaceholder from "./QPlaceholder";

function RandomQ() {
  return (
    <div className="q-random">
      <QPlaceholder question="Random Question" />
      <button>Random</button>
    </div>
  );
}

export default RandomQ;
