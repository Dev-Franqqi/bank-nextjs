"use client"
import { useSearchParams } from "next/navigation"
import { useEffect } from "react";
import confetti from "canvas-confetti"
import checkimage from "../image/check.png"
import Image from "next/image";
import Cookies from "js-cookie"
export default function Authuser() {

    const searchParams = useSearchParams();
    const email = searchParams.get("email");

    useEffect(() => {
        setTimeout(() => { confetti() },1000)
        
    },[])
    return (
        <div className="h-screen p-4 text-center">
           <Image className="mx-auto mt-20 block" width={100} src={checkimage} alt="" />
            <h1 className="mt-3 font-bold ">Your Account is open! </h1>
            <p className=" text-center text-gray-400">An email has been sent to {email}. <br />Check your mail and click on the link to verify your account.</p>
        </div>
    )
    


}

