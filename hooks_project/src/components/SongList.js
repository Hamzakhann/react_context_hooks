import React, { useState , useEffect } from 'react';
import uuid from 'uuid/v1';
import NewSongForm from './NewSongForm';

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: 'almost home', id: 1 },
    { title: 'memory gospel', id: 2 },
    { title: 'this wild darkness', id: 3 }
  ]);

  const [age , setAge] = useState(20)
  useEffect(() =>{
      console.log('use effect hook running' , songs)
  } , [songs])
  useEffect(() =>{
    console.log('use effect hook running' , age)
} , [age])
  const addSong = (title) => {
    setSongs([...songs, { title, id: uuid() }]);
  };
  return (
    <div className="song-list">
      <ul>
        {songs.map(song => {
          return ( <li key={song.id}>{song.title}</li> );
        })}
      </ul>
      <NewSongForm addSong={addSong} />
      <button onClick={() => setAge(age + 1)} >Add 1 + 1 = {age}</button>
    </div>
  );
}

export default SongList;