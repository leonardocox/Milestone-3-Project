import React, { Component } from "react";
import CreateRoomPage from "./CreateRoomPage";
import RoomJoinPage from "./RoomJoinPage";
import Room from "./Room";
import { BrowserRouter, Routes, Route, Link, Redirect } from "react-router-dom";
import { Grid, Button, ButtonGroup, Typography } from "@mui/material";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  // componentdidmount means that the component just rendered on the screen for the first time
  async componentDidMount() {}

  renderHomePage() {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} align="center">
          <Typography variant="h3" compact="h3">
            Disco Room
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <ButtonGroup disableElevation variant="contained" color="primary">
            <Button color="primary" to="/join" component={Link}>
              Join a Disco!
            </Button>
            <Button color="secondary" to="/create" component={Link}>
              Create a Disco?
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    );
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={this.renderHomePage()}></Route>
          <Route path="/join" element={<RoomJoinPage />} />
          <Route path="/create" element={<CreateRoomPage />} />
          <Route path="/room/:roomCode" element={<Room />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
