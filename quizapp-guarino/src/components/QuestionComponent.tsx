interface Props {
  number: number;
  text: string;
}

function QuestionComponent({ number, text }: Props) {
  return (
    <div>
      <h3>Q#{number}</h3>
      <p className="question">{text}</p>
    </div>
  );
}

export default QuestionComponent;