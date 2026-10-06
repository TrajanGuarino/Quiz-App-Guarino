import { useState } from 'react';
import { questions } from '../questions';
import ProgressComponent from './ProgressComponent';
import QuestionComponent from './QuestionComponent';
import OptionComponent from './OptionComponent';

interface Props {
  onFinish: (score: number) => void;
}

function QuestionPageComponent({ onFinish }: Props) {
  const [current, setCurrent] = useState(0);
  const [picked, setPicked] = useState<(number | null)[]>(Array(questions.length).fill(null));

  const q = questions[current];
  const chosen = picked[current];
  const locked = chosen !== null;
  const isLast = current === questions.length - 1;

  const results = picked.map((p, i) => (p === null ? null : p === questions[i].answer));

  function handleSelect(optionIndex: number) {
    if (locked) return;
    const copy = [...picked];
    copy[current] = optionIndex;
    setPicked(copy);
  }

  function handleNext() {
    if (isLast) {
      onFinish(results.filter((r) => r === true).length);
    } else {
      setCurrent(current + 1);
    }
  }

  return (
    <div className="box">
      <ProgressComponent total={questions.length} results={results} />
      <QuestionComponent number={q.id} text={q.text} />
      {q.options.map((opt, i) => (
        <OptionComponent
          key={i}
          label={opt}
          index={i}
          selected={chosen === i}
          locked={locked}
          isCorrect={i === q.answer}
          onSelect={handleSelect}
        />
      ))}
      <button disabled={!locked} onClick={handleNext}>
        {isLast ? 'Finish' : 'Next'}
      </button>
    </div>
  );
}

export default QuestionPageComponent;