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
        phone: "232-667-7892",
        plusOne: true,
        soberDriver: false,
        id: 4
      }
    ],
    playlist: [
      {
        song_title: "Yeah",
        song_artist: "Usher ft. Lil Jon, Ludacris",
        id: 1
      },
      {
        song_title: "Look Alive",
        song_artist: "Rae Sremmurd",
        id: 2
      },
      {
        song_title: "Sweet Child O' Mine",
        song_artist: "Guns N' Roses",
        id: 3
      },
      {
        song_title: "Smooth Criminal",
        song_artist: "Michael Jackson",
        id: 4
      }
    ]
  };

  prevAttendeeId = 4;

  componentDidUpdate(prevProps, prevState) {
    if (this.state.attendees !== prevState.attendees) {
      this.state.attendees.forEach(attendee => {
        if (attendee.plusOne === true) {
          this.setState({ attending: this.state.attending + 2 });
        } else {
          this.setState({ attending: this.state.attending + 1 });
        }
      });
    }
  }

  //   this.setState((prevState) => ({
  // attending: prevState + 2
  //   }));

  handleAddAttendee = imComingFormState => {
    const {
      user_name_first,
      user_surname,
      user_phone,
      user_plusOne,
      user_soberDriver
    } = imComingFormState;

    this.setState(prevState => ({
      attendees: [
        ...prevState.attendees,
        {
          firstName: user_name_first,
          lastName: user_surname,
          phone: user_phone,
          plusOne: user_plusOne,
          soberDriver: user_soberDriver,
          id: (this.prevAttendeeId += 1)
        }
      ]
    }));
  };

  handleAddSongToPlaylist = song => {
    this.setState(prevState => ({
      playlist: [...prevState.playlist, song]
    }));
  };

  render() {
    return (
      <div className="App">
        <HashRouter>
          <div className="main-content-wrapper">
            <Header attending={this.state.attending} />
            <Navigation />
            <Route exact path="/" render={() => <Details />} />
            <Route
              path="/ImComing"
              render={() => <ImComing addAttendee={this.handleAddAttendee} />}
            />
            <Route
              path="/WhosGoing"
              render={() => <WhosGoing attendees={this.state.attendees} />}
            />
            <Route
              path="/Playlist"
              render={() => (
                <Playlist
                  playlist={this.state.playlist}
                  handleAddSong={this.handleAddSongToPlaylist}
                />
              )}
            />
          </div>
          <Footer />
        </HashRouter>
      </div>
    );
  }
}

export default App;
