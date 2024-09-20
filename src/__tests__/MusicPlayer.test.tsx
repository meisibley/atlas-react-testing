import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MusicPlayer from '../components/MusicPlayer';
import { expect, test, vi } from 'vitest';
import { Song } from '../components/types';

// Mock songs based on the Song interface
const mockSongs: Song[] = [
    { id: 1, title: 'Song 1', artist: 'Artist 1', genre: 'Pop', duration: '3:30', cover: 'cover1.jpg' },
    { id: 2, title: 'Song 2', artist: 'Artist 2', genre: 'Rock', duration: '4:00', cover: 'cover2.jpg' },
    { id: 3, title: 'Song 3', artist: 'Artist 3', genre: 'Jazz', duration: '2:45', cover: 'cover3.jpg' },
];

// Mocking Playlist and CurrentlyPlaying components
const MockPlaylist = ({ onSongSelect }) => (
    <div>
        {mockSongs.map((song) => (
            <button key={song.id} onClick={() => onSongSelect(song)}>
                {song.title}
            </button>
        ))}
    </div>
);

const MockCurrentlyPlaying = ({ song, onBack, onForward }) => (
    <div>
        {song ? `Currently Playing: ${song.title}` : 'No Song Selected'}
        <button onClick={onBack} disabled={!song}>Back</button>
        <button onClick={onForward} disabled={!song}>Forward</button>
    </div>
);

// test('selects a song when a song is clicked', () => {
//     const setSongs = vi.fn();
//     render(<MusicPlayer />);

//     const songToSelect = screen.getByText('Song 1');
//     fireEvent.click(songToSelect);

//     expect(screen.getByText('Currently Playing: Song 1')).toBeInTheDocument();
// });

test('navigates to the previous song when back button is clicked', () => {
    const setSongs = vi.fn();
    render(<MusicPlayer />);

    fireEvent.click(screen.getByText('Song 2')); // Select Song 2
    fireEvent.click(screen.getByText('Back')); // Click Back button

    expect(screen.getByText('Currently Playing: Song 1')).toBeInTheDocument();
});

// test('navigates to the next song when forward button is clicked', () => {
//     const setSongs = vi.fn();
//     render(<MusicPlayer />);

//     fireEvent.click(screen.getByText('Song 1')); // Select Song 1
//     fireEvent.click(screen.getByText('Forward')); // Click Forward button

//     expect(screen.getByText('Currently Playing: Song 2')).toBeInTheDocument();
// });

// test('does not navigate back if at the first song', () => {
//     render(<MusicPlayer />);

//     fireEvent.click(screen.getByText('Song 1')); // Select Song 1
//     fireEvent.click(screen.getByText('Back')); // Click Back button

//     expect(screen.getByText('Currently Playing: Song 1')).toBeInTheDocument(); // Should remain on Song 1
// });

// test('handles forward navigation correctly with shuffle', () => {
//     const setSongs = vi.fn();
//     render(<MusicPlayer />);

//     fireEvent.click(screen.getByText('Song 1')); // Select Song 1
//     fireEvent.click(screen.getByText('Shuffle')); // Toggle shuffle on
//     fireEvent.click(screen.getByText('Forward')); // Click Forward button

//     // Expect current song to be one of the other songs
//     expect(screen.getByText('Currently Playing:')).toBeInTheDocument();
// });
