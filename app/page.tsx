import { Button } from "@/components/ui/button";
import { HiBars3 } from "react-icons/hi2";
import { IoIosArrowForward } from "react-icons/io";
import { CiCreditCard1 } from "react-icons/ci";
import { LuFileSignature } from "react-icons/lu";
import { FaSackDollar } from "react-icons/fa6";
import { PiPiggyBank } from "react-icons/pi";
import { MdOutlineHome } from "react-icons/md";
import { BsCashStack } from "react-icons/bs";
import { CiMoneyCheck1 } from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";
import firstimage from "./image/pexels-gustavo-fring-3985233.jpg"
import secondimage from "./image/illus-hand-money-5-420x420.jpg"
import thirdimage from "./image/photo-woman-looking-at-phone-blue-coat-420x420.jpg"
import fourthimage from "./image/photo-altitude-go-with-autumn-tablescape-420x420.jpg"
import fifthimage from "./image/photo-military-credit-cards-420x420.jpg"
export default function Home() {
  return (
    <>
      <nav className="flex justify-between px-3 bg-white pt-2 text-xl">
        <HiBars3 className="text-3xl" />
        <header className=" font-bold ml-5 text-center">ASAP</header>
        <Button className="font-bold text-blue-800" variant={"link"}>
          <Link className="mb-2" href="/login">
            Log in
          </Link>
        </Button>
      </nav>
      <main className="bg-white p-4">
        <section className="relative">
          <Image src={firstimage} alt="" />

          <section className="card bg-white relative -top-6 mx-auto px-8 py-5">
            <h1 className="font-semibold text-neutral-700">PERSONAL BANKING</h1>
            <h2 className="font-bold text-xl">Earn a bonus up to $450</h2>
            <p className="mb-2 text-neutral-700">
              Open new Bank Smartly Checking and Standard Savings accounts and
              complete required activities
            </p>
            <Button className="block w-full mb-2 bg-red-600 text-white">
              Earn your bonus
            </Button>
            <Button
              className=" block w-full border-blue-500 text-blue-500"
              variant={"outline"}
            >
              See details
            </Button>
            <p className="text-xs mt-4 text-gray-600">
              Offer valid online only through Nov. 30. Terms and limitations
              apply.
            </p>
          </section>
        </section>
        <section className="card bg-white px-8 py-5 mx-auto mb-6 ">
          <Image src={secondimage} className="mx-auto h-56 w-full" alt="" />
          <h2 className="font-semibold text-neutral-700 mt-4 ">
            SMART REWARDS
          </h2>

          <h3 className="font-bold text-xl">
            Get exclusive benefits with your checking account.
          </h3>
          <Link className="hover:underline text-blue-700 " href="/">
            Enroll now <IoIosArrowForward className="inline" />
          </Link>
        </section>

        <section className="card bg-white px-8 py-5 mx-auto mb-6">
          <Image src={thirdimage} className="mx-auto h-56 w-full" alt="" />
          <h2 className="font-semibold text-neutral-700 mt-4">
            U.S. BANCORP INVESTMENTS
          </h2>
          <h3 className="font-bold mt-2 text-xl">
            Get $100 when you open an Automated Investor account.
          </h3>
          <Link className="hover:underline text-blue-700 " href="/">
            Start investing <IoIosArrowForward className="inline" />
          </Link>
        </section>

        <section className="card bg-white px-8 py-5 mx-auto mb-6">
          <Image src={fourthimage} alt="" className="mx-auto h-56 w-full" />
          <h2 className="font-semibold text-neutral-700 mt-4">
            ALTITUDE GO CARD
          </h2>
          <h3 className="font-bold text-xl mt-2">
            Savor the season with 4X points on dining
          </h3>
          <Link className="hover:underline text-blue-700 " href="/">
            Get the card <IoIosArrowForward className="inline" />
          </Link>
        </section>

        <section className="card bg-white px-8 py-5 mx-auto mb-6">
          <Image src={fifthimage} alt="" className="mx-auto h-56 w-full" />
          <h2 className="font-semibold text-neutral-700 mt-4">
            THANK A VETERAN
          </h2>
          <h3 className="font-bold text-xl mt-2">
            Show your patriotism with every purchase.
          </h3>
          <Link className="hover:underline text-blue-700 " href="/">
            See the designs <IoIosArrowForward className="inline" />
          </Link>
        </section>

        <section className="iconsSection flex flex-wrap gap-x-1 gap-y-2 bg-white py-3 justify-between mx-auto">
          <div className="border-2 border-neutral-200 mx-auto rounded-md text-center p-6 font-bold">
            <CiCreditCard1 className="mx-auto text-blue-900 text-5xl" />
            <p>Credit cards</p>
          </div>
          <div className="border-2 border-neutral-200 mx-auto rounded-md text-center p-6 font-bold">
            <CiMoneyCheck1 className="mx-auto text-5xl" />
            <p>Checking</p>
          </div>
          <div className="border-2 border-neutral-200 mx-auto rounded-md text-center p-6 font-bold">
            <FaSackDollar className="mx-auto text-4xl" />
            <p>Savings</p>
          </div>

          <div className="border-2 border-neutral-200 mx-auto rounded-md text-center p-6 font-bold">
            <PiPiggyBank className="mx-auto text-4xl" />
            <p>CDs</p>
          </div>

          <div className="border-2 border-neutral-200 mx-auto rounded-md text-center p-6 font-bold">
            <MdOutlineHome className="mx-auto text-4xl" />
            <p>Mortgage</p>
          </div>
          <div className="border-2 border-neutral-200 mx-auto rounded-md text-center p-6 font-bold">
            <BsCashStack className="mx-auto text-4xl" />
            <p>Investing</p>
          </div>
        </section>

        <section>
          <h2>Banking smarte is eazsier than ever.</h2>
          <p>
            Unlock more benefits and rewards plus earn when you open a checking
            account
          </p>

          <p>Apply in minutes with just $25.</p>
          <Button>Open a checking account</Button>
        </section>
      </main>
    </>
  );
}