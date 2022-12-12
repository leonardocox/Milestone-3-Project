import React, { Component } from "react";
import CreateRoomPage from "./CreateRoomPage";
import RoomJoinPage from "./RoomJoinPage";
import Room from "./Room";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Redirect,
  Navigate,
} from "react-router-dom";
import { Grid, Button, ButtonGroup, Typography } from "@mui/material";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomCode: null,
    };
  }

  // Basically is a going to run right as the page loads

  async componentDidMount() {
    fetch("/api/user-in-room")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          roomCode: data.code,
        });
      });
  }

  renderHomePage() {
    if (this.state.roomCode) {
      return <Navigate to={`/room/${this.state.roomCode}`} replace={true} />;
    } else {
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
                Join a Disco
              </Button>
              <Button color="secondary" to="/create" component={Link}>
                Create a Disco
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      );
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={this.renderHomePage()} />
          <Route path="/join" element={<RoomJoinPage />} />
          <Route path="/create" element={<CreateRoomPage />} />
          <Route path="/room/:roomCode" element={<Room />} />{" "}
          {/* : in path value represents a parameter in url */}
        </Routes>
      </BrowserRouter>
    );
  }
}
