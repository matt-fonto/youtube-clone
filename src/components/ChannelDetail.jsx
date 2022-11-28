import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // we want to get our params dynamically
import { Box } from "@mui/material";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import ChannelCard from "./ChannelCard";

const ChannelDetail = () => {
  // This is the channel's page
  // component responsible for:
  // 1. fetch the channel's information based on the ID
  // 2. rendering the channel's page = channel card + channel's videos

  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams(); //router parameters = a variable inside the route -> "channel/123", "channel/999"
  // useParams = allows us to get the channel's id

  useEffect(() => {
    async function fetchResults() {
      try {
        const data = await fetchFromAPI(`channels?part=snippet&id=${id}`); // we find our channel based on it's ID
        setChannelDetail(data?.items[0]);

        const videosData = await fetchFromAPI(
          `search?channelId=${id}&part=snippet&order=date`
        );
        setVideos(videosData?.items);
        // console.log(channelDetail);
        // console.log(videosData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchResults();
  }, [id]);

  // console.log(channelDetail?.brandSettings?.image?.bannerExternalUrl);
  return (
    <Box minHeight="95vh">
      {/* header = Channel detail */}
      <Box>
        {/* channel's header */}

        <div
          style={{
            background:
              "linear-gradient(0deg, rgba(115,32,32,1) 0%, rgba(51,51,51,1) 79%)",
            zIndex: 1,
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
          {/* just when it's inside the Channel Detail do I want it to have a marginTop of -110, that's why I pass it as a prop */}
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
        {/* video props = data fetched from the specific channel */}
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
