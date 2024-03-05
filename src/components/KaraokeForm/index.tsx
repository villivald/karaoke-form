import { useReducer } from "react";

import SongSelect from "./SongSelect";
import TextInputField from "./TextInputField";
import ImageInputField from "./ImageInputField";
import MusicModeRadio from "./MusicModeRadio";
import SubmitButton from "./SubmitButton";
import UserAgreementCheckbox from "./UserAgreementCheckbox";

import styles from "../../styles/KaraokeForm.module.css";

// Type for the form state
interface FormState {
  name: string;
  image: string;
  song: string;
  musicMode: string;
  userAgreement: boolean;
}

// Type for the form action
type FormAction = { [key: string]: string | boolean };

export default function KaraokeForm() {
  // Initial state of the form fields
  const initialState: FormState = {
    name: "",
    image: "",
    song: "",
    musicMode: "",
    userAgreement: false,
  };

  // State handler for the form fields
  const [form, updateForm] = useReducer((prev: FormState, next: FormAction) => {
    return { ...prev, ...next };
  }, initialState);

  // Mock form submit handler
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <div className={styles.karaokeFormContainer}>
      <h1>Ilmoittautumislomake</h1>
      <form onSubmit={handleSubmit}>
        <TextInputField value={form.name} setValue={updateForm} />
        <ImageInputField value={form.image} setValue={updateForm} />
        <SongSelect value={form.song} setValue={updateForm} />
        <MusicModeRadio value={form.musicMode} setValue={updateForm} />
        <UserAgreementCheckbox
          value={form.userAgreement}
          setValue={updateForm}
        />
        <SubmitButton disabled={!form.userAgreement} />
      </form>
    </div>
  );
}
