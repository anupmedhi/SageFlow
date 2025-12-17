"use client";
import React, { useState } from 'react';
import { Moon, Smartphone, Apple, CheckCircle2, Flame, Utensils } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import styles from '../student.module.css';

interface Habit {
    id: string;
    label: string;
    icon: React.ReactNode;
    type: 'slider' | 'select';
    value: number | string;
    unit?: string;
    options?: { label: string; val: string; icon: string }[];
    min?: number;
    max?: number;
    color: string;
}

export default function HabitTracker() {
    const [submitted, setSubmitted] = useState(false);
    const [habits, setHabits] = useState<Habit[]>([
        {
            id: 'sleep',
            label: 'Sleep Duration',
            icon: <Moon size={20} />,
            type: 'slider',
            value: 7,
            unit: 'hrs',
            min: 4,
            max: 12,
            color: '#8B5CF6'
        },
        {
            id: 'screen',
            label: 'Screen Time',
            icon: <Smartphone size={20} />,
            type: 'slider',
            value: 3,
            unit: 'hrs',
            min: 0,
            max: 12,
            color: '#F59E0B'
        },
        {
            id: 'diet',
            label: 'Nutrition Quality',
            icon: <Utensils size={20} />,
            type: 'select',
            value: '',
            color: '#10B981',
            options: [
                { label: 'Poor', val: 'poor', icon: '🍕' },
                { label: 'Okay', val: 'okay', icon: '🥯' },
                { label: 'Good', val: 'good', icon: '🥗' },
                { label: 'Great', val: 'great', icon: '🥑' },
            ]
        }
    ]);

    const handleUpdate = (id: string, newVal: number | string) => {
        setHabits(prev => prev.map(h => h.id === id ? { ...h, value: newVal } : h));
    };

    const handleSubmit = () => {
        setSubmitted(true);
        // Here you would typically save to DB
    };

    if (submitted) {
        return (
            <div style={{ height: '100%', minHeight: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                <div style={{
                    width: '80px', height: '80px',
                    borderRadius: '50%',
                    background: '#DCFCE7',
                    color: '#166534',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '1rem'
                }}>
                    <CheckCircle2 size={40} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1E293B', marginBottom: '0.5rem' }}>All Checked In!</h3>
                <p style={{ color: '#64748B', maxWidth: '250px' }}>Great job tracking your daily rhythm. Keep up the streak!</p>

                <div style={{
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                    marginTop: '1.5rem', padding: '0.5rem 1rem',
                    background: '#FEF3C7', borderRadius: '99px',
                    color: '#D97706', fontWeight: 700
                }}>
                    <Flame size={18} fill="#D97706" /> 5 Day Streak
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className={styles.sectionHeader} style={{ marginBottom: '1.5rem' }}>
                <div>
                    <h3 className={styles.sectionTitle}>Daily Rhythm</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Track your wellbeing habits</p>
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {habits.map((habit) => (
                    <div key={habit.id}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: '#334155' }}>
                                <div style={{
                                    padding: '0.4rem', borderRadius: '8px',
                                    background: `${habit.color}20`, color: habit.color
                                }}>
                                    {habit.icon}
                                </div>
                                {habit.label}
                            </div>
                            {habit.type === 'slider' && (
                                <div style={{ fontWeight: 700, color: habit.color }}>
                                    {habit.value} <span style={{ fontSize: '0.8em', opacity: 0.7 }}>{habit.unit}</span>
                                </div>
                            )}
                        </div>

                        {habit.type === 'slider' ? (
                            <input
                                type="range"
                                min={habit.min}
                                max={habit.max}
                                step={0.5}
                                value={habit.value as number}
                                onChange={(e) => handleUpdate(habit.id, parseFloat(e.target.value))}
                                style={{
                                    width: '100%',
                                    accentColor: habit.color,
                                    height: '6px',
                                    borderRadius: '10px',
                                    cursor: 'pointer'
                                }}
                            />
                        ) : (
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                {habit.options?.map((opt) => (
                                    <button
                                        key={opt.val}
                                        onClick={() => handleUpdate(habit.id, opt.val)}
                                        style={{
                                            flex: 1,
                                            padding: '0.5rem',
                                            borderRadius: '10px',
                                            background: habit.value === opt.val ? `${habit.color}20` : '#F8FAFC',
                                            border: `1px solid ${habit.value === opt.val ? habit.color : '#E2E8F0'}`,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            gap: '0.25rem',
                                            cursor: 'pointer',
                                            transition: 'all 0.2s'
                                        }}
                                    >
                                        <span style={{ fontSize: '1.25rem' }}>{opt.icon}</span>
                                        <span style={{ fontSize: '0.7rem', fontWeight: 600, color: habit.value === opt.val ? habit.color : '#64748B' }}>{opt.label}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                ))}

                <Button
                    onClick={handleSubmit}
                    style={{
                        width: '100%', marginTop: '0.5rem',
                        background: '#1E293B', borderRadius: '12px', height: '3rem', fontSize: '1rem'
                    }}
                >
                    Log Habits
                </Button>
            </div>
        </div>
    );
}
