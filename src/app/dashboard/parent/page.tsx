"use client";
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { CheckCircle, Clock } from 'lucide-react';
import styles from './parent.module.css';

const moodData = [
    { day: 'Mon', mood: 8 },
    { day: 'Tue', mood: 7 },
    { day: 'Wed', mood: 9 },
    { day: 'Thu', mood: 6 },
    { day: 'Fri', mood: 8 },
    { day: 'Sat', mood: 9 },
    { day: 'Sun', mood: 9 },
];

export default function ParentDashboard() {
    return (
        <div>
            <div className={styles.header}>
                <h1 className={styles.title}>Parent Dashboard</h1>
                <p className={styles.subtitle}>Overview for Alex</p>
            </div>

            <div className={styles.overviewCard}>
                <div className={styles.childInfo}>
                    <div className={styles.avatar}>AL</div>
                    <div>
                        <h2 style={{ margin: 0, fontSize: '1.5rem', marginBottom: '0.25rem' }}>Alex</h2>
                        <p style={{ margin: 0, color: 'var(--text-muted)' }}>Class 5A</p>
                    </div>
                </div>
                <div className={styles.stats}>
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>8.0</span>
                        <span className={styles.statLabel}>Avg Mood</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>100%</span>
                        <span className={styles.statLabel}>Check-ins</span>
                    </div>
                </div>
            </div>

            <div className={styles.chartSection}>
                <h3 style={{ marginBottom: '1.5rem', fontSize: '1.25rem' }}>Mood Trends</h3>
                <div style={{ flex: 1, minHeight: 0 }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={moodData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorMood" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#00B894" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#00B894" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                            <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#64748B' }} dy={10} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748B' }} domain={[0, 10]} />
                            <Tooltip
                                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                cursor={{ stroke: '#00B894', strokeWidth: 1, strokeDasharray: '4 4' }}
                            />
                            <Area type="monotone" dataKey="mood" stroke="#00B894" strokeWidth={3} fillOpacity={1} fill="url(#colorMood)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.25rem' }}>Recent Activity</h3>
            <div className={styles.activityList}>
                <div className={styles.activityCard}>
                    <div className={styles.checkIcon}>
                        <CheckCircle size={24} />
                    </div>
                    <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>Weekly Check-in Completed</div>
                        <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Today, 9:00 AM</div>
                    </div>
                    <div style={{ fontWeight: 700, color: '#00B894', fontSize: '1.1rem' }}>+50 pts</div>
                </div>

                <div className={styles.activityCard}>
                    <div className={styles.checkIcon} style={{ background: '#FEF3C7', color: '#F59E0B' }}>
                        <Clock size={24} />
                    </div>
                    <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>Math Quiz Visualization</div>
                        <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Yesterday</div>
                    </div>
                    <div style={{ fontWeight: 700, color: '#F59E0B', fontSize: '1.1rem' }}>Pending</div>
                </div>
            </div>
        </div>
    );
}
