"use client";

import React, { useEffect } from "react";
import { Song } from "../../../../types";
import { useRouter } from "next/navigation";
import { useUser } from "@/hooks/useUser";
import MediaItem from "@/components/MediaItem";
import LikeButton from "@/components/LikeButton";
import useOnPlay from "@/hooks/useOnPlay";

interface LikedContentProps {
  songs: Song[];
}

const LikedContent: React.FC<LikedContentProps> = ({ songs }) => {
  const router = useRouter();
  const { isLoading, user } = useUser();

  const onPlay = useOnPlay(songs);

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/");
    }

    
  }, [isLoading, user, router]);

  if (songs.length === 0) {
    return (
      <div className="mt-[170px] sm:mt-[140px] lg:mt-[160px] flex flex-col px-6 gap-y-2">
        <h2 className="text-neutral-400 text-md w-full">No Liked Songs.</h2>
      </div>
    );
  }

  return (
    <div className="mt-[170px] sm:mt-[140px] lg:mt-[160px] flex flex-col gap-y-2 w-full p-6">
      {songs.map((song) => (
        <div key={song.id} className="flex items-center gap-x-4 w-full">
          <div className="flex-1">
            <MediaItem onClick={(id: string) => onPlay(id)} data={song} />
          </div>
          <LikeButton songId={song.id} />
        </div>
      ))}
    </div>
  );
};

export default LikedContent;
