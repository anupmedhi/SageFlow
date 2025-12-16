"use client";
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { Shuffle, RefreshCw } from 'lucide-react';
import styles from '../student.module.css';

// Simple 3x3 Sliding Puzzle
const SOLVED_STATE = [1, 2, 3, 4, 5, 6, 7, 8, 0]; // 0 is empty

export default function PuzzleGame() {
    const [tiles, setTiles] = useState<number[]>([...SOLVED_STATE]);
    const [isSolved, setIsSolved] = useState(false);

    // Check if solved
    useEffect(() => {
        const solved = tiles.every((val, index) => val === SOLVED_STATE[index]);
        setIsSolved(solved);
    }, [tiles]);

    const shufflePuzzle = () => {
        // Fisher-Yates shuffle that ensures solvability is too complex for this quick component
        // We'll use random valid moves to shuffle to ensure solvability
        let current = [...SOLVED_STATE];
        let emptyIdx = 8;
        let previousIdx = -1;

        for (let i = 0; i < 50; i++) {
            const neighbors = getNeighbors(emptyIdx);
            // exclude previous to avoid immediate undo
            const validNeighbors = neighbors.filter(n => n !== previousIdx);
            const randomNeighbor = validNeighbors[Math.floor(Math.random() * validNeighbors.length)];

            // swap
            current[emptyIdx] = current[randomNeighbor];
            current[randomNeighbor] = 0;
            previousIdx = emptyIdx;
            emptyIdx = randomNeighbor;
        }
        setTiles(current);
        setIsSolved(false);
    };

    const getNeighbors = (index: number) => {
        const neighbors = [];
        const row = Math.floor(index / 3);
        const col = index % 3;

        if (row > 0) neighbors.push(index - 3); // Up
        if (row < 2) neighbors.push(index + 3); // Down
        if (col > 0) neighbors.push(index - 1); // Left
        if (col < 2) neighbors.push(index + 1); // Right

        return neighbors;
    };

    const moveTile = (index: number) => {
        if (isSolved) return;

        const emptyIndex = tiles.indexOf(0);
        const neighbors = getNeighbors(emptyIndex);

        if (neighbors.includes(index)) {
            const newTiles = [...tiles];
            newTiles[emptyIndex] = newTiles[index];
            newTiles[index] = 0;
            setTiles(newTiles);
        }
    };

    return (
        <div className={styles.section} style={{ marginTop: '2rem' }}>
            <div className={styles.sectionHeader}>
                <div>
                    <h3 className={styles.sectionTitle}>Daily Brain Boost 🧠</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Solve the puzzle to unlock a badge!</p>
                </div>
                <Button size="sm" variant="ghost" onClick={shufflePuzzle}>
                    <RefreshCw size={16} style={{ marginRight: '0.5rem' }} /> Shuffle
                </Button>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '8px',
                maxWidth: '300px',
                margin: '0 auto',
                background: '#F1F5F9',
                padding: '8px',
                borderRadius: '16px'
            }}>
                {tiles.map((num, index) => (
                    <div
                        key={index}
                        onClick={() => moveTile(index)}
                        style={{
                            height: '80px',
                            background: num === 0 ? 'transparent' : 'white',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '2rem',
                            fontWeight: '700',
                            color: '#4F46E5',
                            cursor: num === 0 ? 'default' : 'pointer',
                            boxShadow: num === 0 ? 'none' : '0 4px 0 #E2E8F0',
                            transition: 'transform 0.1s',
                            transform: num !== 0 && !isSolved ? 'translateY(0)' : 'translateY(2px)',
                            opacity: num === 0 ? 0 : 1
                        }}
                    >
                        {num !== 0 ? num : ''}
                    </div>
                ))}
            </div>

            {isSolved && (
                <div style={{ textAlign: 'center', marginTop: '1.5rem', color: '#10B981', fontWeight: 'bold' }}>
                    🎉 Great job! You solved it!
                </div>
            )}
        </div>
    );
}
