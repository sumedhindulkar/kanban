import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Box,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  Badge,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import {
  mainListItems,
  secondaryListItems,
  listFooter,
} from "./components/listItems";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
  AppBar,
  Drawer,
} from "./components/DashboardComponents";
// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
export default function Layout(props) {
  const { children } = props;

  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CssBaseline />
        <AppBar position="absolute" open={open} sx={{}}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>

            <Typography component="h1" variant="h6" noWrap sx={{ flexGrow: 1 }}>
              KanBan
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Avatar alt="Remy Sharp" src="/static/avatar.jpg" />

            <IconButton color="inherit">
              <Badge badgeContent={4} color="primary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
            {open && listFooter}
          </List>
        </Drawer>
        <Box sx={!open ? { ml: "100px" } : { ml: "250px" }}>{children}</Box>
      </Box>
    </ThemeProvider>
  );
}
