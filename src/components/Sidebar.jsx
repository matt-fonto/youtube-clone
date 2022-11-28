import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants"; // receiving the categories from the constants = array of categories

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  //component responsible for:
  //1. mapping through our categories list and getting each category
  //2. getting and rendering the category's name and icon
  //3. allowing us to pass the name of the category through onClick to the setSelectedCategory -- declared in the Feed component

  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" }, // responsive, it becomes a column in small devices
      }}
    >
      {categories.map((category) => {
        const { icon, name } = category;
        return (
          <button
            className="category-btn"
            // if this is my selected category, then apply these styles
            // && = then
            style={{
              background: name === selectedCategory && "#fc1503",
              color: "white",
            }}
            key={name} // when we map things we react, we have to give each property a key
            onClick={() => setSelectedCategory(name)} //then we can select our category dynamically
          >
            <span
              style={{
                color: name === selectedCategory ? "white" : "red",
                marginRight: "0.5rem",
              }}
            >
              {icon}
            </span>
            <span>{name}</span>
          </button>
        );
      })}
    </Stack>
  );
};

export default Sidebar;
