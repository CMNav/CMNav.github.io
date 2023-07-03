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
import { events_gallery, events_popular } from "../assets/EventsLists";

const organizations = [
  "Ottawa Festivals",
  "National Arts Centre",
  "Ottawa Art Gallery",
];
const eventTypes = ["Music Festival", "Theatre", "Art Exhibition"];

const Events = () => {
  const [selectedOrganization, setSelectedOrganization] = useState("");
  const [selectedEventType, setSelectedEventType] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedEvents, setSelectedEvents] = useState([]);

  const handleCardClick = (selectedEvent) => {
    setSelectedEvent(selectedEvent);
    setOpen(true);
  };

  const handleAddEvent = (event) => {
    event.stopPropagation();
    const selectedEvent = events_popular.find(
      (e) => e.name === event.target.name
    );
    setSelectedEvents((prevSelectedEvents) => [
      ...prevSelectedEvents,
      selectedEvent,
    ]);
  };

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
          <Typography variant="h5" className="section-title" sx={{ mb: 3 }}>
            Popular Events
          </Typography>
          <a href="#" className="see-more">
            See More
          </a>
        </div>
        <div className="events-cards">
          {events_popular.map((event) => (
            <Card
              className="event-card"
              onClick={() => handleCardClick(event)}
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
              <CardActions>
                <Button name={event.name} onClick={handleAddEvent}>
                  Add to List
                </Button>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>

      {/* Ottawa Art Gallery */}
      <div className="events-section">
        <div className="section-header">
          <Typography variant="h5" className="section-title" sx={{ mb: 3 }}>
            Ottawa Art Gallery
          </Typography>
          <a href="#" className="see-more">
            See More
          </a>
        </div>
        <div className="events-cards">
          {events_gallery.map((event) => (
            <Card
              className="event-card"
              onClick={() => handleCardClick(event)}
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
              <CardActions>
                <Button name={event.name} onClick={handleAddEvent}>
                  Add to List
                </Button>
              </CardActions>
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
