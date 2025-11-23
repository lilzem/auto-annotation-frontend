import { useRef } from "react";
import { Box, Typography } from "@mui/material";

type AudioPlayerProps = {
  url: string;
};

export const AudioPlayer = ({ url }: AudioPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  return (
    <Box>
      <audio
        ref={audioRef}
        controls
        style={{ width: "100%" }}
        onError={(e) => {
          console.error("Audio error:", e);
          console.error("Audio src:", url);
        }}
        onLoadStart={() => console.log("Audio loading started:", url)}
        onCanPlay={() => console.log("Audio can play:", url)}
      >
        <source src={url} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </Box>
  );
};
