import React from "react";
import { Stack, Box } from "@mui/material";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";

const Videos = ({ videos }) => {
  return (
    <Stack direction="row" flexWrap="wrap" gap={2}>
      {videos.map((item, index) => {
        return (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {/* if it's a channel */}
            {item.id.channelId && <ChannelCard channelDetail={item} />}

            {/* if it's a video */}
            {item.id.videoId && <VideoCard video={item} />}
          </Box>
        );
      })}
    </Stack>
  );
};

export default Videos;
