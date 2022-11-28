import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [recommendedVideos, setRecommendedVideos] = useState([]);
  const { id } = useParams(); //here, we're getting the video's ID

  useEffect(() => {
    async function fetchResults() {
      try {
        const videoData = await fetchFromAPI(
          `videos?part=snippet,statistics&id=${id}`
        );

        // get me the related videos based on my video's id
        const suggestedVideos = await fetchFromAPI(
          `search?part=snippet&relatedToVideoId=${id}&type=video`
        );

        setVideoDetail(videoData.items[0]); //get me only the 1st video
        setRecommendedVideos(suggestedVideos.items);
      } catch (error) {
        console.log(error);
      }
    }

    fetchResults();
  }, [id]);

  // in case all the data hasn't yet been fully loaded
  if (!videoDetail?.snippet) return "Loading...";

  // destructuring the object to make our lives easier
  const {
    snippet: { title, channelTitle, channelId },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        {/* Container 1 = video, channel, subscribers and video count */}
        <Box flex={1}>
          <Box
            sx={{
              width: "100%",
              position: "sticky",
              top: "86px",
            }}
          >
            {/* we need to pass the ID to it */}
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={3}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{
                color: "#fff",
              }}
              py={1}
              px={2}
            >
              {/* Linking to the channel through channel's name */}
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#fff",
                  }}
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>

              {/* View count and like count */}
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography
                  variant="body1"
                  sx={{
                    opacity: 0.7,
                  }}
                >
                  {parseInt(viewCount).toLocaleString()} views
                  {/* parseInt().toLocaleString() = makes our text more readable */}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    opacity: 0.7,
                  }}
                >
                  {parseInt(likeCount).toLocaleString()} views
                  {/* parseInt().toLocaleString() = makes our text more readable */}
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>

        {/* Container 2 = recommended videos */}
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          {/* video props = data fetched from the related videos */}
          <Videos videos={recommendedVideos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
