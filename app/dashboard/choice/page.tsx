import { Button } from "@/components/ui/button"
import { GoArrowLeft } from "react-icons/go";
import { BiTransfer } from "react-icons/bi";
import { IoPersonAddOutline } from "react-icons/io5";
import { IoIosMore } from "react-icons/io";
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
  import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
  import { Input } from "@/components/ui/input";
export default function Choicepage() {
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
      <main className="px-5 py-5 h-screen">
        <nav className="flex">
          <div>
            <GoArrowLeft className="text-3xl" />
          </div>
          <header className="text-lg text-center w-5/6">
            Asap Choice
          </header>

          <div></div>
        </nav>

        <p className="text-base mb-8">
          <span className="text-gray-400">Account No</span> 23478438959
        </p>

        <section>
          <p className="text-3xl font-semibold">$2,147.50</p>
          <p className="text-gray-400">Current balance</p>

          <div className="flex justify-between mt-9 mb-3 text-blue-700 font-medium space-x-2 text-base">
            <Button className="bg-blue-100 w-3/6">Transfer</Button>
            <Sheet>
              <SheetTrigger className="text-blue-600">Pay</SheetTrigger>
              <SheetContent side={"bottom"} className="bg-white p-0 h-3/5">
                <ul className="py-7 text-xl text-gray-700">
                  <li className="flex border-b px-7 py-4 ">
                    <BiTransfer className="mr-6 text-blue-700 text-3xl" />
                    Transfers between accounts
                  </li>
                  <li className="flex border-b px-7 py-4">
                    <IoPersonAddOutline className="mr-6 text-blue-700 text-3xl" />
                    Pay someone
                  </li>
                                <li className="flex border-b px-7 py-4">
                                    <IoIosMore className="mr-6 teyxt-blue-700 text-3xl" />More</li>
                </ul>
              </SheetContent>
            </Sheet>
            <Button className="bg-blue-100 w-3/6">Manage</Button>
          </div>

          <h2 className="font-semibold text-xl mb-2">Activity</h2>
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
      </main>
    );
}