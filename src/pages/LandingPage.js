import React from "react";
import { Component, useRef } from "react";
import { Box, Button } from "@mui/material";
import styled from "@emotion/styled";
import {ReactToPrint}  from "react-to-print";
import { Page,Text,Image,Document,StyleSheet } from "@react-pdf/renderer";

const style = StyleSheet.create({});

const StyledBox = styled(Box)`
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)),
    url("https://images.alphacoders.com/612/612109.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
`;

const LandingPage = () => {
  const componentRef = useRef();
  return (
		
		

      <StyledBox
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",

          alignItems: "center",
          // backgroundImage:
        }}
      >
        <Box
          sx={{
            color: "white",
            textAlign: "center",
            position: "absolute",
            textShadow: "1px 1px 2px black, 0 0 1em black",
            fontSize: "80px",
            width: "1300px",
            marginBottom: "100px",
            fontFamily: "Helvetica",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          Welcome to
          <span style={{ fontSize: "100px", marginBottom: "30px" }}>
            {" "}
            Hostel Management System{" "}
          </span>{" "}
          IIIT, Ranchi
        </Box>

        <Button
          href="/login"
          sx={{
            fontSize: "24px",
            margin: "10px",
            borderRadius: "25px",
            textShadow: "2px 2px 2px black",
            marginTop: "360px",
            background: "rgba(0,0,0,0.5)",
            height: "50px",
            ":hover": {
              background: "rgba(0,0,0,0.7)",
            },
          }}
          variant="contained"
        >
          Login
        </Button>
        <Button
          href="/register"
          sx={{
            fontSize: "24px",
            margin: "10px",
            borderRadius: "25px",
            textShadow: "2px 2px 2px black",
            background: "rgba(0,0,0,0.5)",
            height: "50px",
            marginTop: "360px",
            ":hover": {
              background: "rgba(0,0,0,0.7)",
            },
          }}
          variant="contained"
        >
          Register
        </Button>
      </StyledBox>
		  
  );
};

export default LandingPage;
