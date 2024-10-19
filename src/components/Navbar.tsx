"use client";
import { SignedOut, SignOutButton, useAuth } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
  const { userId,signOut } = useAuth();

  return (
    <header className="sticky inset-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-6xl gap-8 px-6 transition-all duration-200 ease-in-out lg:px-12 py-4">
        <div className="relative flex items-center">
          <img
            src="https://www.svgrepo.com/show/499831/target.svg"
            loading="lazy"
            width="32"
            height="32"
          />
        </div>

        <div className="flex-grow"></div>
        <div className="items-center justify-center gap-6 flex">
          {!userId ? (
            <>
              <Link
                className="px-8 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
                href="/sign-in"
              >
                SignIn
              </Link>

              <Link
                className="px-6 py-2 min-w-[120px] text-center text-violet-600 border border-violet-600 rounded hover:bg-violet-600 hover:text-white active:bg-indigo-500 focus:outline-none focus:ring"
                href="/sign-up"
              >
                SignUp
              </Link>
            </>
          ) : (
            <button
              onClick={()=>signOut()}
              className="rounded-2xl bg-red-600 px-4 py-2 font-bold leading-none text-white"
            >
              SignOut
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
