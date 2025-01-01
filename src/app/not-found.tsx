'use client';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="h-[700px] flex flex-col space-y-5 justify-center items-center">
        <Image src="/cat_huh.png" width="100" height="100" alt="huh" />
        <h1 className="text-5xl md:text-7xl font-black">404 NOT FOUND</h1>
        <Button asChild>
            <Link href="/">
                Return to Homepage.  
            </Link>
        </Button>
            
      </div>
    </div>
  );
}
