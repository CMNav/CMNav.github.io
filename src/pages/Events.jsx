// import React, { useState } from "react";
// import Navbar from "../components/navbar";
// import {
//   Box,
//   Typography,
//   FormControl,
//   InputLabel,
//   MenuItem,
//   Select,
//   Card,
// } from "@mui/material";
// import herobg from "../assets/events-hero.jpeg";
// import Hero from "../components/Hero";
// import "../styles/Events.css";

// const organizations = ["Organization 1", "Organization 2", "Organization 3"];
// const eventTypes = ["Type 1", "Type 2", "Type 3"];
// const events = [
//   { name: "Event 1", organization: "Organization 1", type: "Type 1" },
//   { name: "Event 2", organization: "Organization 2", type: "Type 2" },
//   { name: "Event 3", organization: "Organization 3", type: "Type 3" },
// ];

// const Events = () => {
//   const [selectedOrganization, setSelectedOrganization] = useState("");
//   const [selectedEventType, setSelectedEventType] = useState("");

//   const handleOrganizationChange = (event) => {
//     setSelectedOrganization(event.target.value);
//   };

//   const handleEventTypeChange = (event) => {
//     setSelectedEventType(event.target.value);
//   };

//   return (
//     <div>
//       <div className="nav">
//         <Navbar />
//       </div>
//       <div className="hero-events">
//         <Hero
//           title="Events"
//           description="Discover the best events in the city"
//           backgroundImage={herobg}
//         />
//       </div>
//       <div className="events-filters">
//         <FormControl sx={{ marginRight: "10px" }} className="org-filter">
//           <InputLabel>Organization</InputLabel>
//           <Select
//             value={selectedOrganization}
//             onChange={handleOrganizationChange}
//             className="org-select"
//           >
//             <MenuItem value="">All Organizations</MenuItem>
//             {organizations.map((organization) => (
//               <MenuItem value={organization} key={organization}>
//                 {organization}
//               </MenuItem>
//             ))}
//           </Select>
//         </FormControl>
//         <FormControl className="type-filter">
//           <InputLabel>Event Type</InputLabel>
//           <Select
//             value={selectedEventType}
//             onChange={handleEventTypeChange}
//             className="type-select"
//           >
//             <MenuItem value="">All Event Types</MenuItem>
//             {eventTypes.map((eventType) => (
//               <MenuItem value={eventType} key={eventType}>
//                 {eventType}
//               </MenuItem>
//             ))}
//           </Select>
//         </FormControl>
//       </div>
//     </div>
//   );
// };

// export default Events;

import React, { useState } from "react";
import Navbar from "../components/navbar";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Card,
  CardContent,
  CardActions,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import herobg from "../assets/events-hero.jpeg";
import Hero from "../components/Hero";
import "../styles/Events.css";

const organizations = ["Organization 1", "Organization 2", "Organization 3"];
const eventTypes = ["Type 1", "Type 2", "Type 3"];
const events = [
  {
    name: "Event 1",
    image: "https://picsum.photos/200/300",
    organization: "Organization 1",
    type: "Type 1",
    smallDescription: "Description for Event 1",
    description: "Description for Event 1",
  },
  {
    name: "Event 2",
    image: "https://picsum.photos/200/300",
    organization: "Organization 2",
    type: "Type 2",
    smallDescription: "Description for Event 2",
    description: "Description for Event 2",
  },
  {
    name: "Event 3",
    image: "https://picsum.photos/200/300",
    organization: "Organization 3",
    type: "Type 3",
    smallDescription: "Description for Event 3",
    description: "Description for Event 3",
  },
];

const Events = () => {
  const [selectedOrganization, setSelectedOrganization] = useState("");
  const [selectedEventType, setSelectedEventType] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleOrganizationChange = (event) => {
    setSelectedOrganization(event.target.value);
  };

  const handleEventTypeChange = (event) => {
    setSelectedEventType(event.target.value);
  };

  const handleOpenDialog = (event) => {
    setSelectedEvent(event);
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="nav">
        <Navbar />
      </div>
      <div className="hero-events">
        <Hero
          title="Events"
          description="Discover the best events in the city"
          backgroundImage={herobg}
        />
      </div>
      <div className="events-filters">
        <FormControl sx={{ marginRight: "10px" }} className="org-filter">
          <InputLabel>Organization</InputLabel>
          <Select
            value={selectedOrganization}
            onChange={handleOrganizationChange}
            className="org-select"
          >
            <MenuItem value="">All Organizations</MenuItem>
            {organizations.map((organization) => (
              <MenuItem value={organization} key={organization}>
                {organization}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className="type-filter">
          <InputLabel>Event Type</InputLabel>
          <Select
            value={selectedEventType}
            onChange={handleEventTypeChange}
            className="type-select"
          >
            <MenuItem value="">All Event Types</MenuItem>
            {eventTypes.map((eventType) => (
              <MenuItem value={eventType} key={eventType}>
                {eventType}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      {/* Popular Events */}
      <div className="events-section">
        <div className="section-header">
          <Typography variant="h5" className="section-title">
            Popular Events
          </Typography>
          <a href="#" className="see-more">
            See More
          </a>
        </div>
        <div className="events-cards">
          {events.map((event) => (
            <Card
              className="event-card"
              onClick={() => handleOpenDialog(event)}
              key={event.name}
            >
              <CardContent>
                <img src={event.image} alt={event.name} />
                <Typography variant="h6">{event.name}</Typography>
                <Typography variant="subtitle1">
                  {event.organization}
                </Typography>
                <Typography variant="body2">
                  {event.smallDescription}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Online Events */}
      <div className="events-section">
        <div className="section-header">
          <Typography variant="h5" className="section-title">
            Online Events
          </Typography>
          <a href="#" className="see-more">
            See More
          </a>
        </div>
        <div className="events-cards">
          {events.map((event) => (
            <Card
              className="event-card"
              onClick={() => handleOpenDialog(event)}
              key={event.name}
            >
              <CardContent>
                <img src={event.image} alt={event.name} />

                <Typography variant="h6">{event.name}</Typography>
                <Typography variant="subtitle1">
                  {event.organization}
                </Typography>
                <Typography variant="body2">
                  {event.smallDescription}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Event Details Dialog */}
      <Dialog open={open} onClose={handleCloseDialog}>
        <DialogTitle>{selectedEvent && selectedEvent.name}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {selectedEvent && selectedEvent.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Events;
