import { useState } from "react";
import QPlaceholder from "../../../../components/QPlaceholder";

function rnd(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const pick = (from) => from[rnd(0, from.length - 1)];

function RandomQ({ questions }) {
  const [qPicked, setQPicked] = useState(pick(questions));

  function randmoizeQuestion() {
    setQPicked(pick(questions));
  }

  return (
    <div className="q-random">
      <QPlaceholder question={qPicked} />
      <button onClick={randmoizeQuestion}>Random</button>
    </div>
  );
}

export default RandomQ;
