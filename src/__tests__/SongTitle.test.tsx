import React from 'react';
import { render } from '@testing-library/react';
import { test, expect } from 'vitest';
import { Song } from '../components/types';
import SongTitle from '../components/SongTitle';

test('renders correctly and matches snapshot', ()=> {
    const mockSong: Song = {
        id: 3,
        title: 'Test Song',
        artist: 'Test Artist',
        genre: 'Test genre',
        duration: '2:18',
        cover: 'Test https',
    };
    const { container } = render (
        <SongTitle title={mockSong.title} artist={mockSong.artist} />
    );

    expect(container).toMatchSnapshot();
})
