import React from "react";
import { CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-[500px]">
      <CircularProgress />
    </div>
  );
};

export default Loading;