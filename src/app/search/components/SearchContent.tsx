"use client";

import React from "react";
import { Song } from "../../../../types";
import MediaItem from "@/components/MediaItem";
import LikeButton from "@/components/LikeButton";
import useOnPlay from "@/hooks/useOnPlay";

interface SearchContentProps {
  songs: Song[];
}

const SearchContent: React.FC<SearchContentProps> = ({ songs: songs }) => {
  const onPlay = useOnPlay(songs);

  if (songs.length === 0) {
    return <div className="flex flex-col gap-y-2 w-full px-6 text-neutral-400 mt-[100px]">No Songs Found!</div>;
  }

  return (
    <div className="mt-[100px] pt-2 flex flex-col gap-y-2 w-full px-6">
      {songs.map((song) => (
        <div key={song.id} className="flex items-center gap-x-4 w-full">
          <div className="flex-1">
            <MediaItem data={song} onClick={(id: string) => onPlay(id)} />
          </div>
          <LikeButton songId={song.id} />
        </div>
      ))}
    </div>
  );
};

export default SearchContent;
