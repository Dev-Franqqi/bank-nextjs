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
import { CiMobile3 } from "react-icons/ci";
import { GoDeviceDesktop } from "react-icons/go";
import Link from "next/link";
import Image from "next/image";
import firstimage from "./image/pexels-gustavo-fring-3985233.jpg";
import secondimage from "./image/illus-hand-money-5-420x420.jpg";
import thirdimage from "./image/photo-woman-looking-at-phone-blue-coat-420x420.jpg";
import fourthimage from "./image/photo-altitude-go-with-autumn-tablescape-420x420.jpg";
import fifthimage from "./image/photo-military-credit-cards-420x420.jpg";
import sixthimage from "./image/photo-woman-smiling-at-phone-800x450.jpg";
import seventhimage from "./image/photo-credit-card-reward-675x450.jpg";
import eighthimage from "./image/photo-credit-score-675x450.jpg";
import ninthimage from "./image/photo-child-wearing-yarn-wig-675x450.jpg";

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

      <aside className="p-6 w-4/5 h-screen bg-white hidden">
        <ul className="mb-6 text-sm font-bold leading-loose">
          <li className="mb-4">Support</li>
          <li className="mb-4">Financial Education</li>
          <li className="mb-4">About us</li>
        </ul>

        <ul className=" mt-4 font-bold text-lg">
          <li className="border-b flex justify-between py-4">Personal <IoIosArrowForward className="mt-2"/></li>
          <li className="border-b flex justify-between py-4">Wealth Management <IoIosArrowForward className="mt-2"/></li>
          <li className="border-b flex justify-between py-4">Business <IoIosArrowForward className="mt-2"/></li>
          <li className="border-b flex justify-between py-4">Corporate & Commercial <IoIosArrowForward className="mt-2"/></li>
          

        </ul>

      </aside>

      <aside>
        
      </aside>
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
            Get the card <IoIosArrowForward cwe lassName="inline" />
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
      </main>

      <section className="p-4">
        <Image src={sixthimage} alt="" />

        <h2 className="text-blue-950 mb-2 font-bold text-3xl mt-2">
          Banking smarter is easier than ever.
        </h2>
        <p className="text-gray-700 mb-2">
          Unlock more benefits and rewards plus earn when you open a checking
          account
        </p>

        <p className="text-gray-700">Apply in minutes with just $25.</p>
        <Button className="bg-blue-700 text-white mt-4 w-full">
          Open a checking account
        </Button>
      </section>

      <section className="bg-white p-6 ">
        <h3 className="text-4xl font-bold text-blue-950 mb-5">
          Access us wherever you go.
        </h3>
        <ul>
          <li className="mb-4">
            <span className="flex gap-x-2">
              <CiMobile3 className="text-3xl" /> <span>Online banking</span>
            </span>
            <Link href="/" className="block text-blue-500">
              Access your accounts <IoIosArrowForward className="inline" />
            </Link>
          </li>

          <li className="mb-2">
            <span className="flex gap-x-2">
              <GoDeviceDesktop className="text-3xl" />
              24-hour Banking
            </span>
            <div className="text-blue-500">Call +1 4895 5075 43</div>
          </li>
        </ul>
      </section>

      <section className="px-4 py-4 mb-2 mt-10">
        <h3 className="text-blue-950 text-3xl mb-6 font-bold">
          Borrowing money is a big deal. We&rsquo;re ready to help.
        </h3>
        <p className="mb-8">
          From calculators and rate charts to get you started, to experienced
          loan officers and bankers, Asap bank has answers for all your loan and
          mortgage questions.
        </p>
        <p className="text-xl font-semibold mb-1">Home mortgage</p>
        <Link className="text-blue-500 font-medium mb-3" href="/">
          Learn more <IoIosArrowForward className="inline font-semibold" />
        </Link>

        <p className="font-semibold mt-3 text-xl">Home equity line of credit</p>
        <Link className="text-blue-500 font-medium" href="/">
          Learn more <IoIosArrowForward className="inline" />
        </Link>
      </section>

      <section className="p-5 bg-white">
        <h3 className="text-3xl text-blue-900 font-bold mb-3">Happening now</h3>
        <Image src={seventhimage} alt="" />

        <p className="text-lg mt-2 text-gray-600 mb-1">HOLIDAY SHOPPING</p>

        <p className="mb-2 text-2xl font-semibold">
          How to maximie credit card rewards for more bang for your buck
        </p>
        <Link className="text-blue-500 font-medium" href="/">
          Get the details <IoIosArrowForward className="inline" />
        </Link>
      </section>
      <section className="p-5 bg-white">
        <Image src={eighthimage} alt="" />

        <p className="text-lg mt-2 text-gray-600 mb-1">CREDIT AWARENESS</p>

        <p className="mb-2 text-2xl font-semibold">
          Five ways to build credit history and maintain a good score
        </p>
        <Link className="text-blue-500 font-medium" href="/">
          Follow these tips <IoIosArrowForward className="inline" />
        </Link>
      </section>
      <section className="p-5 bg-white">
        <Image src={ninthimage} alt="" />

        <p className="text-lg mt-2 text-gray-600 mb-1">GIVING BACK</p>

        <p className="mb-2 text-2xl font-semibold">
          Volunteers make magic for kids battling cancer
        </p>
        <Link className="text-blue-500 font-medium" href="/">
          Read more <IoIosArrowForward className="inline" />
        </Link>
      </section>

      <footer className="bg-blue-800 p-6  text-white">
        <div className="flex gap-x-6 mb-4 leading-10">
          <ul>
            <li>Support</li>
            <li>Financial education</li>
            <li>Careers</li>
            <li>Online trackig & advertising</li>
          </ul>

          <ul>
            <li>Security</li>
            <li>Site map</li>
            <li>Accessibility</li>
            <li>Privacy</li>
          </ul>
        </div>

        <hr className="mb-7"/>
        <p>ASAP bank</p>
        <p>800 Nicollet Mall</p>
        <div className="flex gap-2">
          <p>Minneapolis, MN 55402</p>
          <p>2023 ASAP Bank</p>
        </div>
      </footer>
    </>
  );
}
