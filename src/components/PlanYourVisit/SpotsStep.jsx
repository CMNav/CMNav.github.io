import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const spots = [
  {
    id: 1,
    title: "Spot 1",
    description: "This is the description of Spot 1.",
    image: "image-url-1",
  },
  {
    id: 2,
    title: "Spot 2",
    description: "This is the description of Spot 2.",
    image: "image-url-2",
  },
  {
    id: 3,
    title: "Spot 3",
    description: "This is the description of Spot 3.",
    image: "image-url-2",
  },
  // Add more spots...
];

const ItemStep = ({ items }) => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Box sx={{ width: "80%" }}>
        {items.map((item) => (
          <Card
            key={item.id}
            sx={{ display: "flex", marginBottom: "20px", position: "relative" }}
          >
            <CardMedia
              component="img"
              sx={{ width: 200, height: 200, objectFit: "cover" }}
              image={item.image}
              alt={item.title}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </CardContent>
            <IconButton
              aria-label="Remove"
              sx={{
                position: "absolute",
                top: "5px",
                right: "5px",
                color: "gray",
              }}
            >
              <CloseIcon />
            </IconButton>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default ItemStep;
