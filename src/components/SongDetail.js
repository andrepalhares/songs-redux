import React from 'react';
import {connect} from 'react-redux';

const SongDetail = ({song}) => {
  //console.log(props);
  if(!song) {
    return <div>SELECT A SONG!</div>;
  }
  return (
    <div>
      <h3>Details for selected song</h3>
      <p><b>Title:</b> {song.title}</p>
      <p><b>Duration:</b> {song.duration}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {song: state.selectedSong};
};

export default connect(mapStateToProps)(SongDetail);
