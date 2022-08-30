import AuthForm from "../components/auth/auth-form";

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-5xl m-10">Login Page</h1>
      <AuthForm />
    </div>
  );
};

export default Login;
