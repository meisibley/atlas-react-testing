import React, { useState } from 'react';
import { render } from '@testing-library/react';
import { test, expect } from 'vitest';
import VolumeControl from '../components/VolumeControl';

test('renders correctly', () => {
    const { container } = render (
        <VolumeControl />
    );
    expect(container).toMatchSnapshot;
});
