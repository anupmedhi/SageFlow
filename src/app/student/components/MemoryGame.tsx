"use client";
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { RefreshCw, Sparkles } from 'lucide-react';
import styles from '../student.module.css';

const GAME_ITEMS = [
    { emoji: '🌟', bg: '#FEF3C7', text: '#D97706' }, // Yellow
    { emoji: '🍎', bg: '#FEE2E2', text: '#EF4444' }, // Red
    { emoji: '⚽', bg: '#E0E7FF', text: '#4F46E5' }, // Indigo
    { emoji: '📚', bg: '#F1F5F9', text: '#475569' }, // Slate
    { emoji: '🎨', bg: '#FFEDD5', text: '#C2410C' }, // Orange
    { emoji: '🎵', bg: '#DCFCE7', text: '#166534' }, // Green
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
        // ignore if already flipped or matched, or if 2 cards already flipped
        if (cards[index].isFlipped || cards[index].isMatched || flippedCards.length >= 2) return;

        // flip the card
        const newCards = [...cards];
        newCards[index].isFlipped = true;
        setCards(newCards);

        const newFlipped = [...flippedCards, index];
        setFlippedCards(newFlipped);

        // if 2 cards flipped, check match
        if (newFlipped.length === 2) {
            checkForMatch(newFlipped, newCards);
        }
    };

    const checkForMatch = (flippedIndices: number[], currentCards: Card[]) => {
        const [idx1, idx2] = flippedIndices;

        if (currentCards[idx1].content === currentCards[idx2].content) {
            // Match!
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
            // No match
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
        <div className={styles.section} style={{ marginTop: '2rem' }}>
            <div className={styles.sectionHeader}>
                <div>
                    <h3 className={styles.sectionTitle} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        Mind Match <Sparkles size={20} color="#F59E0B" />
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Match the pairs to boost your focus!</p>
                </div>
                <Button size="sm" variant="ghost" onClick={initializeGame}>
                    <RefreshCw size={16} style={{ marginRight: '0.5rem' }} /> Restart
                </Button>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '12px',
                maxWidth: '360px',
                margin: '0 auto',
                perspective: '1000px'
            }}>
                {cards.map((card, index) => (
                    <div
                        key={card.id}
                        onClick={() => handleCardClick(index)}
                        style={{
                            height: '70px',
                            background: card.isFlipped || card.isMatched ? card.bg : '#6C5CE7',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '2rem',
                            cursor: 'pointer',
                            transition: 'all 0.4s',
                            transform: card.isFlipped || card.isMatched ? 'rotateY(180deg)' : 'rotateY(0deg)',
                            boxShadow: card.isFlipped || card.isMatched ? '0 4px 12px rgba(0,0,0,0.1)' : '0 4px 0 #5a4ad1',
                            border: card.isMatched ? `2px solid ${card.text}` : 'none'
                        }}
                    >
                        <div style={{
                            transform: 'rotateY(180deg)', /* Counter flight flip text so it looks right */
                            opacity: card.isFlipped || card.isMatched ? 1 : 0,
                            color: card.isFlipped || card.isMatched ? card.text : 'inherit'
                        }}>
                            {card.content}
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
