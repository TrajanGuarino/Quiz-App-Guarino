interface Props {
  label: string;
  index: number;
  selected: boolean;
  locked: boolean;
  isCorrect: boolean;
  onSelect: (index: number) => void;
}

function OptionComponent({ label, index, selected, locked, isCorrect, onSelect }: Props) {
  let cls = 'option';
  if (locked && isCorrect) cls += ' correct';
  else if (locked && selected) cls += ' wrong';

  return (
    <label className={cls}>
      <input
        type="radio"
        checked={selected}
        disabled={locked}
        onChange={() => onSelect(index)}
      />
      {label}
    </label>
  );
}

export default OptionComponent;