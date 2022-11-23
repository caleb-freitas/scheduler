import { type NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

import google from "../../assets/google.svg";

const SignUp: NextPage = () => {
  return (
    <main className="mt-12 flex justify-center">
      <div className="w-96">
        <header className="pb-5">
          <h2 className="text-2xl font-bold">Sign up</h2>
          <div className="flex gap-1">
            <p className="text-slate-600">Already have an account?</p>
            <Link className="text-blue-600" href="/auth/sign-in">
              Sign in.
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
          <div className="mb-6">
            <label
              htmlFor="password-confirmation"
              className="mb-2 block text-sm font-bold text-slate-900 dark:text-white"
            >
              Password confirmation
            </label>
            <input
              type="password"
              id="password-confirmation"
              className="block w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 text-sm text-slate-900 focus:bg-white"
              placeholder="•••••••••"
              required
            />
          </div>
          <div className="flex flex-col">
            <p className="mb-6 text-sm text-slate-600">
              By registering, you agree to the processing of your personal data
              by Scheduler as described in the{" "}
              <Link
                className="mb-4 text-sm text-blue-600"
                href="/legal/privacy"
              >
                Privacy Policy
              </Link>
              .
            </p>
            <div className="mb-6 flex items-center">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                I&apos;ve read and agree to the{" "}
                <Link
                  className="mb-4 text-sm text-blue-600"
                  href="/legal/terms"
                >
                  Terms of Service
                </Link>
                .
              </label>
            </div>
            <button
              type="button"
              className="mb-2 w-full rounded-lg bg-slate-800 px-5 py-2.5 text-base font-semibold text-white transition-all hover:bg-slate-900 focus:outline-none focus:ring-4 focus:ring-slate-300"
            >
              Sign up
            </button>
          </div>
          <div className="my-4 text-center text-sm text-slate-600">Or</div>
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-base font-semibold text-slate-900 transition-all hover:bg-slate-100 focus:outline-none focus:ring-4 focus:ring-slate-200"
          >
            <Image src={google} alt="google logo" width={20} />
            Continue with Google
          </button>
        </form>
      </div>
    </main>
  );
};

export default SignUp;
