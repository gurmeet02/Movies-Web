import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      className="p-10 backdrop-filter backdrop-blur-lg bg-transparent bg-opacity-10 shadow-2xl rounded-2xl w-[35%] text-center"
      onSubmit={handleSubmit}
      action="/"
    >
      <h4 className="text-white tracking-wide font-medium py-6">Log in</h4>
      <div className="flex flex-col gap-5">
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
      </div>
      <button
        type="submit"
        className="mt-6 rounded-full py-2 text-gray bg-secondary w-full transition-all hover:brightness-90"
      >
        Log in
      </button>
      <div className=" pt-8">
        <Link to="/login" className="underline text-white tracking-wide">
          Forgot Password?
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
