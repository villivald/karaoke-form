import { useRef } from "react";

import styles from "../../styles/ImageInputField.module.css";

interface ImageInputFieldProps {
  value: string;
  setValue: (value: { image: string }) => void;
}

export default function ImageInputField({
  value,
  setValue,
}: ImageInputFieldProps) {
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  // Mock function to handle file upload
  const handleFileUpload = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    hiddenFileInput.current!.click();
  };

  return (
    <section className={styles.imageInputField}>
      <label htmlFor="image-field">Kasvokuva</label>
      <button onClick={handleFileUpload} data-image={value ? true : false}>
        {value ? "✅ Kuva on lisätty onnistuneesti" : "+ Tuo kasvokuva"}
      </button>
      <input
        type="file"
        id="image-field"
        value={value}
        ref={hiddenFileInput}
        onChange={(event) => setValue({ image: event.target.value })}
      />
    </section>
  );
}
