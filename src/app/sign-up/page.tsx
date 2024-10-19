import { SignUp } from "@clerk/nextjs";

const Register = async () => {
  return (
    <div className="flex justify-center items-center py-4">
      <SignUp routing="hash" signInUrl="/sign-in"></SignUp>
    </div>
  );
};

export default Register;
