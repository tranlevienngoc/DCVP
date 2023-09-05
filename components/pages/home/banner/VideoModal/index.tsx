import { Box } from "@chakra-ui/react";
import React from "react";

export default function VideoModal() {
  return (
    <Box>
      <video
        className="video"
        src="https://popoy-video.s3.ap-southeast-1.amazonaws.com/popoy_dance+(1080p).mp4"
        autoPlay
        controls
      />
    </Box>
  );
}
