import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  // paper is similar to a div, but it has a whitebackground and some elevation
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
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
        value=""
        onChange={() => {}}
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
