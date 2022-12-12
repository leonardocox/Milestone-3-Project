import React, { useState, Component } from "react";
import { Link } from "react-router-dom";
import { TextField, Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function RoomJoinPage(props) {
  const navigate = useNavigate();

  const [roomCode, setroomCode] = useState("");
  const [error, seterror] = useState("");

  const handleTextFieldChange = () => {
    setroomCode(event.target.value);
  };

  const roomButtonPressed = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        code: roomCode,
      }),
    };

    fetch("/api/join-room", requestOptions)
      .then((response) => {
        if (response.ok) {
          navigate(`/room/${roomCode}`);
        } else {
          seterror("Room not found.");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
