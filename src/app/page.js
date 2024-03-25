'use client'
import styles from "./page.module.css";
import React from 'react';
import { GameSettingsProvider, useGameSettings } from './context/GameSettingsContext';
import GameBoard from './components/GameBoard';
import ThemeSelector from './components/ThemeSelector';



const GameContent = () => {
  const { gameStarted, gridSize, theme } = useGameSettings();

  return (
    <div className={styles.gameContainer}>
      {gameStarted ? (
        <GameBoard size={gridSize} theme={theme} />
      ) : (
        <ThemeSelector />
      )}
    </div>
  );
};

export default function Home() {
  return (
    <GameSettingsProvider>
      <GameContent />
    </GameSettingsProvider>
  );
}

