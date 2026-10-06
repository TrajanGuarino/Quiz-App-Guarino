interface Props {
  total: number;
  results: (boolean | null)[]; // true = correct, false = wrong, null = unanswered
}

function ProgressComponent({ total, results }: Props) {
  const marks = [];
  for (let i = 0; i < total; i++) {
    let symbol = '_';
    if (results[i] === true) symbol = '✓';
    else if (results[i] === false) symbol = '✗';
    marks.push(<span key={i} className="mark">{symbol}</span>);
  }

  return (
    <div className="progress">
      Progress: {marks}
    </div>
  );
}

export default ProgressComponent;