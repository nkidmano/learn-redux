import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { id: '1', title: 'Poker Face', duration: '3:50' },
    { id: '2', title: 'Grenade', duration: '3:20' },
    { id: '3', title: 'Jar of Heart', duration: '3:48' },
    { id: '4', title: 'Warriors', duration: '4:20' }
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
