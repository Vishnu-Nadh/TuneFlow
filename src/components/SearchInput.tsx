"use client";
import useDebounce from "@/hooks/useDebounce";
import { useRouter } from "next/navigation";
import qs from "query-string";
import Input from "./Input";

import React, { useEffect, useState } from "react";

const SearchInput = () => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState<string>("");
  const debouncedInput = useDebounce<string>(inputValue, 500);

  useEffect(() => {
    const query = {
      title: debouncedInput,
    };

    const url = qs.stringifyUrl({
      url: "/search",
      query: query,
    });

    router.push(url);
  }, [router, debouncedInput]);

  return (
    <Input
      className="bg-neutral-900/40"
      placeholder="What do you want to listen?"
      onChange={(e) => setInputValue(e.target.value)}
      value={inputValue}
    />
  );
};

export default SearchInput;
