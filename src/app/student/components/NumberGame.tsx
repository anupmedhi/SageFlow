"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Calculator, Zap, Trophy, RefreshCw } from 'lucide-react';
import styles from '../student.module.css';

export default function NumberGame() {
    const [target, setTarget] = useState(0);
    const [numbers, setNumbers] = useState<{ id: number; val: number }[]>([]);
    const [selectedIds, setSelectedIds] = useState<number[]>([]);
    const [score, setScore] = useState(0);
    const [level, setLevel] = useState(1);
    const [message, setMessage] = useState('');

    useEffect(() => {
        startNewRound();
    }, []);

    const startNewRound = () => {
        // Generate a target between 10 and 30
        const newTarget = Math.floor(Math.random() * 20) + 10;
        setTarget(newTarget);

        // Generate numbers that guarantee at least one solution
        const n1 = Math.floor(Math.random() * (newTarget - 2)) + 1;
        const n2 = newTarget - n1;

        // Fill rest with randoms
        const others = Array.from({ length: 4 }).map((_, i) => ({
            id: i + 2,
            val: Math.floor(Math.random() * 15) + 1
        }));

        const solution = [
            { id: 0, val: n1 },
            { id: 1, val: n2 }
        ];

        // Shuffle
        const allNumbers = [...solution, ...others].sort(() => Math.random() - 0.5);

        setNumbers(allNumbers);
        setSelectedIds([]);
        setMessage('');
    };

    const handleSelect = (id: number, val: number) => {
        if (selectedIds.includes(id)) {
            setSelectedIds(prev => prev.filter(mid => mid !== id));
            return;
        }

        const newSelected = [...selectedIds, id];
        setSelectedIds(newSelected);

        // Check Sum
        const currentSum = newSelected.reduce((acc, currId) => {
            const num = numbers.find(n => n.id === currId);
            return acc + (num ? num.val : 0);
        }, 0);

        if (currentSum === target) {
            handleSuccess();
        } else if (currentSum > target) {
            handleFailure();
        }
    };

    const handleSuccess = () => {
        setMessage('Perfect!');
        setScore(s => s + (10 * level));
        setLevel(l => l + 1);
        setTimeout(() => {
            startNewRound();
        }, 800);
    };

    const handleFailure = () => {
        setMessage('Too High!');
        setTimeout(() => {
            setSelectedIds([]);
            setMessage('');
        }, 500);
    };

    return (
        <div style={{ paddingBottom: '0.5rem' }}>
            <div className={styles.sectionHeader} style={{ marginBottom: '1.5rem' }}>
                <h3 className={styles.sectionTitle} style={{ fontSize: '1.1rem' }}>
                    <Zap size={20} color="#F59E0B" fill="#F59E0B" style={{ marginRight: '0.5rem' }} /> Zenith
                </h3>
                <div style={{ fontWeight: 800, color: '#F59E0B' }}>{score}</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ position: 'relative', marginBottom: '1rem', textAlign: 'center' }}>
                    <span style={{
                        fontSize: '0.75rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        color: 'var(--text-muted)',
                        display: 'block',
                        marginBottom: '0.25rem'
                    }}>
                        Target
                    </span>
                    <motion.div
                        key={target}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        style={{
                            fontSize: '3rem',
                            fontWeight: 800,
                            color: '#4F46E5',
                            lineHeight: 1
                        }}
                    >
                        {target}
                    </motion.div>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '0.75rem',
                    width: '100%',
                    maxWidth: '240px'
                }}>
                    <AnimatePresence>
                        {numbers.map((num) => {
                            const isSelected = selectedIds.includes(num.id);
                            return (
                                <motion.button
                                    key={`${target}-${num.id}`}
                                    layout
                                    initial={{ scale: 0 }}
                                    animate={{
                                        scale: isSelected ? 1.05 : 1,
                                        backgroundColor: isSelected ? '#4F46E5' : '#F1F5F9',
                                        color: isSelected ? '#ffffff' : '#475569'
                                    }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => handleSelect(num.id, num.val)}
                                    style={{
                                        height: '48px',
                                        border: 'none',
                                        borderRadius: '12px',
                                        fontSize: '1.25rem',
                                        fontWeight: 700,
                                        cursor: 'pointer'
                                    }}
                                >
                                    {num.val}
                                </motion.button>
                            );
                        })}
                    </AnimatePresence>
                </div>

                <div style={{
                    height: '1.5rem',
                    marginTop: '1rem',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: message === 'Perfect!' ? '#10B981' : '#EF4444'
                }}>
                    {message}
                </div>
            </div>
        </div>
    );
}
