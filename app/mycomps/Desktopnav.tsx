"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {useState} from "react"

export default function Desktopnav() {

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const handleSubmit = (e: FormEcent<HTMLFormElement>) => {
    e.preventDefault();
  }
  return (
    <>
      <div className="hidden md:block">
        <div className="flex justify-between px-8  text-sm">
          <ul className="flex space-x-2">
            <li>About us</li>
            <li>Financial Support</li>
          </ul>

          <div className="">
            <span className="mr-2">Support</span>
            <Sheet>
              <SheetTrigger>Open</SheetTrigger>
              <SheetContent className="bg-white">
                <SheetHeader>
                  <SheetTitle>Log in</SheetTitle>
                  <SheetDescription>
                    Get Signed in into your account
                  </SheetDescription>
                              </SheetHeader>
                              
                              <form>
                                  <Input onChange={(e)=>(setEmail(e.target.value))} value={email} className="mt-8 mb-4" placeholder="Email or Username" type="text" />
                                  <Input onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="password" type="password" />
                                  <Button className="bg-blue-600 text-white text-center w-full mt-4" type="submit">Log In</Button>
                              </form>

                              <p className="text-center mt-4 text-sm">Forgot Your Password? <Link href={'#'} className="text-blue-600">click here</Link> </p>
                              <p className="text-center text-sm">Dont have an account? <Link className="text-blue-600" href="#">Sign up</Link></p>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        <nav className="bg-white gap-4 flex py-2 px-10">
          <header>ASAP</header>
          <ul className="flex gap-6">
            <li>Personal</li>
            <li>Wealth Management</li>
            <li>Business</li>
            <li>Corporate & Commercial</li>
            <li>Institutional</li>
          </ul>
        </nav>
      </div>
    </>
  );
}
