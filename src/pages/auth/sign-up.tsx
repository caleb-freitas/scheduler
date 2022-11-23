import { type NextPage } from "next";
import Link from "next/link";

const SignUp: NextPage = () => {
  return (
    <>
      <header>
        <h1>Sign up</h1>
        <p>Already have an account?</p>
        <Link href="/auth/sign-in">Sign in.</Link>
      </header>
    </>
  );
};

export default SignUp;
