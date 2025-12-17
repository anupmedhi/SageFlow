"use client";
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { RefreshCw, BookOpen, Check } from 'lucide-react';
import styles from '../student.module.css';

const WORDS = [
    { word: 'FOCUS', hint: 'Concentration' },
    { word: 'STUDY', hint: 'Learning' },
    { word: 'GROWTH', hint: 'Development' },
    { word: 'MIND', hint: 'Brain power' },
    { word: 'FLOW', hint: 'Being in the zone' },
    { word: 'PEACE', hint: 'Calmness' }
];

export default function WordGame() {
    const [currentWord, setCurrentWord] = useState({ word: '', hint: '' });
    const [scrambled, setScrambled] = useState('');
    const [input, setInput] = useState('');
    const [message, setMessage] = useState('');
    const [score, setScore] = useState(0);

    useEffect(() => {
        nextWord();
    }, []);

    const nextWord = () => {
        const random = WORDS[Math.floor(Math.random() * WORDS.length)];
        setCurrentWord(random);
        setScrambled(shuffle(random.word));
        setInput('');
        setMessage('');
    };

    const shuffle = (word: string) => {
        return word.split('').sort(() => Math.random() - 0.5).join('');
    };

    const checkAnswer = () => {
        if (input.toUpperCase().trim() === currentWord.word) {
            setMessage('Correct! 🎉');
            setScore(s => s + 10);
            setTimeout(nextWord, 1000);
        } else {
            setMessage('Try again! ❌');
        }
    };

    return (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <div className={styles.sectionHeader} style={{ marginBottom: '0.5rem' }}>
                <h3 className={styles.sectionTitle} style={{ fontSize: '1.1rem' }}>
                    <BookOpen size={20} color="#6C5CE7" style={{ marginRight: '0.5rem' }} /> Word IQ
                </h3>
                <div style={{ fontWeight: 800, color: '#6C5CE7' }}>{score} pts</div>
            </div>

            <div style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div style={{
                    fontSize: '2rem',
                    letterSpacing: '0.5rem',
                    fontWeight: 800,
                    color: '#64748B',
                    marginBottom: '0.25rem',
                    marginTop: '2rem' // Push the whole group down
                }}>
                    {scrambled}
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                    Hint: {currentWord.hint}
                </div>

                <div style={{
                    width: '100%',
                    maxWidth: '220px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                    marginTop: '0.5rem' // Reduced gap to bring text closer to button
                }}>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && checkAnswer()}
                        placeholder="Type answer here..."
                        style={{
                            width: '100%',
                            padding: '0.75rem 1rem',
                            borderRadius: '12px',
                            border: '1px solid #E2E8F0',
                            outline: 'none',
                            fontSize: '1rem',
                            textAlign: 'center',
                            fontWeight: 600,
                            background: '#F8FAFC'
                        }}
                    />
                    <Button
                        size="md"
                        onClick={checkAnswer}
                        style={{
                            width: '100%',
                            borderRadius: '12px',
                            background: '#6C5CE7',
                            fontWeight: 600
                        }}
                    >
                        Check Answer
                    </Button>
                </div>

                <div style={{
                    height: '1.5rem',
                    marginTop: '1.5rem',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    color: message.includes('Correct') ? '#10B981' : '#EF4444',
                    transition: 'all 0.3s'
                }}>
                    {message}
                </div>
            </div>
        </div>
    );
}
