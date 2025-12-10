"use client";

import React from 'react';
import Link from 'next/link';
import { Flame, Star, BookOpen, Clock, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import styles from './student.module.css';

export default function StudentDashboard() {
    const [selectedMood, setSelectedMood] = React.useState<string | null>(null);

    return (
        <div>
            <div style={{ marginBottom: '2rem' }}>
                <h1 className={styles.title}>Welcome back, Alex! 👋</h1>
                <p className={styles.subtitle}>Ready to start your week?</p>
            </div>

            <div className={styles.grid}>
                {/* ... Main content ... */}
                <div className={styles.mainColumn}>

                    {/* ... Check In Card ... */}
                    <div className={`${styles.checkInCard} animate-float-delayed`}>
                        {/* ... (keep content same) ... */}
                        <div className={styles.checkInContent}>
                            <h2 className={styles.checkInTitle}>Weekly Check-in</h2>
                            <p className={styles.checkInText}>
                                It's that time again! Reflect on your week to earn points and insights.
                            </p>
                            <Link href="/student/assessment">
                                <Button size="lg" style={{ background: 'white', color: '#6C5CE7' }}>
                                    Start Assessment
                                </Button>
                            </Link>
                        </div>
                        <div className={styles.checkInDecor}>🌊</div>
                    </div>

                    <div className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <h3 className={styles.sectionTitle}>How are you feeling right now?</h3>
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

                    <div className={styles.statCard}>
                        <div className={styles.statIcon} style={{ background: '#FF7675' }}>
                            <Flame size={24} />
                        </div>
                        <div className={styles.statInfo}>
                            <h4>Current Streak</h4>
                            <div>5 Days</div>
                        </div>
                    </div>

                    <div className={styles.statCard}>
                        <div className={styles.statIcon} style={{ background: '#FDCB6E' }}>
                            <Star size={24} />
                        </div>
                        <div className={styles.statInfo}>
                            <h4>Total Points</h4>
                            <div>1,250</div>
                        </div>
                    </div>

                    <div className={styles.section} style={{ flex: 1 }}>
                        <h3 className={styles.sectionTitle} style={{ marginBottom: '1rem' }}>History</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {[1, 2, 3].map((_, i) => (
                                <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center', opacity: 0.7 }}>
                                    <div style={{ background: '#F1F5F9', padding: '0.5rem', borderRadius: '8px' }}>
                                        <Clock size={16} color="#64748B" />
                                    </div>
                                    <div style={{ fontSize: '0.875rem' }}>
                                        <div style={{ fontWeight: 600 }}>Weekly Check-in</div>
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
