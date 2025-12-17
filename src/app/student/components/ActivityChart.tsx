"use client";
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import styles from '../student.module.css';

const moodTrends = [
    { day: 'Mon', level: 6 },
    { day: 'Tue', level: 8 },
    { day: 'Wed', level: 7 },
    { day: 'Thu', level: 9 },
    { day: 'Fri', level: 8 },
    { day: 'Sat', level: 9 },
    { day: 'Sun', level: 9 },
];

export default function StudentActivityChart() {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <div className={styles.sectionHeader}>
                <h3 className={styles.sectionTitle}>Your Mood Flow</h3>
            </div>
            <div style={{ flex: 1, minHeight: 0 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={moodTrends} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorLevel" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#6C5CE7" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#6C5CE7" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                        <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#64748B' }} dy={10} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748B' }} domain={[0, 10]} />
                        <Tooltip
                            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                            cursor={{ stroke: '#6C5CE7', strokeWidth: 1, strokeDasharray: '4 4' }}
                        />
                        <Area type="monotone" dataKey="level" stroke="#6C5CE7" strokeWidth={3} fillOpacity={1} fill="url(#colorLevel)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
