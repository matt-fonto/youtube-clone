import React from "react";
import { Link } from "react-router-dom"; // when we click the video, we want to navigate to it
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      sx={{
        borderRadius: "5px",
        height: "37vh",
        transition: "all 0.5s",
        boxShadow: "none",
        width: {
          md: "40vh",
          xs: "100%",
        },
        "&:hover": {
          boxShadow: "1px 1px 5px gray",
        },
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{
            height: "22vh",
            width: "100%",
            objectFit: "cover",
          }}
        />
      </Link>
      <CardContent
        sx={{
          background: "#111",
          height: "11vh",
        }}
      >
        {/* The video title */}
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#fff">
            {snippet?.title.slice(0, 40) || demoVideoTitle.slice(0, 40)}
          </Typography>
        </Link>

        {/* The channel title */}
        <Link
          to={
            snippet.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" fontWeight="bold" color="#999">
            {snippet?.channelTitle.slice(0, 40) ||
              demoChannelTitle.slice(0, 40)}
            <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
