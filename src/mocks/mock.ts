import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";
// comment

export const handlers = [
    http.get("https://api.example.com/api/v1/data", () => {
        return HttpResponse.json([
                {
                    "id": 1,
                    "title": "Painte in Blue",
                    "artist": "Soul Canvas",
                    "genre": "Neo-Soul",
                    "duration": "5:55",
                    "cover": "https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/images/albumn4.webp"
                },
                {
                    "id": 2,
                    "title": "Tidal Drift",
                    "artist": "Echoes of the Sea",
                    "genre": "Ambient",
                    "duration": "8:02",
                    "cover": "https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/images/albumn6.webp"
                },
                {
                    "id": 3,
                    "title": "Fading Shadows",
                    "artist": "The Emberlight",
                    "genre": "Alternative Rock",
                    "duration": "3:01",
                    "cover": "https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/images/albumn2.webp"
                },
                {
                    "id": 4,
                    "title": "Cosmic Drift",
                    "artist": "Solar Flare",
                    "genre": "Psychedelic Rock",
                    "duration": "5:01",
                    "cover": "https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/images/albumn10.webp"
                },
                {
                    "id": 5,
                    "title": "Urban Serenade",
                    "artist": "Midnight Groove",
                    "genre": "Jazz",
                    "duration": "4:54",
                    "cover": "https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/images/albumn8.webp"
                }
            ]);
        }
    ),
];

export const server = setupServer(...handlers);
