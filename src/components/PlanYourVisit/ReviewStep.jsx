import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

import "leaflet/dist/leaflet.css";

const ReviewStep = () => {
  const [selectedSpot, setSelectedSpot] = React.useState("");
  const [selectedRestaurant, setSelectedRestaurant] = React.useState("");
  const [selectedEvent, setSelectedEvent] = React.useState("");

  const handleSpotChange = (event) => {
    setSelectedSpot(event.target.value);
  };

  const handleRestaurantChange = (event) => {
    setSelectedRestaurant(event.target.value);
  };

  const handleEventChange = (event) => {
    setSelectedEvent(event.target.value);
  };

  const wonders = [
    { name: "Great Wall of China", position: [40.4319, 116.5704] },
    { name: "Petra, Jordan", position: [30.3285, 35.4444] },
    { name: "Christ the Redeemer, Brazil", position: [-22.9519, -43.2105] },
    { name: "Machu Picchu, Peru", position: [-13.1631, -72.545] },
    { name: "Chichen Itza, Mexico", position: [20.6843, -88.5678] },
    { name: "Roman Colosseum, Italy", position: [41.8902, 12.4922] },
    { name: "Taj Mahal, India", position: [27.1751, 78.0421] },
  ];

  const defaultIcon = new Icon({
    iconUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  return (
    <Box sx={{ width: "100%", marginTop: 2, display: "flex" }}>
      <div style={{ flex: 1 }}>
        <div
          style={{ display: "flex", alignItems: "center", marginBottom: 10 }}
        >
          <Typography variant="h6" gutterBottom style={{ marginRight: 20 }}>
            Spots to Visit
          </Typography>
          <FormControl sx={{ minWidth: 200 }}>
            <Select value={selectedSpot} onChange={handleSpotChange}>
              {/* Add your options here */}
            </Select>
          </FormControl>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", marginBottom: 10 }}
        >
          <Typography variant="h6" gutterBottom style={{ marginRight: 20 }}>
            Restaurants
          </Typography>
          <FormControl sx={{ minWidth: 200 }}>
            <Select
              value={selectedRestaurant}
              onChange={handleRestaurantChange}
            >
              {/* Add your options here */}
            </Select>
          </FormControl>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", marginBottom: 10 }}
        >
          <Typography variant="h6" gutterBottom style={{ marginRight: 20 }}>
            Events
          </Typography>
          <FormControl sx={{ minWidth: 200 }}>
            <Select value={selectedEvent} onChange={handleEventChange}>
              {/* Add your options here */}
            </Select>
          </FormControl>
        </div>
        <Typography
          variant="h6"
          gutterBottom
          component="div"
          sx={{ marginTop: 2 }}
        >
          Transportation Method:{" "}
          {/* Replace with selected transportation method */}
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          component="div"
          sx={{ marginTop: 2 }}
        >
          Total Estimated Price:{" "}
          {/* Replace with calculated total estimated price */}
        </Typography>
      </div>
      <div
        style={{
          flex: 1,
          background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
          padding: 10,
        }}
      >
        <div style={{ height: "500px", borderRadius: "10px" }}>
          <MapContainer
            center={[20, 0]}
            zoom={2}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {wonders.map((wonder) => (
              <Marker
                position={wonder.position}
                key={wonder.name}
                icon={defaultIcon}
              >
                <Popup>{wonder.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </Box>
  );
};

export default ReviewStep;
