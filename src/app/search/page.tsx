import getSongsByTitle from "@/actions/getSongsByTitle";
import Box from "@/components/Box";
import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import React from "react";
import SearchContent from "./components/SearchContent";

export const revalidate = 0;

interface SearchPageProps {
  searchParams: {
    title: string;
  };
}

const Search = async ({ searchParams }: SearchPageProps) => {
  const songs = await getSongsByTitle(searchParams.title);
  return (
    <Box className="h-full bg-opacity-5 overflow-hidden overflow-y-auto relative">
      <Header className="from-bg-neutral-900 sticky top-0 left-0 max-h-20 z-10">
        <div className="mb-2 flex flex-col gap-y-2">
          <h1 className="text-white text-2xl font-semibold">Search</h1>
          <SearchInput />
        </div>
      </Header>
      <SearchContent songs={songs} />
    </Box>
  );
};

export default Search;
