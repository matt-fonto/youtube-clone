import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // paper is similar to a div, but it has a whitebackground and some elevation
  function handleSubmit(e) {
    e.preventDefault(); // we don't want it to reload the page

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm("");
    }
  }

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: "5px",
        border: "1px solid #222",
        pl: 2,
        transition: "all 0.4s",
        mr: { sm: 5 },
        "&:hover": {
          boxShadow: "1px 1px red",
        },
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        // now, we can write things down
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          // e.target.value = where the value of a key press is stored
        }}
      />
      <IconButton
        type="submit"
        sx={{
          p: "10px",
          color: "red",
        }}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
