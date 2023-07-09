"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Button from "./Button";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();
  function handleLogout() {
    // logout user
  }

  return (
    <div className={twMerge("h-fit bg-gradient-to-b from-rose-900 p-6", className)}>
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="md:flex gap-2 hidden">
          <button
            onClick={() => router.back()}
            className="rounded-full p-1 bg-black bg-opacity-70 flex items-center justify-center cursor-pointer hover:bg-opacity-80 transition"
          >
            <RxCaretLeft size={30} />
          </button>
          <button
            onClick={() => router.forward()}
            className="rounded-full p-1 bg-black bg-opacity-70 flex items-center justify-center cursor-pointer hover:bg-opacity-80"
          >
            <RxCaretRight size={30} />
          </button>
        </div>
        <div className="md:hidden flex gap-x-2 items-center">
          <button className="rounded-full bg-white bg-opacity-70 hover:bg-opacity-80 text-black flex p-2 items-center justify-center">
            <HiHome size={24} />
          </button>
          <button className="rounded-full bg-white bg-opacity-70 hover:bg-opacity-80 text-black flex p-2 items-center justify-center">
            <BiSearch size={24} />
          </button>
        </div>
        <div className="flex justify-between items-center gap-x-4">
          <>
            <div>
              <Button className="bg-transparant text-white">Sign Up</Button>
            </div>
            <div>
              <Button className="bg-white bg-opacity-90 text-black hover:bg-opacity-100">Login</Button>
            </div>
          </>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
