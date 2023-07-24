"use client";

import React from "react";
import { Song } from "../../types";
import useLoadImage from "@/hooks/useLoadImage";
import Image from "next/image";
import PlayButton from "./PlayButton";

interface SongItemProps {
  data: Song;
  onClick: (id: string) => void;
}

const SongItem: React.FC<SongItemProps> = ({ data, onClick }) => {
  const imagePath = useLoadImage(data);

  return (
    <div
      className="relative group flex flex-col items-center justify-center rounded-md h-full gap-x-4 p-3 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10"
      onClick={() => onClick(data.id)}
    >
      <div className="relative aspect-square w-full h-full overflow-hidden rounded-md">
        <Image className="object-cover" src={imagePath || "/images/liked.png"} fill alt={"Song image"} />
      </div>
      <div className="flex flex-col items-start pt-4 w-full gap-y-1">
        <p className="font-semibold truncate w-full">{data?.title}</p>
        <p className="truncate w-full text-neutral-400 text-sm pb-3">By {data?.author}</p>
      </div>
      <div className="absolute bottom-24 right-5">
        <PlayButton />
      </div>
    </div>
  );
};

export default SongItem;
