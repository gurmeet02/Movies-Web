import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <form
      className="p-10 backdrop-filter backdrop-blur-lg bg-transparent bg-opacity-10 shadow-2xl rounded-2xl w-[35%] text-center"
      onSubmit={handleSubmit}
      action="/"
    >
      <h4 className="text-white tracking-wide font-medium py-6">Sign Up</h4>
      <div className="flex flex-col gap-5">
        <input
          type="text"
          name="name"
          className="rounded-lg outline-none backdrop-filter backdrop-blur-lg bg-secondary opacity-90 px-4 py-2 text-white w-full tracking-wide"
          placeholder="Enter your Name..."
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          name="email"
          className="rounded-lg outline-none backdrop-filter backdrop-blur-lg bg-secondary opacity-90 px-4 py-2 text-white w-full tracking-wide"
          placeholder="Enter your Email..."
        />
        <input
          type="password"
          name="password"
          className="rounded-lg outline-none backdrop-filter backdrop-blur-lg bg-secondary opacity-90 px-4 py-2 text-white w-full tracking-wide"
          placeholder="Password"
        />
        <input
          type="password"
          name="confirmPassword"
          className="rounded-lg outline-none backdrop-filter backdrop-blur-lg bg-secondary opacity-90 px-4 py-2 text-white w-full tracking-wide"
          placeholder="Confirm password"
        />
      </div>
      <button
        type="submit"
        className="mt-6 rounded-full py-2 text-gray bg-secondary w-full transition-all hover:brightness-90"
      >
        Sign up
      </button>
      <div className="pt-8 text-white tracking-wide">
        Already have an account?{" "}
        <Link to="/login" className="underline">
          Login
        </Link>
      </div>
    </form>
  );
};

export default SignUpForm;
