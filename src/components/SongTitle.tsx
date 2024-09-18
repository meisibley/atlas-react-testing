import React from 'react';

export default function SongTitle({ title, artist }) {
    return (
        <div>
            <p className="text-black text-xl font-bold mt-6">{title}</p>
            <p className="text-gray font-semibold">{artist}</p>
        </div>
    );
}
