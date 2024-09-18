import React, { useState } from 'react';
import shuffleIcon from '../assets/repeat-30.jpeg';
import shuffleGrn from '../assets/repeat-grn.png';

type PlayControlsProps = {
    onBack: () => void;
    onForward: () => void;
    isBackDisabled: boolean;
    onShuffleToggle?: () => void;
    isShuffleOn?: boolean;
};

export default function PlayControls({ onBack, isBackDisabled, onForward, onShuffleToggle, isShuffleOn }: PlayControlsProps) {
    const [speed, setSpeed] = useState('1x');
    const [isPlaying, setIsPlaying] = useState(false);
    // const [isShuffleOn, setIsShuffleOn] = useState(false);

    const handleSpeed = () => { 
        const speeds = ['1x', '2x', '3x'];
        const currentIndex = speeds.indexOf(speed);
        const nextIndex = (currentIndex + 1) % speeds.length;
        setSpeed(speeds[nextIndex]);
        console.log('Speed clicked', speeds[nextIndex]);
    };

    const handlePlay = () => { 
        setIsPlaying(prevState => !prevState);
        console.log(isPlaying ? 'Pause clicked' : 'Play clicked');
    };

    const handleShuffle = () => {
        if (onShuffleToggle) {
            onShuffleToggle();
            console.log(isShuffleOn ? 'Shuffle off' : 'Shuffle on');
        } else {
            console.log('Shuffle toggle function is not defined');
        }

    };

    return (
        <div className="flex justify-around items-center mt-4">
            <button 
                className="p-2 bg-gray-300 hover:bg-gray-400 rounded flex items-center"
                onClick={handleSpeed}
            >
                <span className="text-gray-700">{speed}</span>
            </button>
            <button 
                className="p-2 bg-gray-300 hover:bg-gray-400 rounded flex items-center"
                onClick={onBack}
                disabled={isBackDisabled}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z" />
                </svg>
            </button>
            <button 
                className="p-2 bg-gray-300 hover:bg-gray-400 rounded flex items-center"
                onClick={handlePlay}
            >
                {isPlaying ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                    </svg>
                )}
            </button>
            <button 
                className="p-2 bg-gray-300 hover:bg-gray-400 rounded flex items-center"
                onClick={onForward}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z" />
                </svg>
            </button>
            <button 
                className="p-2 bg-gray-300 hover:bg-gray-400 rounded flex items-center"
                onClick={handleShuffle}
            >
                <img src={isShuffleOn? shuffleGrn : shuffleIcon} alt="Shuffle" className="w-6 h-6" />
            </button>
        </div>
    );
}
