"use client";

import React from "react";
import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";

const Library = () => {
  function addMusic() {
    // upload music file
  }

  return (
    <div>
      <div className="flex px-4 gap-y-2 mt-4 items-center w-full justify-between">
        <div className="flex gap-2 cursor-pointer">
          <TbPlaylist size={26} className="text-neutral-300" />
          <p className="font-medium text-neutral-300">Your Library</p>
        </div>
        <AiOutlinePlus
          size={22}
          className="cursor-pointer text-neutral-300 hover:text-white hover:scale-105 transition"
          onClick={addMusic}
        />
      </div>
      <div className="flex flex-col gap-y-2 px-4 py-2">List of songs!</div>
    </div>
  );
};

export default Library;
