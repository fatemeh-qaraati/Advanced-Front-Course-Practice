import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Loading = ({
  isLoading,
  progressStep = 10,
  progressDelay = 500,
  children,
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isLoading) {
      setProgress(0);
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prevProgress + progressStep;
        });
      }, progressDelay);

      return () => clearInterval(interval);
    }
  }, [isLoading, progressStep, progressDelay]);

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress variant="determinate" value={progress} />
      </div>
    );
  }

  return <>{children}</>;
};

export default Loading;