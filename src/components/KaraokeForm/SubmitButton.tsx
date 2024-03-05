export default function SubmitButton({ disabled }: { disabled: boolean }) {
  return (
    <button type="submit" disabled={disabled}>
      Submit
    </button>
  );
}
