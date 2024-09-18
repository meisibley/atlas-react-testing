import React from 'react';
import CoverArt from './CoverArt';
import SongTitle from './SongTitle';
import PlayControls from './PlayControls';
import VolumeControl from './VolumeControl';
// import PlayListItem from "./PlayListItem";
import { Song } from './types';

type CurrentlyPlayingProps = {
  song: Song | null;
  onBack: () => void;
  onForward: () => void;
  isBackDisabled: boolean;
  onShuffleToggle?: () => void;
  isShuffleOn?: boolean;
};

export default function CurrentlyPlaying({ song, onBack, isBackDisabled, onForward, onShuffleToggle, isShuffleOn } : CurrentlyPlayingProps) {
  return (
    <div>
      <CoverArt cover={song ? song.cover : ''} />
      <SongTitle 
        title={song ? song.title : 'No Song Playing'} 
        artist={song ? song.artist : ''}
      />
      <PlayControls 
        onBack={onBack}
        isBackDisabled={isBackDisabled}
        onForward={onForward}
        onShuffleToggle={onShuffleToggle}
        isShuffleOn={isShuffleOn}
      />
      <VolumeControl />
      {/* <PlayListItem 
        title={song ? song.title : 'No Song Item'}
        genre={song ? song.genre : ''}
        duration={song ? song.duration : ''}
      /> */}
    </div>
  );
}
