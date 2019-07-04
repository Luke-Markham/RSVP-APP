import React, { Component } from "react";
import Counter from "./Counter";

class Header extends Component {
  render() {
    return (
      <header className="Header" id="top">
        <h1 id="main-logo">RSVP</h1>
        <h2 id="event-name">Jame's 21st Birthday</h2>
        <Counter attending={this.props.attending} />
      </header>
    );
  }
}

export default Header;
