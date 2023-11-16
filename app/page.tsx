import { Button } from "@/components/ui/button";
import { HiBars3 } from "react-icons/hi2";
import Link from "next/link";
import Image from "next/image";
import firstimage from "./image/pexels-gustavo-fring-3985233.jpg"
export default function Home() {
  return (
    <>
      <nav className="flex justify-between px-3 pt-2 text-xl">
        <HiBars3 className=" "/>
        <header className=" font-bold">ASAP</header>
        <Button className="font-bold text-blue-800" variant={"link"}>
          <Link className="mb-2" href="/login">Log in</Link>
        </Button>
      </nav>

      <section className="relative"> 
        <Image src={firstimage} alt="" />
        <section className="card bg-white relative -top-6 mx-auto p-10">
          <h1 className="font-semibold ">PERSONAL BANKING</h1>
          <h2 className="font-bold text-2xl">Earn a bonus up to $450</h2>
          <p className="mb-2">Open new Bank Smartly Checking and Standard Savings accounts and complete required activities</p>
          <Button className="block w-full mb-2 bg-red-600 text-white">Earn your bonus</Button>
          <Button className=" block w-full border-blue-500 text-blue-500" variant={"outline"}>See details</Button>
        </section>
      </section>
    </>
  );
}