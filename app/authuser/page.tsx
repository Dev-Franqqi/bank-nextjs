"use client"
import { useSearchParams } from "next/navigation"

export default function Authuser() {
    const searchParams = useSearchParams();
    const email = searchParams.get("email")
    return (
        <>
            <h1 className="text-center text-xl font-bold">An email has been sent to {email}</h1>
        
        </>
    )
}