import React from "react";
import { Song } from "../../types";
import useLoadImage from "@/hooks/useLoadImage";
import Image from "next/image";

interface MediaItemProps {
  onClick?: (id: string) => void;
  data: Song;
}

const MediaItem: React.FC<MediaItemProps> = ({ onClick, data }) => {
  const imageUrl = useLoadImage(data);

  function handleClick() {
    if (onClick) {
      return onClick(data.id);
    }

    // TODO: Handle default player
  }

  return (
    <div
      onClick={handleClick}
      className="flex items-center relative gap-x-3 cursor-pointer hover:bg-neutral-600/25 w-full p-2 rounded-md"
    >
      <div className="relative rounded-md min-h-[48px] min-w-[48px] overflow-hidden">
        <Image src={imageUrl || "/images/liked.png"} alt="media item" fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="text-white truncate">{data?.title}</p>
        <p className="text-neutral-400 truncate text-sm">{data?.author}</p>
      </div>
    </div>
  );
};

export default MediaItem;
