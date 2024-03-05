import { useReducer, useState } from "react";

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

  const [loading, setLoading] = useState(false);

  // State handler for the form fields
  const [form, updateForm] = useReducer((prev: FormState, next: FormAction) => {
    return { ...prev, ...next };
  }, initialState);

  // Mock form submit handler
  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    // Simulate loading state (5 seconds)
    setLoading(true);

    setTimeout(() => {
      // Reset loading state
      setLoading(false);

      // Reset form state
      updateForm({
        name: "",
        image: "",
        song: "",
        musicMode: "",
        userAgreement: false,
      });
    }, 5000);

    // Log form data to the console
    event.preventDefault();
    console.log(form);
  };

  // Disable the submit button if any of the required fields are empty or the form is in loading state
  const submitButtonDisabled =
    loading ||
    !form.name ||
    !form.song ||
    !form.musicMode ||
    !form.userAgreement;

  return (
    <div className={styles.karaokeFormContainer}>
      <h1>Ilmoittautumislomake</h1>
      <form onSubmit={handleSubmitForm}>
        <TextInputField value={form.name} setValue={updateForm} />
        <ImageInputField value={form.image} setValue={updateForm} />
        <SongSelect value={form.song} setValue={updateForm} />
        <MusicModeRadio value={form.musicMode} setValue={updateForm} />
        <UserAgreementCheckbox
          value={form.userAgreement}
          setValue={updateForm}
        />
        <SubmitButton disabled={submitButtonDisabled} loading={loading} />
      </form>
    </div>
  );
}
