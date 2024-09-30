import "@testing-library/jest-dom/vitest";
import { render, screen, waitFor, fireEvent, cleanup } from "@testing-library/react";
import MusicPlayer from "../components/MusicPlayer";
import { server } from "../mocks/mock";
import { test, expect, beforeEach, beforeAll, afterEach, afterAll } from "vitest";

beforeAll(() => server.listen());
afterEach(() => {
    server.resetHandlers();
    cleanup();
});
beforeEach(() => {
    render(<MusicPlayer />);
});
afterAll(() => server.close());

test("should select a song when clicked", async () => {
    // Wait for the playlist to load and display songs from mock.ts
    await waitFor(() => {
       const painteInBlue = screen.getAllByRole("heading", { name: "Painte in Blue", level: 2 });
       fireEvent.click(painteInBlue[0]);
       expect(screen.getAllByText("Painte in Blue")).toBeInTheDocument();
       screen.debug();
       // expect(screen.getByText("Tidal Drift")).toBeInTheDocument();
    });

    // // Click on the second song "Tidal Drift"
    // const tidalDrift = screen.getByText("Tidal Drift");
    // fireEvent.click(tidalDrift);

    // // Verify that the clicked song becomes the current song
    // await waitFor(() => {
    //      expect(screen.getByRole("heading", { name: "Tidal Drift", level: 2 })).toBeInTheDocument();
    // });
});

// import "@testing-library/jest-dom/vitest";
// import { render, screen, waitFor, fireEvent, within } from "@testing-library/react";
// import MusicPlayer from "../components/MusicPlayer";  // Adjust the path if necessary
// import { server } from "../mocks/mock";  // Import your mock server
// import { test, expect, beforeAll, afterEach, afterAll } from "vitest";

// // Start the mock server before all tests
// beforeAll(() => server.listen());

// // Reset handlers after each test
// afterEach(() => {
//     server.resetHandlers();
// });

// // Close the mock server after all tests
// afterAll(() => server.close());

// test("should select a song when clicked", async () => {
//     // Render the MusicPlayer component
//     render(<MusicPlayer />);

//     // Wait for the playlist to load and display the songs
//     await waitFor(() => {
//         expect(screen.getByRole("heading", { name: "Painte in Blue", level: 2 })).toBeInTheDocument();
//         expect(screen.getByRole("heading", { name: "Tidal Drift", level: 2 })).toBeInTheDocument();
//     });

//     // 1. Scope to the playlist section to avoid ambiguity
//     const playlistSection = screen.getByRole("heading", { name: "Playlist" }).closest("div");
    
//     // Click on the song "Painte in Blue" in the playlist
//     const paintedInBlueInPlaylist = within(playlistSection!).getByRole("heading", { name: "Painte in Blue", level: 2 });
//     fireEvent.click(paintedInBlueInPlaylist);

//     // 2. Scope to the "Currently Playing" section to verify the song was selected
//     const currentlyPlayingSection = screen.getByRole("heading", { name: "Currently Playing" }).closest("div");

//     // Use within to search inside the currently playing section for the correct heading
//     const currentlyPlayingSong = within(currentlyPlayingSection!).getByRole("heading", { name: "Painte in Blue", level: 2 });

//     // Verify that "Painte in Blue" is now displayed in the currently playing section
//     expect(currentlyPlayingSong).toBeInTheDocument();

//     // Verify the artist is displayed correctly in the currently playing section
//     expect(within(currentlyPlayingSection!).getByText("Soul Canvas")).toBeInTheDocument();
// });
