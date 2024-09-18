import React, { useState } from 'react';
import Footer from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";
import { Song } from './components/types';

function App() {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);

  return (
    <div className="h-full flex flex-col justify-between p-8 min-h-screen">
      <MusicPlayer 
        currentSong={currentSong} 
        onSongSelect={setCurrentSong} 
      />
      <Footer />
    </div>
  );
}

export default App;
