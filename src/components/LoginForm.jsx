import { useState, useContext } from "react";
import { AuthContext } from "../context/auth.context.jsx";

function LoginForm() {
  const [loginInfo, setLoginInfo] = useState({
    loginInfo: "",
    password: "",
  });

  const { login } = useContext(AuthContext);

  const handleChande = (e) => {
    setLoginInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <h1 className="mb-10 mt-10 text-center text-customGreen text-2xl">
        Login
      </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          login(loginInfo);
        }}
        className="flex flex-col items-center "
      >
        <label htmlFor="loginInfo">
          Username or Email
        </label>
        <input
          type="text"
          name="loginInfo"
          value={loginInfo.loginInfo}
          onChange={handleChande}
          className="mt-1 mb-5 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-72 block rounded-md sm:text-sm focus:ring-1"
        />
        <label htmlFor="">
          Password 
        </label>
        <input
          type="password"
          name="password"
          value={loginInfo.password}
          onChange={handleChande}
          className="mt-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-72 block rounded-md sm:text-sm focus:ring-1"
        />

        <button className="bg-customGreen text-white rounded w-24 h-9 hover:bg-customGreenHover transition transform hover:scale-105 hover:shadow-xl mt-3">
          Submit
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
