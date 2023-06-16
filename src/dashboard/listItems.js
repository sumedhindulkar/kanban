import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Dot from "@mui/icons-material/FiberManualRecord";
import Home from "@mui/icons-material/GridView";
import MessageIcon from "@mui/icons-material/Message";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SettingsIcon from "@mui/icons-material/Settings";
import { Box, Typography } from "@mui/material";
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
  <React.Fragment>
    {listItems.map((i) => {
      return (
        <ListItemButton>
          <ListItemIcon>{i.icon}</ListItemIcon>
          <ListItemText primary={i.title} />
        </ListItemButton>
      );
    })}
  </React.Fragment>
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
  <React.Fragment>
    <ListSubheader component="div" inset>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 0",
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
  </React.Fragment>
);
