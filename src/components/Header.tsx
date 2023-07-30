"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Button from "./Button";
import useAuthModal from "@/hooks/useAuthModal";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useUser } from "@/hooks/useUser";
import { FaUserAlt } from "react-icons/fa";
import { toast } from "react-hot-toast";
import usePlayer from "@/hooks/usePlayer";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();
  const authModal = useAuthModal();
  const supabaseClient = useSupabaseClient();
  const { user } = useUser();
  const player = usePlayer();

  console.log(user?.email);

  async function handleLogout() {
    // logout user
    const { error } = await supabaseClient.auth.signOut();
    player.reset();

    router.refresh();

    if (error) {
      // console.error(error);
      toast.error(error.message);
    } else {
      toast.success("Logged out");
    }
  }

  return (
    <div className={twMerge("h-20 w-full p-6 rounded-t-md bg-gradient-to-b from-rose-900", className)}>
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
          <button
            onClick={() => {
              router.push("/");
            }}
            className="rounded-full bg-white bg-opacity-70 hover:bg-opacity-80 text-black flex p-2 items-center justify-center"
          >
            <HiHome size={24} />
          </button>
          <button
            onClick={() => {
              router.push("/search");
            }}
            className="rounded-full bg-white bg-opacity-70 hover:bg-opacity-80 text-black flex p-2 items-center justify-center"
          >
            <BiSearch size={24} />
          </button>
        </div>
        <div className="flex justify-between items-center gap-x-4 relative">
          {user ? (
            <>
              <div>
                <Button className="bg-white" onClick={handleLogout}>
                  Logout
                </Button>
              </div>
              <Button
                className="bg-white p-2 rounded-full peer"
                onClick={() => {
                  // router.push("/account");
                }}
              >
                <FaUserAlt />
              </Button>
              <div className="absolute invisible peer-hover:visible transition right-0 top-10 p-3 bg-neutral-400/25 rounded-lg">
                {user.email}
              </div>
            </>
          ) : (
            <>
              <div>
                <Button className="bg-transparant text-white" onClick={authModal.onOpen}>
                  Sign Up
                </Button>
              </div>
              <div>
                <Button className="bg-white bg-opacity-90 text-black hover:bg-opacity-100" onClick={authModal.onOpen}>
                  Login
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
