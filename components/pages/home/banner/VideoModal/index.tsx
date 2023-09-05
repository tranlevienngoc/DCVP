import { Box } from "@chakra-ui/react";
import Script from "next/script";
import React from "react";

export default function VideoModal() {
  return (
    <Box>
      <div
        style={{ padding: "56.25% 0 0 0", position: "relative" }}
        className="video"
      >
        <iframe
          src="https://player.vimeo.com/video/858844183?byline=0&portrait=0&title=&autopause=0"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            borderRadius: "20px",
          }}
          title="Popoy Dance"
        ></iframe>
      </div>
      <Script src="https://player.vimeo.com/api/player.js"></Script>
    </Box>
  );
}
