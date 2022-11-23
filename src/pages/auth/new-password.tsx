import { type NextPage } from "next";

const NewPassword: NextPage = () => {
  return (
    <main className="mt-32 flex justify-center">
      <div className="w-96">
        <header>
          <h2 className="pb-5 text-2xl font-bold">Reset your password</h2>
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
              required
              id="email"
              type="email"
              placeholder="john.doe@company.com"
              className="block w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 text-base text-slate-900 focus:bg-white"
            />
          </div>
          <button
            type="button"
            className="mr-2 mb-2 rounded-lg bg-slate-800 px-5 py-2.5 text-base font-semibold text-white transition-all hover:bg-slate-900"
          >
            Reset password
          </button>
        </form>
      </div>
    </main>
  );
};

export default NewPassword;
