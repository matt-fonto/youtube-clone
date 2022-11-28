import React from "react";
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { borderRight } from "@mui/system";
import Sidebar from "./Sidebar";
import Videos from "./Videos"; // importing the video component
import { fetchFromAPI } from "../utils/fetchFromAPI"; // we want to call the API request with the useEffect

const Feed = () => {
  // component responsible for:
  // 1. fetching the video data from the API
  // 2. orgazing the screen into sidebar and videos feed
  // 3. pass the videos props to the videos component based on the selected category

  const [selectedCategory, setSelectedCategory] = useState("Classic Music");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchFromAPI(
          // get the data based on the choosen category
          `search?part=snippet&q="${selectedCategory}"` // we find the correct category based on the q="categoryDesired"
        );

        setVideos(data.items); // setting our videos variable -- which will be passed as a prop to the video component -- based on the choosen category
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      {/* Container sidebar */}
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: {
            sx: 0,
            md: 2,
          },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory} // gives us the initial category
          setSelectedCategory={setSelectedCategory} // allows us to navigate through the categories
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{
            mt: 1.5,
            color: "#fff",
          }}
        >
          Copyright 2022 SoftEngMatt
        </Typography>
      </Box>

      {/* Videos container */}
      <Box
        p={2}
        sx={{
          overflowY: "auto",
          height: "90vh",
          flex: 2,
          justifyContent: "center",
          marginLeft: "5vh",
        }}
      >
        {/* title */}
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "#f31503" }}>videos</span>
        </Typography>

        {/* videos feed */}
        {/* video props = data fetched from the specific category */}
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
