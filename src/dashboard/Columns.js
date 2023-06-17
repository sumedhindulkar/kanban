import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import Tasks from "./Tasks";
import AddBoxIcon from "@mui/icons-material/AddBox";
function Columns({ title, color, tasks }) {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#F5F5F5",
        borderRadius: "10px",
        minHeight: "55vh",
        padding: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h5">{title} </Typography>
          <span
            style={{
              fontSize: "10px",
              borderRadius: "50%",
              backgroundColor: "#E0E0E0",
              padding: "6px 10px",
              color: "#625F6D",
              margin: "0 0  0 10px",
            }}
          >
            {tasks.length}
          </span>
        </div>

        {title == "To Do" && <AddBoxIcon sx={{ color: "#5030E5" }} />}
      </Box>
      <Divider
        sx={{ backgroundColor: color, border: `2px solid ${color}`, my: 3 }}
      />
      {tasks.map((item, index) => {
        return <Tasks item={item} index={index} key={index} type={title} />;
      })}
    </Box>
  );
}

export default Columns;
