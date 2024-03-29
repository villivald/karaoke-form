interface TextInputFieldProps {
  value: string;
  setValue: (value: { name: string }) => void;
}

export default function TextInputField({
  value,
  setValue,
}: TextInputFieldProps) {
  return (
    <section>
      <label htmlFor="name-field">Nimi tai nimimerkki*</label>
      <input
        id="name-field"
        value={value}
        onChange={(event) => setValue({ name: event.target.value })}
        required
      />
    </section>
  );
}
