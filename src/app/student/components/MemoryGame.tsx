"use client";
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { RefreshCw, Sparkles, BrainCircuit } from 'lucide-react'; // Added BrainCircuit for card back
import styles from '../student.module.css';

const GAME_ITEMS = [
    { emoji: '🌟', bg: '#FEF3C7', text: '#D97706' }, // Yellow
    { emoji: '🍎', bg: '#FEE2E2', text: '#EF4444' }, // Red
    { emoji: '⚽', bg: '#E0E7FF', text: '#4F46E5' }, // Indigo
    { emoji: '📚', bg: '#F1F5F9', text: '#475569' }, // Slate
    { emoji: '🎨', bg: '#FFEDD5', text: '#C2410C' }, // Orange
    { emoji: '🎵', bg: '#DCFCE7', text: '#166534' }, // Green
    { emoji: '🚀', bg: '#E0F2FE', text: '#0284C7' }, // Sky
    { emoji: '💎', bg: '#F3E8FF', text: '#9333EA' }, // Purple
];

interface Card {
    id: number;
    content: string;
    bg: string;
    text: string;
    isFlipped: boolean;
    isMatched: boolean;
}

export default function MemoryGame() {
    const [cards, setCards] = useState<Card[]>([]);
    const [flippedCards, setFlippedCards] = useState<number[]>([]); // store indices
    const [matches, setMatches] = useState(0);
    const [isWon, setIsWon] = useState(false);

    useEffect(() => {
        initializeGame();
    }, []);

    const initializeGame = () => {
        // duplicate and shuffle
        const gameItems = [...GAME_ITEMS, ...GAME_ITEMS];
        const shuffled = gameItems
            .sort(() => Math.random() - 0.5)
            .map((item, index) => ({
                id: index,
                content: item.emoji,
                bg: item.bg,
                text: item.text,
                isFlipped: false,
                isMatched: false
            }));

        setCards(shuffled);
        setFlippedCards([]);
        setMatches(0);
        setIsWon(false);
    };

    const handleCardClick = (index: number) => {
        if (cards[index].isFlipped || cards[index].isMatched || flippedCards.length >= 2) return;

        const newCards = [...cards];
        newCards[index].isFlipped = true;
        setCards(newCards);

        const newFlipped = [...flippedCards, index];
        setFlippedCards(newFlipped);

        if (newFlipped.length === 2) {
            checkForMatch(newFlipped, newCards);
        }
    };

    const checkForMatch = (flippedIndices: number[], currentCards: Card[]) => {
        const [idx1, idx2] = flippedIndices;

        if (currentCards[idx1].content === currentCards[idx2].content) {
            setTimeout(() => {
                const newCards = [...currentCards];
                newCards[idx1].isMatched = true;
                newCards[idx2].isMatched = true;
                setCards(newCards);
                setFlippedCards([]);

                const newMatches = matches + 1;
                setMatches(newMatches);
                if (newMatches === GAME_ITEMS.length) {
                    setIsWon(true);
                }
            }, 500);
        } else {
            setTimeout(() => {
                const newCards = [...currentCards];
                newCards[idx1].isFlipped = false;
                newCards[idx2].isFlipped = false;
                setCards(newCards);
                setFlippedCards([]);
            }, 1000);
        }
    };

    return (
        <div>
            <div className={styles.sectionHeader} style={{ marginBottom: '1.5rem' }}>
                <div>
                    <h3 className={styles.sectionTitle} style={{ fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        Mind Match <Sparkles size={18} color="#F59E0B" fill="#F59E0B" />
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Match pairs to boost focus!</p>
                </div>
                <Button
                    size="sm"
                    variant="ghost"
                    onClick={initializeGame}
                    style={{
                        color: 'var(--text-muted)',
                        background: '#F1F5F9',
                        borderRadius: '99px',
                        padding: '0.5rem 1rem',
                        height: 'auto',
                        fontSize: '0.85rem'
                    }}
                >
                    <RefreshCw size={14} style={{ marginRight: '0.5rem' }} /> Restart
                </Button>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '1rem',
                maxWidth: '380px',
                margin: '0 auto',
                perspective: '1000px'
            }}>
                {cards.map((card, index) => (
                    <div
                        key={card.id}
                        onClick={() => handleCardClick(index)}
                        style={{
                            aspectRatio: '1',
                            background: card.isFlipped || card.isMatched
                                ? card.bg
                                : 'linear-gradient(135deg, #A78BFA 0%, #7C3AED 100%)',
                            borderRadius: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '2rem',
                            cursor: 'pointer',
                            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                            transform: card.isFlipped || card.isMatched ? 'rotateY(180deg)' : 'rotateY(0deg)',
                            boxShadow: card.isFlipped || card.isMatched
                                ? '0 4px 6px rgba(0,0,0,0.05)'
                                : '0 10px 15px -3px rgba(124, 58, 237, 0.3), 0 4px 6px -2px rgba(124, 58, 237, 0.1)',
                            border: card.isMatched ? `2px solid ${card.text}` : '2px solid transparent',
                            position: 'relative'
                        }}
                        className="hover:scale-105"
                    >
                        {/* Front (Emoji) */}
                        <div style={{
                            transform: 'rotateY(180deg)',
                            opacity: card.isFlipped || card.isMatched ? 1 : 0,
                            position: 'absolute',
                            inset: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'opacity 0.2s',
                            color: card.text
                        }}>
                            {card.content}
                        </div>

                        {/* Back (Pattern) */}
                        <div style={{
                            opacity: card.isFlipped || card.isMatched ? 0 : 1,
                            position: 'absolute',
                            inset: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'rgba(255,255,255,0.3)'
                        }}>
                            <BrainCircuit size={24} />
                        </div>
                    </div>
                ))}
            </div>

            {isWon && (
                <div className="animate-bounce" style={{ textAlign: 'center', marginTop: '1.5rem', color: '#10B981', fontWeight: 'bold' }}>
                    🎉 Amazing memory! You found all pairs!
                </div>
            )}
        </div>
    );
}
