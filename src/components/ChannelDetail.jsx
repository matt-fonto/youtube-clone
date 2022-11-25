import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import ChannelCard from "./ChannelCard";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchResults() {
      try {
        const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);
        setChannelDetail(data?.items[0]);

        const videosData = await fetchFromAPI(
          `search?channelId=${id}&part=snippet&order=date`
        );
        setVideos(videosData?.items);
      } catch (error) {
        console.log(error);
      }
    }
    fetchResults();
  }, [id]);

  return (
    <Box minHeight="95vh">
      {/* header */}
      <Box>
        {/* gradient header */}
        <div
          style={{
            background:
              "linear-gradient(0deg, rgba(115,32,32,1) 0%, rgba(51,51,51,1) 79%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            marginBottom: "5vh",
          }}
        >
          <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
        </div>
      </Box>

      {/* videos */}
      <Box display="flex" p="2">
        <Box
          sx={{
            mr: {
              sm: "100px",
            },
          }}
        />
        <Videos
          videos={videos}
          // sx={{
          //   width: "100%",
          // }}
        />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
