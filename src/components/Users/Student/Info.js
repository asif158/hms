import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Typography,
} from "@mui/material";
import React from "react";

const Info = () => {
  return (
    <>
      <Box
        sx={{
          // width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          marginY: "20px",
          width: "100%",
        }}
      >
        <Avatar
          src="https://mui.com/static/images/avatar/2.jpg"
          sx={{ height: 120, width: 120 }}
        />
        <Typography variant="h4" sx={{ marginLeft: "30px" }}>
          Jayadeep Pati
        </Typography>
      </Box>
      <Accordion
        sx={{
          width: "100%",
          marginTop: "50px",

          "::before": {
            display: "none",
          },
        }}
        elevation={2}
        disableGutters
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Your Info</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Name: Jayadeep Pati</Typography>
          <Typography>Phone: 8888888888</Typography>
          <Typography>Email: jayadeep@pati.com</Typography>
          <Typography>Address : Alal patti Darbhanga Bihar</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          width: "100%",
          marginTop: "50px",

          "::before": {
            display: "none",
          },
        }}
        elevation={2}
        disableGutters
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Hall Information</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Room NO: B 705</Typography>
          <Typography>Hall : Ephimere</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          width: "100%",
          marginTop: "50px",

          "::before": {
            display: "none",
          },
        }}
        elevation={2}
        disableGutters
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Due Payments</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Hall Dues: 15000</Typography>
          <Typography>Mess Dues: 16500</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          width: "100%",
          marginTop: "50px",

          "::before": {
            display: "none",
          },
        }}
        elevation={2}
        disableGutters
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Complaints</Typography>
        </AccordionSummary>
        <AccordionDetails></AccordionDetails>
      </Accordion>
    </>
  );
};

export default Info;
