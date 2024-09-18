import React from 'react';
import '../index.css';

type CoverArtProps = {
    cover: string;
};

export default function CoverArt({ cover }: CoverArtProps) {
    return (
        <div>
            <img src={cover} alt="Cover Art" className="rounded-md" />
        </div>
    );
}
