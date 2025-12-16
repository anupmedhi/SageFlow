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

            <div style={{ marginTop: '2.5rem', marginBottom: '2.5rem' }}>
                <h2 className={styles.sectionTitle}>Class Leaderboard 🏆</h2>
                <div style={{ background: 'white', borderRadius: '24px', padding: '1.5rem', boxShadow: 'var(--shadow-sm)' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid #F1F5F9', textAlign: 'left' }}>
                                <th style={{ padding: '1rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>Rank</th>
                                <th style={{ padding: '1rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>Student</th>
                                <th style={{ padding: '1rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>Points</th>
                                <th style={{ padding: '1rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>Trend</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { rank: 1, name: 'Sarah K.', points: 1450, trend: 'up' },
                                { rank: 2, name: 'Mike R.', points: 1320, trend: 'up' },
                                { rank: 3, name: 'Emma W.', points: 1290, trend: 'same' },
                                { rank: 4, name: 'Alex M.', points: 1250, trend: 'up', isMe: true },
                                { rank: 5, name: 'David L.', points: 1180, trend: 'down' },
                            ].map((student) => (
                                <tr key={student.rank} style={{
                                    borderBottom: '1px solid #F8FAFC',
                                    background: student.isMe ? '#F5F3FF' : 'transparent',
                                    fontWeight: student.isMe ? '700' : '500'
                                }}>
                                    <td style={{ padding: '1rem' }}>
                                        <div style={{
                                            width: '24px', height: '24px',
                                            background: student.rank === 1 ? '#FEF3C7' : '#F1F5F9',
                                            color: student.rank === 1 ? '#D97706' : '#64748B',
                                            borderRadius: '50%',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            fontSize: '0.75rem', fontWeight: '700'
                                        }}>
                                            {student.rank}
                                        </div>
                                    </td>
                                    <td style={{ padding: '1rem', color: student.isMe ? '#4F46E5' : 'var(--text-main)' }}>
                                        {student.name} {student.isMe && '(You)'}
                                    </td>
                                    <td style={{ padding: '1rem', fontFamily: 'var(--font-outfit)' }}>
                                        {student.points}
                                    </td>
                                    <td style={{ padding: '1rem' }}>
                                        {student.trend === 'up' && <span style={{ color: '#10B981' }}>↗️</span>}
                                        {student.trend === 'same' && <span style={{ color: '#94A3B8' }}>➡️</span>}
                                        {student.trend === 'down' && <span style={{ color: '#EF4444' }}>↘️</span>}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
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
