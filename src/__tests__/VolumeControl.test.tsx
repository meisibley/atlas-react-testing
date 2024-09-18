import React, { useState } from 'react';
import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import VolumeControl from "../components/VolumeControl";

test("VolumeControl renders correctly", () => {
    const { container } = render(
        <VolumeControl />
    );
    expect(container).toMatchSnapshot();
});
