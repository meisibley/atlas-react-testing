import React, { useEffect, useState } from 'react';
import PlaylistItem from './PlayListItem';
import usePlaylistData from '../hooks/usePlaylistData';
import { Song } from './types';

type PlaylistProps = {
    onSongSelect: (song: Song) => void;
    setSongs: (songs: Song[]) => void;
    currentSong: Song | null;
}

const Playlist = ({ onSongSelect, setSongs, currentSong }: PlaylistProps) => {
    const { data: songs, loading, error } = usePlaylistData();

    useEffect(() => {
      setSongs(songs);
    }, [songs, setSongs]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="p-4 bg-gray-light rounded-md">
            <h1 className="text-black text-xl font-bold p-2">Playlist</h1>
            <div className="space-y-2">
            {songs.map((song) => {
                const isSelected = currentSong && currentSong.title === song.title;
                return (
                    <PlaylistItem song={song} onSongSelect={onSongSelect} isSelected={isSelected}></PlaylistItem>
                )
            })}
            </div>
        </div>
    );
};

export default Playlist;
