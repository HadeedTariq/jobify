"use client";

import { useAuth } from "@clerk/nextjs";

const SignOut = () => {
  const { signOut } = useAuth();

  return (
    <button
      onClick={() => signOut()}
      className="rounded-2xl bg-red-600 px-4 py-2 font-bold leading-none text-white"
    >
      SignOut
    </button>
  );
};

export default SignOut;
