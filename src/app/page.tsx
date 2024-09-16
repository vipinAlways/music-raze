'use client'
import { Songs } from "@/components/SongsScroll";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="grid max-sm:flex max-sm:flex-col max-sm:items-center  grid-cols-2 w-full justify-between h-full pt-7">
      <div className="lg:w-4/5 w-full ">
        <Songs />
      </div>

      <div className="text-slate-200 flex flex-col items-center justify-around">
        <div>
          <p className="text-center text-6xl font-serif w-full ">
            Welcome to Music Raze
          </p>
          <p className="text-center w-4/5 mx-auto text-5xl font-serif">
            where you can enjoy your favorite song hooks with the ones you love
          </p>
        </div>
        <div className="flex items-center justify-center gap-4 w-full">
          <img
            src="/testimonials/7.gif"
            alt="Enjoy Life GIF"
            className="object-contain h-44 w-44"
          />
          <Button onClick={()=>signIn('google', { callbackUrl: '/dashboard' })} className="p-2 py-3 text-xl">
            Join Us
          </Button>
        </div>
      </div>
    </div>
  );
}

export default page;
