import {combineReducers} from 'redux';


//Reducers
const songsReducer = () => {
  return [
    {title: 'Enchanted', duration: '4:05'},
    {title: 'Sparks Fly', duration: '3:34'},
    {title: 'Starlight', duration: '3:51'},
    {title: 'Red', duration: '2:57'}
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if(action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
