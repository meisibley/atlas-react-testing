import React, { useState } from 'react';
import CurrentlyPlaying from './CurrentlyPlaying';
import Playlist from './Playlist';
import { Song } from './types';

export default function MusicPlayer() {
    const [currentSong, setCurrentSong] = useState<Song | null>(null);
    const [songs, setSongs] = useState<Song[]>([]);
    const [isShuffleOn, setIsShuffleOn] = useState(false);

    const handleSongSelect = (song: Song) => {
        setCurrentSong(song);
    };

    const handleBack = () => {
        if (currentSong && songs.length > 0) {
            const currentIndex = songs.indexOf(currentSong);
            if (currentIndex > 0) {
                setCurrentSong(songs[currentIndex - 1]);
            }
        }
    };

    const handleForward = () => {
        if (currentSong && songs.length > 0) {
            if (isShuffleOn) {
                const randomIndex = Math.floor(Math.random() * songs.length);
                setCurrentSong(songs[randomIndex]);
            } else {
                const currentIndex = songs.indexOf(currentSong);
                if (currentIndex < songs.length - 1) {
                    setCurrentSong(songs[currentIndex + 1]);
                }
            }
        }
    };

    const handleShuffleToggle = () => {
        setIsShuffleOn(prevState => !prevState);
    };

    return (
        <div>
            <div className="flex mt-2 shadow-lg">
                <div className="max-w-md mx-auto w-full h-auto md:w-1/2 lg:w-1/2">
                    <CurrentlyPlaying 
                        song={currentSong} 
                        onBack={handleBack}
                        onForward={handleForward}
                        isBackDisabled={!currentSong || songs.indexOf(currentSong) === 0}
                        onShuffleToggle={handleShuffleToggle}
                        isShuffleOn={isShuffleOn}
                    />
                    <div className="md:hidden lg:hidden">
                        <Playlist
                            onSongSelect={handleSongSelect}
                            setSongs={setSongs}
                            currentSong={currentSong}
                        />
                    </div>
                </div>
                <div className="hidden md:block lg:block w-px md:bg-gray lg:bg-gray"></div>
                <div className="hidden max-w-md mx-auto md:block lg:block md:w-1/2 lg:w-1/2">
                    <Playlist
                        onSongSelect={handleSongSelect}
                        setSongs={setSongs}
                        currentSong={currentSong}
                    />
                </div>
            </div>
        </div>
    );
}
