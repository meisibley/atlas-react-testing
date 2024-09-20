import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import { expect, test } from "vitest";
import VolumeControl from "../components/VolumeControl";

test('VolumeControl renders correctly with volume 0', () => {
    const { container, getByRole } = render(<VolumeControl />);
    
    // Set volume to 0
    const input = getByRole('slider');
    fireEvent.change(input, { target: { value: '0' } });
    
    // Check for the SVG when volume is 0
    expect(container.innerHTML).toContain('M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z');
});

test("VolumeControl renders correctly", () => {
    const { container } = render(
        <VolumeControl />
    );
    expect(container).toMatchSnapshot();
});
