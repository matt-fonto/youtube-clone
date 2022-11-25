import React from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetail, marginTop, marginLeft }) => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "37vh",
        borderRadius: "5px",
        transition: "all 0.5s",
        boxShadow: "none",
        justifyContent: "center",
        alignItems: "center",
        width: {
          md: "40vh",
          xs: "356px",
        },
        "&:hover": {
          boxShadow: "1px 1px 5px red",
          opacity: "1",
        },
        marginTop, // it's only used when calling the prop, this way we can personalize a reusable component
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            className="video-card"
            image={channelDetail?.snippet?.thumbnails?.high?.url}
            alt={channelDetail?.snippet?.title}
            sx={{
              borderRadius: "100%",
              height: "180px",
              width: "180px",
              mb: 2,
              border: "1px solid #e3e3e3",
              ml: 5,
            }}
          />
          <Typography variant="h6">
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ fontSize: 15, color: "gray", ml: "5px" }} />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString()}{" "}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
