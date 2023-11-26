"use client"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import Ladywithcomputer from "../image/pexels-christina-morillo-1181292.jpg"
export default function Login() {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();

   

  return (
    <div className="bg-white h-screen md:flex">
      <Image
        src={Ladywithcomputer}
        className="hidden md:block md:h-full md:w-3/5 md:object-cover "
        alt=""
      />
      <main className="px-6 py-10  md:pl-36">
        <h1 className="text-center text-3xl font-bold">ASAP</h1>

        <h2 className="text-xl font-semibold mb-3 mt-7">
          Log in to your account
        </h2>
        <form className=" leading-10">
          <label className="text-sm" htmlFor="email">
            Email or Username
          </label>
          <Input
            type="text"
            placeholder="Enter Email or Username"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="text-sm" htmlFor="password">
            Password
          </label>
          <Input
            type="password"
            placeholder="Enter your password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link
            className="flex justify-end mb-2 text-blue-500"
            href="/forgotpassword"
          >
            Forgot password?
          </Link>
          <Button
            className="block font-bold text-center bg-blue-600 text-white w-full"
            type="submit"
          >
            Login
          </Button>
        </form>

        <p className="text-center mt-4">
          Dont have an account? <Link className="text-blue-600" href="/signup">Sign up</Link>{" "}
        </p>
        <footer className="bg-white text-center mt-10">
          <p className="text-gray-300">
            &copy;2023 ASAP Bank. All rights reserved
          </p>
        </footer>
      </main>
    </div>
  );
}