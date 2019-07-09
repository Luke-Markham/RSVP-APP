import React, { Component } from "react";

class Details extends Component {
  render() {
    return (
      <div className="Details">
        <div className="pages-wrapper">
          <h3 className="pages-title">Details</h3>

          {/* What */}
          <div className="what">
            <h4>What:</h4>
            <p>
              Hey, Soooo I'm turning 21! Damn... where does the time go ? So I
              hope ya'll can come and celebrate with me and catch up with each
              other. We are gonna have finger food and of course there will be
              multiple kegs of bud, however you should also bring your own ;)
            </p>
            <h5>Note:</h5>
            <p>
              Formal attire.
              <br />
              <br />
              Respect the property.
              <br />
              <br />
              Respect the people.
              <br />
              My extended family will be in attendance, including my
              grandparents.
              <br />
              <br />
              There will be security.
            </p>
          </div>
          <hr />
          {/* where */}
          <div className="where">
            <h4>Where:</h4>
            <p>
              My House
              <br />
              88 Woodensdale Ave <br />
              Normsford
              <br />
              Alender City
            </p>
          </div>
          <hr />
          {/* when */}
          <div className="when">
            <h4>When:</h4>
            <p>
              7:30pm
              <br />
              Saturday 20th
              <br />
              November
              <br />
              2019
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
