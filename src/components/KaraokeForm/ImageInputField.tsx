interface FormFieldProps {
  value: string;
  setValue: (value: { image: string }) => void;
}

export default function ImageInputField({ value, setValue }: FormFieldProps) {
  return (
    <section>
      <label htmlFor="image-field">Kasvokuva</label>
      <input
        type="file"
        id="image-field"
        value={value}
        onChange={(event) => setValue({ image: event.target.value })}
      />
    </section>
  );
}
