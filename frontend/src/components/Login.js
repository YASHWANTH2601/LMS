import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { login } from "../services/authService";
// import Employees from "./Employees";
const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const api = `${process.env.REACT_APP_API_URL}/auth/login`;
    // const api = `http://localhost:4000/api/auth/login`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };
    try {
      const response = await fetch(api, options);

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token", data.token);
        console.log(data);
        console.log("Login successful");
        setFormData({ email: "", password: "" });
        navigate("/profile");
      }
    } catch (error) {
      console.error(error.message);
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
