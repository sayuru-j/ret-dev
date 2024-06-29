"use client";

import Image from "next/image";
import React from "react";

export default function Home() {
  const [username, setUsername] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();
  const [message, setMessage] = React.useState<string>();

  const handleLogin = () => {
    if (!username) {
      setMessage("Username is required.");
      return;
    }
    if (!password) {
      setMessage("Password is required.");
      return;
    }

    if (username === "user_69") {
      setMessage(
        "Are you fucking serious? Do you think web developers are fucking retarded?"
      );
      return;
    }

    setMessage("This password is already used for the username: user_69");
  };

  return (
    <main className="flex w-full h-screen items-center justify-center bg-gradient-to-r from-violet-200 to-pink-200">
      <div className="max-w-3xl bg-black/70 w-full h-[500px] rounded-xl backdrop-blur-sm flex m-5">
        <div className="w-full md:w-2/3 flex flex-col p-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              className="rounded-full object-cover w-8 opacity-80"
              alt="logo"
              src={require("../../public/logo.jpeg")}
            />
            <h2 className="text-xl font-bold text-white/70">
              Jobs<span className="text-red-500/50">.</span>
            </h2>
          </div>
          {/* Form */}
          <div className="flex flex-col justify-center p-10 mt-4">
            <div className="text-white/70 px-2">
              <h2 className="text-2xl font-semibold">Welcome back</h2>
              <p className="text-sm font-normal">
                Please Enter your Account details
              </p>
            </div>

            <div className="flex flex-col mt-5 mb-5 text-white/70 gap-2">
              <label className="text-xs pl-2" htmlFor="username">
                Username
              </label>
              <input
                onChange={(e) => setUsername(e.target.value)}
                className="p-3 px-4 rounded-full bg-black !outline-none text-sm"
                id="username"
                type="text"
                required
              />
              <label className="text-xs pl-2" htmlFor="password">
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 px-4 rounded-full bg-black !outline-none text-sm"
                id="password"
                type="password"
                required
              />

              <div className="flex items-center text-[10px] justify-between mt-3 mb-5 px-2">
                <p>Keep me logged in</p>
                <p>Forgot Password</p>
              </div>

              <div className="flex w-full text-sm">
                <button
                  onClick={handleLogin}
                  className="w-full bg-gradient-to-r from-lime-400 to-lime-500 text-black font-semibold p-[10px] rounded-full"
                  type="button"
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex w-1/3 flex-col p-4 justify-center items-center relative">
          <video
            className="rounded-xl absolute backdrop-blur-md opacity-80 right-5"
            width="250"
            autoPlay
            muted
            loop
          >
            <source src="/carloop.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {message && (
        <div className="absolute mx-auto top-4 p-4 bg-black/70 rounded-md backdrop-blur-md animate-pulse">
          <h2 className="text-white text-xs font-semibold antialiased">
            {message}
          </h2>
        </div>
      )}
    </main>
  );
}
