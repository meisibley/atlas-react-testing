import React from 'react';
import { render } from '@testing-library/react';
import PlayListItem from '../components/PlayListItem';
import { test, expect } from 'vitest';
import { Song } from '../components/types';

test('renders correctly and matches snapshot', () => {
    const mockSong: Song = {
        id: 3,
        title: 'Test Song',
        artist: 'Test Artist',
        genre: 'Test genre',
        duration: '2:18',
        cover: 'Test https'
    };
    const mockOnSongSelect = () => {};
    const { container } = render (
        <PlayListItem song={mockSong} onSongSelect={mockOnSongSelect} isSelected={false} />
    );

    expect(container).toMatchSnapshot();
});
