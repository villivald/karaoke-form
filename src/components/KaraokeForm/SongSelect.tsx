interface FormFieldProps {
  value: string;
  setValue: (value: { song: string }) => void;
}

export default function SongSelect({ value, setValue }: FormFieldProps) {
  return (
    <section>
      <label htmlFor="song-field">Biisi*</label>
      <select
        id="song-field"
        value={value}
        onChange={(event) => setValue({ song: event.target.value })}
        required
      >
        <option value="song1">Song 1</option>
        <option value="song2">Song 2</option>
        <option value="song3">Song 3</option>
      </select>
    </section>
  );
}
