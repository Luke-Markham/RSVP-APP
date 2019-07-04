import React, { Component } from "react";

class Playlist extends Component {
  state = {
    song_title: "",
    song_artist: "",
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

  prevSongId = 4;

  handleInputChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value
    });
  };

  handlePlaylistSubmit = e => {
    this.setState(prevState => {
      return {
        song_title: "",
        song_artist: "",
        playlist: [
          ...this.state.playlist,
          {
            song_title: this.state.song_title,
            song_artist: this.state.song_artist,
            id: (this.prevSongId += 1)
          }
        ]
      };
    });

    e.preventDefault();
  };

  render() {
    return (
      <div className="Playlist">
        <div className="pages-wrapper">
          <h3 className="pages-title">Playlist</h3>
          <p>Pick a tune and we'll put it on the playlist.</p>
          <form className="playlist-form" onSubmit={this.handlePlaylistSubmit}>
            <fieldset className="playlist-fieldset">
              <label htmlFor="song-title">Title:</label>
              <br />
              <input
                type="text"
                name="song_title"
                id="song-title"
                placeholder="Song Title..."
                value={this.state.song_title}
                onChange={this.handleInputChange}
                required
              />
              <br />
              <label htmlFor="artist">Artist:</label>
              <br />
              <input
                type="text"
                name="song_artist"
                id="artist"
                placeholder="Artist name..."
                value={this.state.song_artist}
                onChange={this.handleInputChange}
                required
              />
              <br />
            </fieldset>
            <button className="btn playlist-btn" type="submit">
              Play it!
            </button>
          </form>
          <div className="whosGoingAndPlaylist-list-wrapper">
            {this.state.playlist.map(song => (
              <div key={song.id.toString()} className="name-card playlist-card">
                <span className="capitalize-details">{song.song_title}</span>
                <br />
                <span className="capitalize-details">{song.song_artist}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Playlist;
