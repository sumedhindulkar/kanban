import React, { useState } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import CssBaseline from "@mui/material/CssBaseline";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import AppsIcon from "@mui/icons-material/Apps";
import AddBoxIcon from "@mui/icons-material/AddBox";
import {
  Box,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  Badge,
  Container,
  Grid,
  Paper,
  TextField,
  MenuItem,
  Avatar,
  AvatarGroup,
} from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import { mainListItems, secondaryListItems, listFooter } from "./listItems";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
  AppBar,
  Drawer,
} from "./DashboardComponents";
import CreateIcon from "@mui/icons-material/Create";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import InputAdornment from "@mui/material/InputAdornment";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import DateRangeIcon from "@mui/icons-material/DateRange";
import Columns from "./Columns";
import { taskList } from "./mock";
import PeopleIcon from "@mui/icons-material/People";
// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
export default function Layout() {
  const [todos, setTodos] = useState(taskList.filter((i) => i.type === "ToDo"));
  const [progress, setProgress] = useState(
    taskList.filter((i) => i.type === "OnProgress")
  );
  const [completed, setCompleted] = useState(
    taskList.filter((i) => i.type === "Done")
  );

  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const handleDragEnd = () => {};

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
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
        <Box
          component="main"
          sx={{
            backgroundColor: "#fff",
            flexGrow: 1,
            height: "100vh",
          }}
        >
          <Toolbar />

          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid container item lg={12}>
                <Grid md={8} sx={{}}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      height: "70px",
                    }}
                  >
                    <Typography variant="h3">Mobile App</Typography>
                    <CreateIcon
                      color="primary"
                      sx={{
                        backgroundColor: "#F5F5F5",
                        padding: "4px",
                        fontSize: "1.8rem",
                        borderRadius: "4px",
                        margin: " 0 0 0 15px",
                      }}
                    />
                    <InsertLinkIcon
                      color="primary"
                      sx={{
                        backgroundColor: "#F5F5F5",
                        padding: "4px",
                        fontSize: "1.8rem",
                        borderRadius: "4px",
                        margin: " 0 0 0 15px",
                      }}
                    />
                  </div>
                  <div style={{ margin: "30px 0" }}>
                    <TextField
                      select
                      size="small"
                      defaultValue="Filter"
                      sx={{ width: "150px", mr: 2 }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <FilterAltOutlinedIcon />
                          </InputAdornment>
                        ),
                      }}
                    >
                      {["Filter"].map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>
                    <TextField
                      select
                      size="small"
                      defaultValue="Today"
                      sx={{ width: "150px" }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <DateRangeIcon />
                          </InputAdornment>
                        ),
                      }}
                    >
                      {["Today"].map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>
                  </div>
                </Grid>
                <Grid md={4} sx={{}}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      height: "70px",
                    }}
                  >
                    <AddBoxIcon
                      color="primary"
                      sx={{
                        padding: "4px",
                        fontSize: "2rem",
                        borderRadius: "4px",
                        margin: " 0 0 0 15px",
                      }}
                    />
                    <Typography variant="subtitle1" sx={{ mx: 1 }}>
                      Invite
                    </Typography>
                    <AvatarGroup max={5} spacing={10}>
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Avatar
                          alt={i}
                          src={"/static/avatar.jpg"}
                          sx={{ width: "30px", height: "30px" }}
                        />
                      ))}
                    </AvatarGroup>
                  </Box>
                  <Box
                    sx={{
                      margin: "30px 0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      maxWidth: "250px",
                    }}
                  >
                    <TextField
                      select
                      size="small"
                      defaultValue="People"
                      sx={{ width: "150px", mr: 2 }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PeopleIcon />
                          </InputAdornment>
                        ),
                      }}
                    >
                      {["People"].map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>

                    <Divider
                      orientation="vertical"
                      sx={{ height: "40px", border: "1.5px solid grey" }}
                    />
                    <WorkspacesIcon
                      color="primary"
                      sx={{
                        padding: "4px",
                        fontSize: "2rem",
                        borderRadius: "4px",
                        margin: " 0 0 0 15px",
                      }}
                    />
                    <AppsIcon
                      sx={{
                        padding: "4px",
                        fontSize: "2rem",
                        borderRadius: "4px",
                        margin: " 0 0 0 15px",
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
              <DragDropContext onDragEnd={handleDragEnd}></DragDropContext>

              <Grid container item xs={12} spacing={3}>
                <Grid item md={4}>
                  <Columns color={"#5030E5"} title={"To Do"} tasks={todos} />
                </Grid>
                <Grid item md={4}>
                  <Columns
                    color={"#FFA500"}
                    title={"On Progress"}
                    tasks={progress}
                  />
                </Grid>
                <Grid item md={4}>
                  <Columns color={"#8BC48A"} title={"Done"} tasks={completed} />
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
