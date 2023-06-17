import { Box, Button, Typography } from "@mui/material";
import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import MessageIcon from "@mui/icons-material/Message";
import DriveFileMoveIcon from "@mui/icons-material/DriveFileMove";
import { Draggable } from "react-beautiful-dnd";
function Tasks({ item, index, type }) {
  return (
    <>
      <Draggable draggableId={`${item.id}`} key={item.id} index={index}>
        {(provided, snapshot) => (
          <Box
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            <Box
              sx={{
                Width: "100%",
                backgroundColor: "#fff",
                minHeight: "150px",
                mb: 2,
                p: 2,
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                {type === "Done" ? (
                  <Button variant="outlined" color="success" size="small">
                    Done
                  </Button>
                ) : (
                  <Button variant="outlined" color="error" size="small">
                    {item.priority}
                  </Button>
                )}

                <MoreHorizIcon />
              </Box>
              <Box sx={{ my: 2 }}>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="subtitle2">{item.context}</Typography>
              </Box>

              {item.image != "" && (
                <Box sx={{ my: 2 }}>
                  <img src={item.image} style={{ width: "100%" }} />
                </Box>
              )}
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <AvatarGroup max={3} spacing={10}>
                    {item.avatar.map((i) => (
                      <Avatar
                        alt={i}
                        src={i}
                        sx={{ width: "30px", height: "30px" }}
                      />
                    ))}
                  </AvatarGroup>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "#625F6D",
                  }}
                >
                  <MessageIcon sx={{ width: "20px", height: "20px", mr: 1 }} />
                  <Typography variant="subtitle1">
                    {item.comments} comments &nbsp;
                  </Typography>
                  <DriveFileMoveIcon
                    sx={{ width: "20px", height: "20px", mr: 1 }}
                  />
                  <Typography variant="subtitle1"> files</Typography>
                </div>
              </Box>
            </Box>
            {provided.placeholder}
          </Box>
        )}
      </Draggable>
    </>
  );
}

export default Tasks;
