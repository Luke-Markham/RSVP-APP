import React, { Component } from "react";

class ImComing extends Component {
  state = {
    user_name_first: "",
    user_surname: "",
    user_phone: "",
    user_plusOne: false,
    user_soberDriver: false
  };

  handleInputChange = e => {
    const value = e.target.type === "text" ? e.target.value : e.target.checked;
    const name = e.target.name;
    this.setState({
      [name]: value
    });
  };

  handleComingSubmit = e => {
    e.preventDefault();
    this.props.addAttendee(this.state);
    this.setState({
      user_name_first: "",
      user_surname: "",
      user_phone: "",
      user_plusOne: false,
      user_soberDriver: false
    });
  };

  render() {
    return (
      <div className="pages-wrapper">
        <div className="im-coming">
          <h3 className="pages-title">I'm Coming</h3>
          <p className="please-rsvp">Please RSVP</p>

          <form className="im-coming-form" onSubmit={this.handleComingSubmit}>
            <fieldset className="who-fieldset">
              <label htmlFor="first-name">First Name:</label>
              <br />
              <input
                type="text"
                name="user_name_first"
                id="first-name"
                value={this.state.user_name_first}
                placeholder="Enter First Name..."
                onChange={this.handleInputChange}
                required
              />
              <br />
              <label htmlFor="surname-name">Surname:</label>
              <br />
              <input
                type="text"
                name="user_surname"
                id="surname-name"
                placeholder="Enter Surname..."
                value={this.state.user_surname}
                onChange={this.handleInputChange}
                required
              />
              <br />
              <label htmlFor="phone">Phone:</label>
              <br />
              <input
                type="text"
                name="user_phone"
                id="phone"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                placeholder="Format: 123-456-7890"
                value={this.state.user_phone}
                onChange={this.handleInputChange}
                required
              />
              <br />
            </fieldset>

            <fieldset className="extras-fieldset">
              <div className="plus1">
                <input
                  type="checkbox"
                  name="user_plusOne"
                  id="plus-one"
                  checked={this.state.user_plusOne}
                  onChange={this.handleInputChange}
                />
                <label htmlFor="plus-one">I'd like a +1</label>
              </div>
              <div className="soberD">
                <input
                  type="checkbox"
                  name="user_soberDriver"
                  id="sober-driver"
                  checked={this.state.user_soberDriver}
                  onChange={this.handleInputChange}
                />
                <label htmlFor="sober-driver">I'm a Sober Driver</label>
              </div>
            </fieldset>

            <button className="btn coming-btn" type="submit">
              Let's Party!
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default ImComing;
