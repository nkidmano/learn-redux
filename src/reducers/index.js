import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Poker Face', duration: '3:50' },
    { title: 'Grenade', duration: '3:20' },
    { title: 'Jar of Heart', duration: '3:48' },
    { title: 'Warriors', duration: '4:20' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  switch (action.type) {
    case 'SONG_SELECTED':
      return action.payload;
    default:
      return selectedSong;
  }
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
