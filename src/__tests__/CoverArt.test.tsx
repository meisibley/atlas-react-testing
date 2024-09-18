import React from 'react';
import { render } from '@testing-library/react';
import { expect, test } from "vitest";
import CoverArt from '../components/CoverArt';

test('renders correctly', () => {
    const coverImage = 'https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/images/albumn4.webp';
    const { container } = render(<CoverArt cover={coverImage} />);
    
    expect(container).toMatchSnapshot();
});
