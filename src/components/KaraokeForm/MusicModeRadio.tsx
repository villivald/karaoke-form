import styles from "../../styles/MusicModeRadio.module.css";

interface MusicModeRadioProps {
  value: string;
  setValue: (value: { musicMode: string }) => void;
}

export default function MusicModeRadio({
  value,
  setValue,
}: MusicModeRadioProps) {
  const options = ["-2", "-1", "0", "+1", "+2"];

  return (
    <fieldset className={styles.musicMode}>
      <legend>Sävellaji*</legend>
      <section>
        {options.map((option, index) => {
          return (
            <label
              key={index}
              data-checked={value === option}
              tabIndex={0}
              onChange={() => setValue({ musicMode: option })}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  setValue({ musicMode: option });
                }
              }}
            >
              <input
                tabIndex={-1}
                type="radio"
                value={option}
                checked={value === option}
                onChange={(event) =>
                  setValue({ musicMode: event.target.value })
                }
              />
              {option}
            </label>
          );
        })}
      </section>
    </fieldset>
  );
}
