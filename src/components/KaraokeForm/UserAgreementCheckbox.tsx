interface CheckboxProps {
  value: boolean;
  setValue: (value: { userAgreement: string }) => void;
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
        onChange={(event) => setValue({ userAgreement: event.target.value })}
      />
      <label htmlFor="user-agreement-field">
        Sallin tietojeni tallennuksen karaokejärjestelmään
      </label>
    </section>
  );
}
