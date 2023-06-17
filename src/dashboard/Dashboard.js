import React, { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
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
import CreateIcon from "@mui/icons-material/Create";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import InputAdornment from "@mui/material/InputAdornment";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import DateRangeIcon from "@mui/icons-material/DateRange";
import Columns from "./Columns";
import { taskList } from "./mock";
import PeopleIcon from "@mui/icons-material/People";
// TODO remove, this demo shouldn't need to reset the theme.
export default function Dashboard() {
  const [todos, setTodos] = useState(taskList.filter((i) => i.type === "ToDo"));
  const [progress, setProgress] = useState(
    taskList.filter((i) => i.type === "OnProgress")
  );
  const [completed, setCompleted] = useState(
    taskList.filter((i) => i.type === "Done")
  );

  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (source.droppableId === destination.droppableId) return;

    if (source.droppableId == 1) {
      setTodos((prev) => {
        return todos.filter((i) => i.id != draggableId);
      });
    } else if (source.droppableId == 2) {
      setProgress((prev) => {
        return progress.filter((i) => i.id != draggableId);
      });
    } else {
      setCompleted((prev) => {
        return completed.filter((i) => i.id != draggableId);
      });
    }
    let item = taskList.find((i) => i.id == draggableId);
    if (destination.droppableId == 1) {
      setTodos((prev) => {
        return [...prev, item];
      });
    } else if (destination.droppableId == 2) {
      setProgress((prev) => {
        return [...prev, item];
      });
    } else {
      setCompleted((prev) => {
        return [...prev, item];
      });
    }
  };

  return (
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
                    margin: "0 0 0 15px",
                  }}
                />
              </div>
              <div style={{ margin: "30px 0" }}>
                <TextField
                  select
                  size="small"
                  defaultValue="Filter"
                  sx={{ width: "150px", mr: 2, mb: 2 }}
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
          <DragDropContext onDragEnd={handleDragEnd}>
            <Grid container item xs={12} spacing={3}>
              <Grid item lg={4}>
                <Columns
                  color={"#5030E5"}
                  title={"To Do"}
                  tasks={todos}
                  id={"1"}
                />
              </Grid>
              <Grid item lg={4}>
                <Columns
                  color={"#FFA500"}
                  title={"On Progress"}
                  tasks={progress}
                  id={"2"}
                />
              </Grid>
              <Grid item lg={4}>
                <Columns
                  color={"#8BC48A"}
                  title={"Done"}
                  tasks={completed}
                  id={"3"}
                />
              </Grid>
            </Grid>
          </DragDropContext>
        </Grid>
      </Container>
    </Box>
  );
}
