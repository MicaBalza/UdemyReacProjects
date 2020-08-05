import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends React.Component {
  renderList() {
    // return the array for the renderList method
    return this.props.songs.map((song) => {
      // jsx for the maping function
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              onClick={() => this.props.selectSong(song)}
              className="ui button primary"
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
  // PRIMER PASO PARA ACCEDER A LA LISTA DE SONGS Y QUE => entonces this.props === { songs: state.songs }
};

export default connect(mapStateToProps, { selectSong })(SongList);
