"use client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import Boardimage from "../image/pexels-christina-morillo-1181396.jpg"
export default function Signup() {
    const [firstname, setFirstname] = useState<string>();
    const [lastname, setLastname] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [confirm,setConfirm] = useState<string>()
    const [country, setCountry] = useState<string>()
    const [phone, setPhone] = useState<number>();
    return (
      <div className="bg-white h-screen md:flex">
        <Image
          src={Boardimage}
          alt=""
          className="hidden md:block md:h-full md:w-3/5 md:object-cover"
        />

        <main className="px-6 bg-white py-10 md:py-6 ">
          <h1 className="text-center text-3xl font-bold">ASAP</h1>

          <h2 className="text-xl font-semibold mb-3 mt-7">
            Sign up to access great features
          </h2>
          <p className="text-gray-400">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-600">
              login
            </Link>
          </p>

          <form className="leading-10 md:leading-8">
            <section className="md:flex md:gap-3">
              <div>
                <label className="text-sm" htmlFor="firstname">
                  Firstname
                </label>
                <Input
                  onChange={(e) => setFirstname(e.target.value)}
                  value={firstname}
                  type="text"
                  placeholder="Enter firstname"
                  required
                />
              </div>
              <div>
                <label className="text-sm" htmlFor="lastname">
                  Lastname
                </label>
                <Input
                  onChange={(e) => setLastname(e.target.value)}
                  value={lastname}
                  type="text"
                  placeholder="Enter lastname"
                  required
                />
              </div>
            </section>

            <label className="text-sm" htmlFor="Email">
              Email
            </label>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Enter Email"
            />
            <section className="md:flex md:gap-3">
              <div>
                <label className="text-sm" htmlFor="password">
                  Password
                </label>
                <Input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  placeholder="Enter password"
                />
              </div>
              <div>
                <label className="text-sm" htmlFor="confirm">
                  Confirm Password
                </label>
                <Input
                  onChange={(e) => setConfirm(e.target.value)}
                  value={confirm}
                  type="text"
                  placeholder="Confirm password"
                />
              </div>
            </section>

            <label className="text-sm" htmlFor="countrty">
              Country
            </label>
            <Input type="text" placeholder="Enter country" required />

            <label className="text-sm" htmlFor="phone">
              Phone
            </label>
            <Input placeholder="Enter phone number" type="number" required />

            <Button
              className="block font-bold text-center mt-4 bg-blue-600 text-white w-full"
              type="submit"
            >
              Signup
            </Button>
          </form>

          <footer className="mt-2 text-center text-gray-300">
            &copy;2023 ASAP Bank
          </footer>
        </main>
      </div>
    );
}