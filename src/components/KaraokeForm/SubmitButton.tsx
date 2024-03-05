import styles from "../../styles/SubmitButton.module.css";

interface SubmitButtonProps {
  disabled: boolean;
  loading: boolean;
}

export default function SubmitButton({ disabled, loading }: SubmitButtonProps) {
  return (
    <button type="submit" disabled={disabled}>
      {loading ? <div className={styles.spinner}></div> : "Ilmoittaudu"}
    </button>
  );
}
