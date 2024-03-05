import songsData from "./songsData.json";

interface SongSelectProps {
  value: string;
  setValue: (value: { song: string }) => void;
}

export default function SongSelect({ value, setValue }: SongSelectProps) {
  return (
    <section>
      <label htmlFor="song-field">Biisi*</label>
      <select
        id="song-field"
        value={value}
        onChange={(event) => setValue({ song: event.target.value })}
        required
      >
        <option value="" disabled hidden>
          Valitse alta
        </option>
        {songsData.map((song) => (
          <option key={song.id} value={`${song.author} - ${song.title}`}>
            {`${song.author} - ${song.title}`}
          </option>
        ))}
      </select>
    </section>
  );
}
