import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  // component responsible for:
  // 1. storing each key stroke to be passed as an input onSubmit
  // 2. getting our search term and allowing us to programmatically navigate to it

  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  // useNavigate = allows us to navigate programatically, once and event happens

  function handleSubmit(e) {
    e.preventDefault(); // we don't want it to reload the page

    if (searchTerm) {
      //if we have a search term
      navigate(`/search/${searchTerm}`); //we navigate to this path

      setSearchTerm("");
    }
  }

  return (
    // paper is similar to a div, but it has a whitebackground and some elevation
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
          // e.target.value = where the value of a key stroke is stored
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
