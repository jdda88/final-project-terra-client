import { useState, useContext } from "react";
import { AuthContext } from "../context/auth.context.jsx";

function SignupForm() {
  const [signupInfo, setSignupInfo] = useState({
    email: "",
    username: "",
    password: "",
  });

  const { signup } = useContext(AuthContext);

  const handleChande = (e) => {
    setSignupInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <h1 className="mb-10 mt-10 text-center text-customGreen text-2xl">
        Signup
      </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          signup(signupInfo);
        }}
        className="flex flex-col items-center "
      >
        <label htmlFor="">
          Email <span className="text-red-600">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={signupInfo.email}
          onChange={handleChande}
          className="mt-1 mb-5 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-72 block rounded-md sm:text-sm focus:ring-1"
          placeholder="you@example.com"
        />
        <label htmlFor="">
          Username <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          name="username"
          value={signupInfo.username}
          onChange={handleChande}
          className="mt-1 mb-5 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-72 block rounded-md sm:text-sm focus:ring-1"
        />
        <label htmlFor="">
          Password <span className="text-red-600">*</span>
        </label>
        <input
          type="password"
          name="password"
          value={signupInfo.password}
          onChange={handleChande}
          className="mt-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-72 block rounded-md sm:text-sm focus:ring-1"
        />

        <button className="bg-customGreen text-white rounded w-24 h-9 mt-6 hover:bg-customGreenHover">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
