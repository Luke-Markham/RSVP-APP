import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";

import Header from "./components/Header.js";
import Navigation from "./components/Nav.js";
import Details from "./components/Pages/Details.js";
import ImComing from "./components/Pages/ImComing.js";
import WhosGoing from "./components/Pages/WhosGoing.js";
import Playlist from "./components/Pages/Playlist.js";
import Footer from "./components/Footer.js";

class App extends Component {
  state = {
    attending: 6,

    attendees: [
      {
        firstName: "James",
        lastName: "Morlony",
        phone: "233-552-3222",
        plusOne: false,
        soberDriver: false,
        id: 1
      },

      {
        firstName: "David",
        lastName: "Johns",
        phone: "232-412-3289",
        plusOne: true,
        soberDriver: true,
        id: 2
      },

      {
        firstName: "Kelsey",
        lastName: "Davers",
        phone: "236-921-6957",
        plusOne: false,
        soberDriver: false,
        id: 3
      },

      {
        firstName: "Jessica",
        lastName: "Nambers",
        phone: "232-667-789",
        plusOne: true,
        soberDriver: false,
        id: 4
      }
    ]
  };

  prevAttendeeId = 4;

  handleAddAttendee = whosComingState => {
    const {
      user_name_first,
      user_surname,
      user_phone,
      user_plusOne,
      user_soberDriver
    } = whosComingState;
    this.setState({
      attendees: [
        ...this.state.attendees,
        {
          firstName: user_name_first,
          lastName: user_surname,
          phone: user_phone,
          plusOne: user_plusOne,
          soberDriver: user_soberDriver,
          id: (this.prevAttendeeId += 1)
        }
      ]
    });
  };

  render() {
    return (
      <HashRouter basename="/Rsvp-App">
        <div className="App">
          <Header attending={this.state.attending} />
          <Navigation />
          <div className="main-content-wrapper">
            <Route exact path="/" render={() => <Details />} />
            <Route
              path="/ImComing"
              render={() => <ImComing addAttendee={this.handleAddAttendee} />}
            />
            <Route
              path="/WhosGoing"
              render={() => <WhosGoing attendees={this.state.attendees} />}
            />
            <Route path="/Playlist" render={() => <Playlist />} />
          </div>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
