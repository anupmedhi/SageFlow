"use client";

import React from 'react';
import Link from 'next/link';
import { BookOpen, Clock, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import styles from './student.module.css';
import StudentStatsRow from './components/StatsRow';
import MemoryGame from './components/MemoryGame';
import StudentActivityChart from './components/ActivityChart';
import WordGame from './components/WordGame';
import NumberGame from './components/NumberGame';
import HabitTracker from './components/HabitTracker';

export default function StudentDashboard() {
    const [selectedMood, setSelectedMood] = React.useState<string | null>(null);

    return (
        <div className={styles.container}>
            <div className={styles.header} style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                    <h1 className={styles.title}>Welcome back, Alex! 👋</h1>
                    <p className={styles.subtitle} style={{ marginBottom: 0 }}>Ready to start your week?</p>
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                </div>
            </div>

            <StudentStatsRow />

            <div className={styles.dashboardGrid}>
                {/* Main Content Column */}
                <div className={styles.mainColumn}>

                    {/* Hero Card */}
                    <div className={`${styles.checkInCard} animate-float-delayed`}>
                        <div className={styles.checkInContent}>
                            <h2 className={styles.checkInTitle}>Weekly Check-in</h2>
                            <p className={styles.checkInText}>
                                It's that time again! Reflect on your week to earn points and insights.
                            </p>
                            <Link href="/student/assessment">
                                <Button size="lg" style={{ background: 'white', color: '#6C5CE7', border: 'none' }}>
                                    Start Assessment
                                </Button>
                            </Link>
                        </div>
                        <div className={styles.checkInDecor}>🌊</div>
                    </div>

                    {/* Mood Section */}
                    <div className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <h3 className={styles.sectionTitle}>How are you feeling?</h3>
                            <Button variant="ghost" size="sm">Log details</Button>
                        </div>
                        <div className={styles.moodGrid}>
                            {[
                                { label: 'Great', emoji: '🤩' },
                                { label: 'Good', emoji: '🙂' },
                                { label: 'Okay', emoji: '😐' },
                                { label: 'Down', emoji: '🙁' },
                                { label: 'Tired', emoji: '😫' }
                            ].map((mood, i) => (
                                <button
                                    key={i}
                                    className={`${styles.moodBtn} ${selectedMood === mood.label ? styles.activeMood : ''}`}
                                    onClick={() => setSelectedMood(mood.label)}
                                >
                                    <span className={styles.moodEmoji}>{mood.emoji}</span>
                                    <span className={styles.moodLabel}>{mood.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Games Grid */}
                    <div className={styles.gamesGrid}>
                        <div className={styles.section}>
                            <WordGame />
                        </div>
                        <div className={styles.section}>
                            <NumberGame />
                        </div>
                    </div>

                    {/* Memory Game */}
                    <div className={styles.section}>
                        <MemoryGame />
                    </div>

                    {/* Habit Tracker */}
                    <div className={styles.section}>
                        <HabitTracker />
                    </div>

                    {/* Resources */}
                    <div className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <h3 className={styles.sectionTitle}>Recommended for you</h3>
                            <Button variant="ghost" size="sm">View All</Button>
                        </div>
                        <div className={styles.resourceList}>
                            <div className={styles.resourceItem}>
                                <div className={styles.resourceThumb}>
                                    <PlayCircle size={24} />
                                </div>
                                <div className={styles.resourceInfo}>
                                    <h4>Deep Focus Music</h4>
                                    <p>45 mins • Concentration</p>
                                </div>
                            </div>
                            <div className={styles.resourceItem}>
                                <div className={styles.resourceThumb} style={{ background: '#DCFCE7', color: '#166534' }}>
                                    <BookOpen size={24} />
                                </div>
                                <div className={styles.resourceInfo}>
                                    <h4>Exam Stress Tips</h4>
                                    <p>5 mins • Reading</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Side Column */}
                <div className={styles.sideColumn}>

                    {/* Chart */}
                    <div className={`${styles.section} ${styles.chartContainer}`}>
                        <StudentActivityChart />
                    </div>

                    {/* History */}
                    <div className={styles.section} style={{ flex: 1 }}>
                        <div className={styles.sectionHeader}>
                            <h3 className={styles.sectionTitle}>History</h3>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {[1, 2, 3, 4].map((_, i) => (
                                <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center', opacity: 0.8 }}>
                                    <div style={{ background: '#F1F5F9', padding: '0.6rem', borderRadius: '12px', color: '#64748B' }}>
                                        <Clock size={18} />
                                    </div>
                                    <div style={{ fontSize: '0.85rem' }}>
                                        <div style={{ fontWeight: 600, color: 'var(--text-main)' }}>Check-in #{4 - i}</div>
                                        <div style={{ color: 'var(--text-muted)' }}>{i + 1} week ago</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
