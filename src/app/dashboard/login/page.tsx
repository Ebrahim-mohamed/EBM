"use client";

import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://api.ebmksa.com/admin/login", {
        username,
        password,
      });

      localStorage.setItem("admin_token", res.data.token);
      localStorage.setItem("admin_username", res.data.username);

      router.push("/dashboard/projects");
    } catch (err: unknown) {
      let message = "Login failed";

      if (axios.isAxiosError(err)) {
        message = err.response?.data?.message ?? message;
      }

      alert(message);
    }
  };

  return (
    <div className="w-full flex justify-center items-center h-dvh bg-[#0D0C10]">
      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-4 w-[30%] bg-white p-[2rem] text-black rounded-[0.5rem] justify-center items-center shadow-2xs"
      >
        <Image
          alt="logo"
          src="/logo-black.png"
          width={500}
          height={500}
          className="w-[20rem] mb-[1rem]"
        />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="border p-2 border-black w-[80%] rounded-[0.5rem]"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="border p-2 border-black w-[80%] rounded-[0.5rem]"
          required
        />
        <button
          type="submit"
          className="bg-[#A8CF38] text-black text-[1.2rem] p-4 cursor-pointer transition-colors rounded-[0.5rem]"
        >
          Login
        </button>
      </form>
    </div>
  );
}
