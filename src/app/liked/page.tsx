import getLikedSongs from "@/actions/getLikedSongs";
import Box from "@/components/Box";
import Header from "@/components/Header";
import Image from "next/image";
import React from "react";
import LikedContent from "./components/LikedContent";

export const revalidate = 0;

const Liked = async () => {
  const songs = await getLikedSongs();

  return (
    <Box className="h-full bg-opacity-5 overflow-hidden overflow-y-auto relative">
      <Header className="sticky top-0 left-0 max-h-20 z-10">
        <div className="mt-10">
          <div className="flex flex-col md:flex-row items-center gap-x-5">
            <div className="relative h-24 w-24 lg:h-32 lg:w-32">
              <Image src="/Images/liked.png" alt="playlist" fill className="object-cover" />
            </div>
            <div className="flex flex-col gap-y-2 mt-4 md:mt-0">
              <p className="hidden md:block font-semibold text-sm">Playlist</p>
              <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">Liked Songs</h1>
            </div>
          </div>
        </div>
      </Header>
      <LikedContent songs={songs} />
    </Box>
  );
};

export default Liked;
