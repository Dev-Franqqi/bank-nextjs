"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import supabase from "../supabase"
import Cookies from "js-cookie"
import { useEffect } from "react";
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
import { useState,FormEvent } from "react"
import {useRouter} from "next/navigation"

export default function Desktopnav() {
  const router = useRouter()
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

 const handleSubmit = async (e: FormEvent<HTMLFormElement>)=>{
   e.preventDefault();
   setError('')
   setIsLoading(true);

   // Check if email or password is empty
   if (email === "" || password === "") {
     setError("Please fill in all fields");
     setIsLoading(false);
     return;
   }

   // Attempt to sign in with Supabase
   const { data, error } = await supabase.auth.signInWithPassword({
     email: email,
     password: password,
   });

   // Handle authentication result
   if (error) {
     setError(error.message);
     setIsLoading(false);
   } else {
     // If successful, set user data in cookies and navigate to the dashboard
     const userCookie = Cookies.get("user")
     if (userCookie) {
       router.push("/dashboard")
     } else {
       Cookies.set("user", JSON.stringify(data), { expires: 7 });
     router.push("/dashboard");
       
     }
   }

   // Reset loading state after handling authentication
   setIsLoading(false);
 };
 useEffect(()=>{
  console.log(isLoading)
 },[isLoading])
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
              <SheetTrigger className="text-blue-600">Login</SheetTrigger>
              <SheetContent className="bg-white">
                <SheetHeader>
                  <SheetTitle>Log in</SheetTitle>
                  <SheetDescription>
                    Get Signed in into your account
                  </SheetDescription>
                </SheetHeader>
                
                {error && <p className="text-red-600 mt-4 border border-red-200 rounded-md p-4">{error}</p>}
                              
                              <form onSubmit={handleSubmit}>
                                  <Input onChange={(e)=>(setEmail(e.target.value))} value={email} className="mt-8 mb-4" placeholder="Email or Username" type="text" />
                                  <Input onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="password" type="password" />
                                  <Button className="bg-blue-600 text-white text-center w-full mt-4" disabled={isLoading} type="submit">Log In</Button>
                              </form>

                              <p className="text-center mt-4 text-sm">Forgot Your Password? <Link href={'#'} className="text-blue-600">click here</Link> </p>
                              <p className="text-center text-sm">Dont have an account? <Link className="text-blue-600" href="/signup">Sign up</Link></p>
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
