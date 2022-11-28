import React from "react";
import { Stack, Box } from "@mui/material";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";

const Videos = ({ videos, direction }) => {
  // responsible for:
  //1. receiving the videos props and mapping through it
  //2. parenting the ChannelCard and the VideoCard components
  //3. passing the correct props to each child component -- either the ChannelCard or VideoCard

  // making sure we load the data
  if (!videos?.length) return "Loading...";

  return (
    // first, we check if there's a direction being passed, if there is great, good with the one being passed
    // otherwise, go with "row"
    <Stack direction={direction || "row"} flexWrap="wrap" gap={2}>
      {videos.map((item, index) => {
        // we call it item because the individual piece of data can be a video or a channel
        return (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {/* if the data corresponds to a channel */}
            {item.id.channelId && <ChannelCard channelDetail={item} />}

            {/* if it's a video */}
            {item.id.videoId && <VideoCard videoInfo={item} />}
          </Box>
        );
      })}
    </Stack>
  );
};

export default Videos;
