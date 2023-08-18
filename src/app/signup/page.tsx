"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { Axios } from "axios";

const SingUpPage = () => {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const onSignup = async () => {};
  return (
    <div className="min-h-screen">
      <div className="border-2 border-blue-500 flex flex-col items-center justify-center m-12 p-2 rounded-lg">
        <h1 className="text-2xl font-medium py-6">Signup</h1>
        <hr />
        <label htmlFor="username">username</label>
        <input
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 mb-4"
          type="text"
          id="usename"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="username"
        />
        <label htmlFor="email">email</label>
        <input
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 mb-4"
          type="text"
          id="usename"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="email"
        />
        <label htmlFor="password">password</label>
        <input
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 mb-4"
          type="password"
          id="usename"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="password"
        />
        <button
          onClick={onSignup}
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 mb-4"
        >
          SignUp Here
        </button>
        <Link href="/login">Go to Login Page</Link>
      </div>
    </div>
  );
};

export default SingUpPage;
