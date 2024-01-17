"use client"
import { Button } from "@/components/ui/button";
import "./dashboard.css"
import Image from "next/image";
import US from "../image/US.png"
import TV from "../image/TV.png"
import Electricity from "../image/electricity.png"
import Call from "../image/call.png"
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Wifi from "../image/wifi.png"
import { useRouter } from "next/navigation";
import supabase from "../supabase";
import Cookies from "js-cookie";
import { useState } from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Dashboard() {
     const [error, setError] = useState<string>("");
     const router = useRouter();

     const handleLogout = async () => {
       const { error } = await supabase.auth.signOut();
       if (error) {
         setError(error.message);
       } else {
         Cookies.remove("user");
         router.push("/");
       }
     };
    const invoices = [
      {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
      },
      {
        invoice: "INV002",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
      },
      {
        invoice: "INV003",
        paymentStatus: "Unpaid",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
      },
      {
        invoice: "INV004",
        paymentStatus: "Paid",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
      },
      {
        invoice: "INV005",
        paymentStatus: "Paid",
        totalAmount: "$550.00",
        paymentMethod: "PayPal",
      },
      {
        invoice: "INV006",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer",
      },
      {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
      },
    ];
    return (
      <>
        <nav className="flex justify-between mb-5 px-4 h-[20px]">
            
                <div className="w-2/6"></div>
          <header className="font-bold text-2xl w-2/6 text-left relative left-3">ASAP</header>
          <span
            onClick={handleLogout}
            className="font-bold w-2/6 text-right mt-1 text-blue-700"
          >
            Log out
          </span>
        </nav>
        <main className="pt-4 pb-10 px-4 bg-white">
          <div className="flex justify-between mb-6">
            <div className="flex">
              <Avatar className="bg-gray-300">
                <AvatarFallback>FE</AvatarFallback>
              </Avatar>
              <p className="font-bold self-center ml-2">Hi, Franklin</p>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 self-center"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
              />
            </svg>
          </div>

          <div className="flex space-x-3 mb-10">
            <Button className="dashboard_button">Spend</Button>
            <Button className="dashboard_button">Save</Button>
            <Button className="dashboard_button">Borrow</Button>
            <Button className="dashboard_button">Invest</Button>
          </div>

          <div className="flex justify-between mb-7">
            <div className="flex flex-col">
              <div className="flex space-x-2">
                <Image src={US} alt="" />
                <p
                  className="
              font-medium text-xs"
                >
                  US Dollar
                </p>
              </div>

              <p className="font-extrabold text-3xl ">$2,500.00</p>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 self-center"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </div>

          <div className="flex justify-between ">
            <div className="transaction_button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z"
                  clipRule="evenodd"
                />
              </svg>

              <p>Transfer</p>
            </div>

            <div className="transaction_button ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
                  clipRule="evenodd"
                />
              </svg>
              Add Money
            </div>
          </div>

          <section className="util_section">
            <div>
              <Image className="block mx-auto" src={Call} alt="" />
              <p>Airtime</p>
            </div>
            <div>
              <Image className="block mx-auto" src={Wifi} alt="" />
              <p className="mt-2">Internet</p>
            </div>
            <div>
              <Image
                className="block mx-auto relative -top-1"
                src={TV}
                alt=""
              />
              <p>TV</p>
            </div>
            <div>
              <Image className="block mx-auto" src={Electricity} alt="" />
              <p>Electricity</p>
            </div>
          </section>
        </main>

        <section className="p-3 bg-gray-300">
          <h1 className="font-bold mb-8">Transactions</h1>
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.invoice}>
                  <TableCell className="font-medium">
                    {invoice.invoice}
                  </TableCell>
                  <TableCell>{invoice.paymentStatus}</TableCell>
                  <TableCell>{invoice.paymentMethod}</TableCell>
                  <TableCell className="text-right">
                    {invoice.totalAmount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell className="text-right">$2,500.00</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </section>
      </>
    );
}