import { useRef } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

const AuthForm = () => {
  const usernameInputRef = useRef();
  const passwordInputref = useRef();

  const router = useRouter();

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredUsername = usernameInputRef.current.value;
    const enteredPassword = passwordInputref.current.value;

    const result = await signIn("credentials", {
      redirect: false,
      username: enteredUsername,
      password: enteredPassword,
    });
    router.replace("/admin");
  };

  return (
    <section>
      <form onSubmit={submitHandler}>
        <div className="m-5">
          <label htmlFor="username" className="m-5">
            Username
          </label>
          <input
            type="text"
            id="username"
            required
            placeholder="type your username"
            ref={usernameInputRef}
          ></input>
        </div>
        <div className="m-5">
          <label htmlFor="password" className="m-5">
            Password
          </label>
          <input
            type="password"
            id="password"
            required
            placeholder="type your password"
            ref={passwordInputref}
          ></input>
        </div>
        <div className="m-5">
          <button type="submit" className="m-5">
            Log in
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
