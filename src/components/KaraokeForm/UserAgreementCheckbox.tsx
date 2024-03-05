interface CheckboxProps {
  value: boolean;
  setValue: (value: { userAgreement: boolean }) => void;
}

export default function UserAgreementCheckbox({
  value,
  setValue,
}: CheckboxProps) {
  return (
    <section>
      <input
        type="checkbox"
        id="user-agreement-field"
        checked={value}
        onChange={(event) => setValue({ userAgreement: event.target.checked })}
      />
      <label htmlFor="user-agreement-field">
        Sallin tietojeni tallennuksen karaokejärjestelmään
      </label>
    </section>
  );
}
