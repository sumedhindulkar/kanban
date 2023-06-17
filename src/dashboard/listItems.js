import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Dot from "@mui/icons-material/FiberManualRecord";
import Home from "@mui/icons-material/GridView";
import MessageIcon from "@mui/icons-material/Message";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SettingsIcon from "@mui/icons-material/Settings";
import { Box, Typography, TextField } from "@mui/material";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

export const listFooter = (
  <>
    <Box
      sx={{
        backgroundColor: "#F5F5F5",
        margin: "50px 20px 0 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "80%",
        borderRadius: "10px",
        height: "130px",
      }}
    >
      <div
        style={{
          backgroundColor: "#F5F5F5",
          margin: "-40px 0 0 0",
          borderRadius: "50%",
          padding: "10px",
        }}
      >
        <LightbulbIcon
          sx={{
            color: "#FBCB18",
            fontSize: "2.7rem",
            boxShadow: "0px 0px 140px 1px rgba(251,203,24,1)",
            borderRadius: "50%",
          }}
        />
      </div>

      <Typography variant="subtitle1" sx={{ mb: 2 }}>
        {" "}
        Thougts
      </Typography>
      <TextField
        sx={{ width: "80%", backgroundColor: "#fff" }}
        defaultValue="Any Message"
        size="small"
      />
    </Box>
  </>
);

const listItems = [
  {
    icon: <Home />,
    title: "Home",
  },
  {
    icon: <MessageIcon />,
    title: "Messages",
  },
  {
    icon: <PlaylistAddCheckIcon />,
    title: "Tasks",
  },
  {
    icon: <PeopleAltIcon />,
    title: "Members",
  },
  {
    icon: <SettingsIcon />,
    title: "Settings",
  },
];

export const mainListItems = (
  <>
    {listItems.map((i) => {
      return (
        <ListItemButton>
          <ListItemIcon>{i.icon}</ListItemIcon>
          <ListItemText primary={i.title} />
        </ListItemButton>
      );
    })}
  </>
);

const projects = [
  {
    icon: <Dot style={{ color: "chartreuse" }} />,
    title: "Mobile App",
  },
  {
    icon: <Dot style={{ color: "gold" }} />,
    title: "Website Redesign",
  },
  {
    icon: <Dot style={{ color: "gainsboro" }} />,
    title: "Design System",
  },
  {
    icon: <Dot style={{ color: "deepskyblue" }} />,
    title: "Wireframes",
  },
];

export const secondaryListItems = (
  <>
    <ListSubheader component="div" inset>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "6px 0",
        }}
      >
        <Typography variant="subtitle1">MY PROJECTS</Typography>
      </Box>
    </ListSubheader>
    {projects.map((i) => {
      return (
        <ListItemButton>
          <ListItemIcon>{i.icon}</ListItemIcon>
          <ListItemText primary={i.title} />
        </ListItemButton>
      );
    })}
  </>
);
