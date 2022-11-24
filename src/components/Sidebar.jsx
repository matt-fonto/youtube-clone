import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const selectedCategory = "New"; // meanwhile, this is statically selected, but soon it will be dynamic

const Sidebar = () => {
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
