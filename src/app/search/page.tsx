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
      <Header className="sticky top-0 left-0 max-h-20 z-10 bg-[#372830]">{null}</Header>
      <div className="mb-2 flex flex-col gap-y-2 sticky top-20 left-0 px-6 py-3 z-10 bg-[#372830]">
        <h1 className="text-white text-2xl font-semibold">Search</h1>
        <SearchInput />
      </div>
      <SearchContent songs={songs} />
    </Box>
  );
};

export default Search;
