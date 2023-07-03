import React, { useState } from "react";
import { Box, Typography, TextField, Grid } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

const PersonalStep = () => {
  const [arrivalDate, setArrivalDate] = React.useState(dayjs("2023-07-17"));
  const [departureDate, setDepartureDate] = React.useState(dayjs("2023-07-19"));

  return (
    <Box>
      <Typography variant="h6">Step 6: Personal Information</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField label="Full Name" name="fullName" fullWidth required />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Email"
            name="email"
            type="email"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Arrival Date"
              name="arrivalDate"
              fullWidth
              required
              value={arrivalDate}
              onChange={(newValue) => setArrivalDate(newValue)}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Departure Date"
              name="departureDate"
              fullWidth
              required
              value={departureDate}
              onChange={(newValue) => setDepartureDate(newValue)}
            />
          </LocalizationProvider>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PersonalStep;
