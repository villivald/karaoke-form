interface FormFieldProps {
  value: string;
  setValue: (value: { musicMode: string }) => void;
}

export default function MusicModeRadio({ value, setValue }: FormFieldProps) {
  const options = ["-2", "-1", "0", "1", "2"];

  return (
    <fieldset>
      <legend>Sävellaji*</legend>
      {options.map((option, index) => {
        return (
          <label key={index}>
            <input
              type="radio"
              value={option}
              checked={value === option}
              onChange={(event) => setValue({ musicMode: event.target.value })}
            />
            {option}
          </label>
        );
      })}
    </fieldset>
  );
}
