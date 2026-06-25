import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api/api";
import { FaEnvelope, FaLock, FaPlaneDeparture } from "react-icons/fa";

function Login() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", loginData);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert(res.data.message);

      navigate("/home");
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600')",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative bg-white/15 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl w-full max-w-md p-8 text-white">

        <div className="flex justify-center mb-6">
          <FaPlaneDeparture className="text-5xl text-cyan-300" />
        </div>

        <h1 className="text-4xl font-bold text-center">
          Welcome Back
        </h1>

        <p className="text-center text-gray-200 mt-2 mb-8">
          Login to continue your journey.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div className="relative">
            <FaEnvelope className="absolute left-4 top-4 text-gray-500" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              required
              className="w-full bg-white rounded-xl py-3 pl-12 pr-4 text-black outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <div className="relative">
            <FaLock className="absolute left-4 top-4 text-gray-500" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
              className="w-full bg-white rounded-xl py-3 pl-12 pr-4 text-black outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <button
            className="w-full bg-cyan-500 hover:bg-cyan-600 transition py-3 rounded-xl font-semibold text-lg"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-6 text-gray-200">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-cyan-300 hover:text-white"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;