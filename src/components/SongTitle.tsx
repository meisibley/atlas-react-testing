import React from 'react';

type SongTitleProps = {
    title: string;
    artist: string;
};

export default function SongTitle({ title, artist }: SongTitleProps) {
    return (
        <div>
            <p className="text-black text-xl font-bold mt-6">{title}</p>
            <p className="text-gray font-semibold">{artist}</p>
        </div>
    );
};

// Another way to write it:
// interface SongTitleProps {
//     title: string;
//     artist: string;
// }
// const SongTitle: React.FC<SongTitleProps> = ( {title, artist}) => {
//     return (
//         <div>
//             <p className="text-black text-xl font-bold mt-6">{title}</p>
//             <p className="text-gray font-semibold">{artist}</p>
//         </div>
//     );
// };

// export default SongTitle;
