import React from "react";
import { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { borderRight } from "@mui/system";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI"; // we want to call the API request with the useEffect
import { useParams } from "react-router-dom"; // allows us to grab parameters from the route
import { useNavigate } from "react-router-dom";

const SearchFeed = () => {
  // this component is very similar to our feed component. Important differences though:
  // 1. it fetches the data based on the search
  // 2. it doesn't show the sidebar

  const { searchTerm } = useParams(); //it's the same name as the one given to our param in App.js -> "/search/:searchTerm"
  const [videos, setVideos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchFromAPI(`search?part=snippet&q=${searchTerm}`);

        setVideos(data.items);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [searchTerm]);

  return (
    <Box
      p={2}
      sx={{
        overflowY: "auto",
        height: "90vh",
        flex: 2,
        justifyContent: "center",
      }}
    >
      {/* title */}
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Results on
        <span style={{ color: "#f31503" }}> {searchTerm} </span>
        videos
      </Typography>

      {/* videos SearchFeed */}
      {/* video props = data fetched from the specific search */}
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
