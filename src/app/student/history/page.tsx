"use client";

import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Calendar, Trophy, Target, TrendingUp } from 'lucide-react';
import styles from './history.module.css';

const data = [
    { name: 'Mon', score: 60 },
    { name: 'Tue', score: 75 },
    { name: 'Wed', score: 68 },
    { name: 'Thu', score: 85 },
    { name: 'Fri', score: 82 },
    { name: 'Sat', score: 90 },
    { name: 'Sun', score: 88 },
];

export default function HistoryPage() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>My Progress</h1>
                <p className={styles.subtitle}>See how far you've come!</p>
            </div>

            <div className={styles.statsRow}>
                <div className={styles.statCard}>
                    <div className={styles.statIcon} style={{ background: '#E0E7FF', color: '#4F46E5' }}>
                        <Trophy size={28} />
                    </div>
                    <div className={styles.statInfo}>
                        <h4>Total Points</h4>
                        <div>1,250</div>
                    </div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statIcon} style={{ background: '#DCFCE7', color: '#10B981' }}>
                        <Target size={28} />
                    </div>
                    <div className={styles.statInfo}>
                        <h4>Goals Met</h4>
                        <div>12</div>
                    </div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statIcon} style={{ background: '#FEE2E2', color: '#EF4444' }}>
                        <TrendingUp size={28} />
                    </div>
                    <div className={styles.statInfo}>
                        <h4>Avg Mood</h4>
                        <div>8.5</div>
                    </div>
                </div>
            </div>

            <div className={styles.chartSection}>
                <h2 className={styles.sectionTitle}>Weekly Wellbeing Score</h2>
                <div style={{ flex: 1, minHeight: 0 }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#6C5CE7" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#6C5CE7" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748B' }} dy={10} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748B' }} domain={[0, 100]} />
                            <Tooltip
                                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                cursor={{ stroke: '#6C5CE7', strokeWidth: 2, strokeDasharray: '4 4' }}
                            />
                            <Area
                                type="monotone"
                                dataKey="score"
                                stroke="#6C5CE7"
                                strokeWidth={4}
                                fillOpacity={1}
                                fill="url(#colorScore)"
                                animationDuration={1500}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <h2 className={styles.sectionTitle}>Recent Check-ins</h2>
            <div className={styles.historyList}>
                <div className={styles.historyItem}>
                    <div className={styles.dateBlock}>
                        <div className={styles.dateIcon}>
                            <Calendar size={24} />
                        </div>
                        <div>
                            <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>Weekly Check-in</div>
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Sunday, Oct 24</div>
                        </div>
                    </div>
                    <div className={styles.scoreBadge}>92 Points</div>
                </div>
                <div className={styles.historyItem}>
                    <div className={styles.dateBlock}>
                        <div className={styles.dateIcon}>
                            <Calendar size={24} />
                        </div>
                        <div>
                            <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>Weekly Check-in</div>
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Sunday, Oct 17</div>
                        </div>
                    </div>
                    <div className={styles.scoreBadge}>85 Points</div>
                </div>
                <div className={styles.historyItem}>
                    <div className={styles.dateBlock}>
                        <div className={styles.dateIcon}>
                            <Calendar size={24} />
                        </div>
                        <div>
                            <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>Weekly Check-in</div>
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Sunday, Oct 10</div>
                        </div>
                    </div>
                    <div className={styles.scoreBadge}>78 Points</div>
                </div>
            </div>

        </div>
    );
}
