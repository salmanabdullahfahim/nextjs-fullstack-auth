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
  return (
    <div>
      <h1 className="text-2xl text-center">SignUP</h1>
    </div>
  );
};

export default SingUpPage;
