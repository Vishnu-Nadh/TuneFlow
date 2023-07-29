"use client";

import { PuffLoader } from "react-spinners";

import Box from "@/components/Box";

const Loading = () => {
  return (
    <Box className="h-full flex items-center justify-center">
      <PuffLoader color="#BE123C" size={40} />
    </Box>
  );
};

export default Loading;
