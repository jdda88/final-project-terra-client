import { createContext, useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import api from "../service/api";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const login = async (body) => {
    try {
      let response;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

      if (emailRegex.test(body.loginInfo)) {
        response = await api.post("/user/login", {
          password: body.password,
          email: body.loginInfo,
        });
      } else {
        response = await api.post("/user/login", {
          password: body.password,
          username: body.loginInfo,
        });
      }
      if (response.status === 201 || response.status === 200) {
        setUser(response.data);
        setLoggedIn(true);
        localStorage.setItem("authToken", response.data.authToken);
        navigate("/");
      }
    } catch (error) {
      setUser(null);
      setLoggedIn(false);
      localStorage.clear();
      console.log("log in error here -->>", error);
      return error;
    }
  };

  const signup = async (body) => {
    try {
      const response = await api.post("/user/signup", body);

      if (response.status === 201 || response.status === 200) {
        navigate("/login");
      }
    } catch (error) {
      console.log("sign in error here -->>", error);
      return error;
    }
  };

  const verify = async () => {
    try {
      const response = await api.get("/user/verify");
      setUser(response.data.user);
      setLoggedIn(true);
    } catch (error) {
      setUser(null);
      setLoggedIn(false);
      localStorage.clear();
      console.log("user not verified -->>", error);
      return error;
    }
  };

  const logout = () => {
    setUser(null);
    setLoggedIn(false);
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    verify();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, signup, loggedIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
