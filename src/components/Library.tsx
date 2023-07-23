"use client";

import React from "react";
import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import useUploadModal from "@/hooks/useUploadModal";
import { Song } from "../../types";
import MediaItem from "./MediaItem";
import useOnPlay from "@/hooks/useOnPlay";

interface LibraryProps {
  songs: Song[];
}

const Library: React.FC<LibraryProps> = ({ songs }) => {
  const authModal = useAuthModal();
  const { user } = useUser();
  const uploadModal = useUploadModal();

  const onPlay = useOnPlay(songs);

  function addMusic() {
    // upload music file
    if (!user) {
      return authModal.onOpen();
    }

    // TODO : check for subscriptions

    uploadModal.onOpen();
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
      <div className="flex flex-col gap-y-2 px-4 py-2">
        {songs.map((song) => (
          <MediaItem onClick={(id: string) => onPlay(id)} key={song.id} data={song} />
        ))}
      </div>
    </div>
  );
};

export default Library;
