import { useEffect, useState } from 'react';
import { Song } from '../components/types';

export default function usePlaylistData() {
    const [data, setData] = useState<Song[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchSongs = async () => {
            try {
                const response = await fetch('https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/playlist');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data: Song[] = await response.json();
                setData(data);
            } catch (error) {
                setError((error as Error).message);
            } finally {
                setLoading(false);
            }
        };

        fetchSongs();
    }, []);

    return { data, loading, error };
}
