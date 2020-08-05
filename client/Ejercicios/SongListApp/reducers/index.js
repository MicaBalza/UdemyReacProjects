import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "No Scrubs", duration: "4:05" },
    { title: "Macarena", duration: "2:30" },
    { title: "All Star", duration: "3:15" },
    { title: "I Want it That Way", duration: "1:45" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

// the keys in this object are the keys of our state
// so: state.songs === the list of our songs
// state.selectedSong === our selected song, null at first
// PARA TENER EN CUENTA EN LAS FUNCIONES mapStateToProp()

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
