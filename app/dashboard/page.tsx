import { Button } from "@/components/ui/button"
import Cardimage from "../image/cardimage.png"
import { Input } from "@/components/ui/input"
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
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

import Image from "next/image"
export default function Dashboard() {
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
      <main className="px-5 py-3">
        <nav className="flex justify-between mb-5">
          <header className="font-bold text-2xl">ASAP</header>{" "}
          <Button className="pb-3 font-bold text-base text-blue-700">
            Log out
          </Button>
        </nav>
        {/* <Input
          className="w-full bg-transparent"
          placeholder="search"
          type="text"
        /> */}

        <h1 className="font-bold text-lg mb-1 ">Accounts</h1>

        <section className="w-full border border-gray-300 flex px-2 py-1 rounded-md">
          <Image src={Cardimage} className="w-10 h-7 mr-5 self-center" alt="" />
          <div>
            <p className="font-medium">Asap Choice</p>
            <p className="font-semibold text-2xl">$2,147.50</p>
            <p className="text-gray-400 text-xs">Balance $2,147.50</p>
          </div>
          <IoIosArrowRoundForward className="text-blue-700 ml-auto self-center text-5xl font-bold" />
        </section>

        <section className="flex border mb-2 rounded-md mt-4 p-1">
          <p className="ml-auto text-gray-400">View total balance</p>{" "}
          <MdOutlineKeyboardArrowDown className="ml-auto self-center" />
        </section>

        <h2 className="text-lg font-bold">Top categories</h2>
        <p className="text-xs text-gray-400 mb-3">This month</p>

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
                <TableCell className="font-medium">{invoice.invoice}</TableCell>
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
      </main>
    );
}