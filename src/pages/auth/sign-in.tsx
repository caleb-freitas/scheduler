import { type NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut } from "next-auth/react";

import google from "../../assets/google.svg";

const SignIn: NextPage = () => {
  return (
    <main className="mt-32 flex justify-center">
      <div className="w-96">
        <header className="pb-5">
          <h2 className="text-2xl font-bold">Sign in</h2>
          <div className="flex gap-1">
            <p className="text-slate-600">New to scheduler?</p>
            <Link className="text-blue-600" href="/auth/sign-up">
              Sign up for an account.
            </Link>
          </div>
        </header>
        <form className="w-full">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-bold text-slate-900"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="block w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 text-base text-slate-900 focus:bg-white"
              placeholder="john.doe@company.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-bold text-slate-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="block w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 text-sm text-slate-900 focus:bg-white"
              placeholder="•••••••••"
              required
            />
          </div>
          <div className="flex flex-col">
            <Link
              className="mb-4 text-slate-600 transition-all hover:text-blue-600"
              href="/auth/new-password"
            >
              Forgot password?
            </Link>
            <button
              type="button"
              className="mb-2 w-full rounded-lg bg-slate-800 px-5 py-2.5 text-base font-semibold text-white transition-all hover:bg-slate-900 focus:outline-none focus:ring-4 focus:ring-slate-300"
            >
              Sign in
            </button>
          </div>
          <div className="my-4 text-center text-sm text-slate-600">Or with</div>
          <button
            type="button"
            onClick={() => signIn()}
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-base font-semibold text-slate-900 transition-all hover:bg-slate-100 focus:outline-none focus:ring-4 focus:ring-slate-200"
          >
            <Image src={google} alt="google logo" width={20} />
            Google
          </button>
          <button
            type="button"
            onClick={() => signOut()}
            className="my-6 hidden w-full rounded-lg bg-slate-800 px-5 py-2.5 text-base font-semibold text-white transition-all hover:bg-slate-900 focus:outline-none focus:ring-4 focus:ring-slate-300"
          >
            Sign out
          </button>
        </form>
      </div>
    </main>
  );
};

export default SignIn;
