import { SignIn } from "@clerk/nextjs";

const Login = () => {
  return (
    <div className="flex justify-center items-center py-4">
      <SignIn routing="hash" signUpUrl="/sign-up" />
    </div>
  );
};

export default Login;
