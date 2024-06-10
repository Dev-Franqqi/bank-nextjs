'use client'
import supabase from "../supabase"
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { IoLogOut } from "react-icons/io5";
import { HiPaperAirplane } from "react-icons/hi";
import { FaMoneyBills } from "react-icons/fa6";
import { BiMoneyWithdraw } from "react-icons/bi";
import { FaArrowDown } from "react-icons/fa";
export default function Dashboard(){

    const router = useRouter()

  const logout = async() =>{
   const error = await supabase.auth.signOut()
   if (error) {
     console.log(error)
   } else {
     console.log("User logged out")
   }
  }


  useEffect(()=>{
    const user = Cookies.get('user')
    if(!user){
      router.push('/login')
    }
  })
  return(<>
<nav className="flex justify-between items-center p-3">
  <GiHamburgerMenu className="w-[20px] h-[20px]" />
  <header className="font-semibold text-base">ASAP</header>
  <IoLogOut className="w-[20px] h-[20px]"/>

</nav>

<main>

 <div className="text-xs flex justify-between w-[85%] mx-auto mt-10 bg-black text-white rounded-lg p-2">
  <p className="font-semibold">FRANKLIN EBI ESENDU</p>
  <p>5680838129</p>
  </div> 

  <div className="mt-5  bg-gray-200 mx-2 h-60 rounded-b-md">
    <div className="bg-black p-3 flex items-center justify-between text-white  mx-auto rounded-lg ">
      <p className="text-xl font-semibold">$10,000</p>
      <p className="text-xs">See history</p>
    </div>

    <div className="p-3">
    <p className="text-xs text-gray-600">Recent transaction</p>
    <p className="text-center mt-10 text-gray-500 text-sm opacity-40">No transaction yet </p>

    </div>
  </div>

  <section className="p-4">
    <h2 className="text-xs font-semibold">Make payment</h2>

    <div className="flex space-x-6 font-medium mt-3">

      <div className="w-14 h-14 shadow-lg flex flex-col justify-center rounded-md bg-gray-200">
        <FaArrowDown className="mx-auto text-2xl "/>
        <p className="text-[10px] text-center space-y-3">Deposit</p>
      </div>
      <div className="w-14 h-14 flex justify-center flex-col shadow-lg  rounded-md bg-gray-200">
        <FaMoneyBills className="mx-auto text-blue-700 text-2xl"/>
        <p className="text-[10px] text-center">Pay bills</p>
      </div>
      <div className="w-14 h-14 flex flex-col justify-center  shadow-lg rounded-md bg-gray-200">
        <BiMoneyWithdraw className="mx-auto text-red-500 text-2xl" />
        <p className="text-[10px] text-center">Withdraw</p>
      </div>
    </div>
  </section>

  {/* <div className="font-medium ml-3 text-xs">Link a card</div> */}
</main>


  
  
  
  
  
  
  
  
  
  
  </>)
}