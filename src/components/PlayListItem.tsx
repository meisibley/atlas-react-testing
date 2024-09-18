import React from 'react';
import { Song } from './types';

type PlaylistItemProps = {
    song: Song;
    onSongSelect: (song: Song) => void;
    isSelected: boolean | null;
}

export default function PlayListItem({ song, onSongSelect, isSelected }: PlaylistItemProps) {

    return (
        <div>
            {song.title === 'No Song Item' ? (
                <div className="text-xl font-bold m-2">Unselected</div>
            ) : (
                    <div
                        key={song.title + song.artist}
                        className={`flex justify-between items-center mt-2 cursor-pointer ${
                            isSelected ? 'bg-yellow' : 'hover:bg-purple-300 active:bg-blue-300'
                        }`}
                        onClick={() => {
                            onSongSelect(song)
                        }}
                    >
                        <div className="w-1/2">
                            <h2 className="text-black text-md font-semibold pl-2">{song.title}</h2>
                            <p className="text-gray font-semibold pl-2">{song.artist}</p>
                        </div>
                        <div className="w-1/2 text-gray font-semibold text-right pr-2">{song.duration}</div>
                    </div>
                    )
                }
        </div>
    );
}
