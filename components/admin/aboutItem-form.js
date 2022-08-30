import { useRef } from "react";
const axios = require("axios");

const AboutItemForm = () => {
  const titleInputRef = useRef();
  const subtitleInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredSubtitle = subtitleInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    await axios.post("/api/home/aboutItem", {
      title: enteredTitle,
      subtitle: enteredSubtitle,
      description: enteredDescription,
    });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.name}>Add About Item</h1>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.input}>
          <label htmlFor="title" className={styles.margin}>
            title
          </label>
          <input
            type="text"
            id="title"
            required
            placeholder="type title"
            ref={titleInputRef}
          ></input>
        </div>
        <div className={styles.input}>
          <label htmlFor="subtitle" className={styles.margin}>
            subtitle
          </label>
          <input
            type="text"
            id="subtitle"
            required
            placeholder="type subtitle"
            ref={subtitleInputRef}
          ></input>
        </div>
        <div className={styles.textarea}>
          <label htmlFor="description" className={styles.margin}>
            description
          </label>
          <textarea
            className="mt-5"
            type="text"
            id="description"
            required
            placeholder="type description"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={styles.button}>
          <button type="submit" className={styles.margin}>
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

const styles = {
  container:
    "flex flex-col items-center m-10 p-10 border-2 border-black dark:border-white rounded-3xl",
  name: "text-3xl font-extrabold underline underline-offset-8 mb-3",
  form: "flex flex-col justify-center items-end text-xl",
  input: "m-5 underline underline-offset-8",
  textarea: "flex flex-row justify-stretch items-stretch my-2 mx-5",
  button: "mr-36",
  margin: "m-5",
};

export default AboutItemForm;
