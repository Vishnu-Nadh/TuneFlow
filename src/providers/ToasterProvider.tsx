"use client";

import React from "react";
import { Toaster } from "react-hot-toast";

const ToasterProvider = () => {
  return (
    <Toaster
      toastOptions={{
        style: {
          background: "#444",
          color: "#fff",
        },
      }}
    />
  );
};

export default ToasterProvider;
