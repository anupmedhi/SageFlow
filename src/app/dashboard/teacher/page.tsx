"use client";
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Brain, Smile, Zap, TrendingUp, AlertCircle, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import styles from './teacher.module.css';

const data = [
    { name: 'Mon', score: 65, engagement: 70 },
    { name: 'Tue', score: 72, engagement: 75 },
    { name: 'Wed', score: 68, engagement: 80 },
    { name: 'Thu', score: 85, engagement: 85 },
    { name: 'Fri', score: 82, engagement: 88 },
];

const students = [
    { name: "Alex M.", risk: "med", score: 6.8 },
    { name: "Sarah K.", risk: "low", score: 8.5 },
    { name: "James P.", risk: "high", score: 4.5 },
    { name: "Emily R.", risk: "low", score: 9.2 },
    { name: "Michael B.", risk: "med", score: 6.2 },
    { name: "John D.", risk: "high", score: 4.8 },
    { name: "Lisa T.", risk: "low", score: 8.9 },
    { name: "David W.", risk: "med", score: 6.5 },
];

export default function TeacherDashboard() {
    return (
        <div>
            <div className={styles.header}>
                <h1 className={styles.title}>Class Overview</h1>
                <p className={styles.subtitle}>Good Morning, Mr. Smith. Here's your daily class pulse.</p>
            </div>

            <div className={styles.kpiGrid}>
                <div className={styles.kpiCard}>
                    <div className={styles.kpiIcon} style={{ background: '#E0E7FF', color: '#4F46E5' }}>
                        <Zap size={28} />
                    </div>
                    <div>
                        <div className={styles.kpiLabel}>Avg Engagement</div>
                        <div className={styles.kpiValue}>78% <span style={{ fontSize: '1rem', color: '#10B981', fontWeight: 500 }}>+2%</span></div>
                    </div>
                </div>
                <div className={styles.kpiCard}>
                    <div className={styles.kpiIcon} style={{ background: '#DCFCE7', color: '#10B981' }}>
                        <Smile size={28} />
                    </div>
                    <div>
                        <div className={styles.kpiLabel}>Avg Wellbeing</div>
                        <div className={styles.kpiValue}>7.2 <span style={{ fontSize: '1rem', color: '#text-muted', fontWeight: 400 }}>/ 10</span></div>
                    </div>
                </div>
                <div className={styles.kpiCard}>
                    <div className={styles.kpiIcon} style={{ background: '#FEE2E2', color: '#EF4444' }}>
                        <AlertCircle size={28} />
                    </div>
                    <div>
                        <div className={styles.kpiLabel}>Attention Needed</div>
                        <div className={styles.kpiValue}>3 <span style={{ fontSize: '1rem', fontWeight: 400, color: '#EF4444' }}>Students</span></div>
                    </div>
                </div>
            </div>

            <div className={styles.grid2}>
                <div className={styles.chartCard} style={{ width: '100%', minWidth: 0 }}>
                    <div className={styles.sectionTitle}>
                        <span>Weekly Trends</span>
                        <Button size="sm" variant="ghost" >Last 7 Days</Button>
                    </div>

                    <div style={{ flex: 1, minHeight: 0 }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#6C5CE7" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#6C5CE7" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748B' }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748B' }} />
                                <Tooltip
                                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                    cursor={{ stroke: '#6C5CE7', strokeWidth: 1, strokeDasharray: '4 4' }}
                                />
                                {/* Two areas for better visual density */}
                                <Area type="monotone" dataKey="score" stroke="#6C5CE7" strokeWidth={3} fillOpacity={1} fill="url(#colorScore)" />
                                <Area type="monotone" dataKey="engagement" stroke="#00B894" strokeWidth={3} strokeDasharray="5 5" fill="none" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '1rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#6C5CE7' }} /> Wellbeing
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                            <div style={{ width: 10, height: 10, borderRadius: '50%', border: '2px dashed #00B894' }} /> Engagement
                        </div>
                    </div>
                </div>

                <div className={styles.listCard}>
                    <div className={styles.listHeader}>
                        <h2 className={styles.sectionTitle} style={{ marginBottom: 0 }}>Students at Risk</h2>
                    </div>

                    <div className={styles.studentList}>
                        {students.map((s, i) => (
                            <div key={i} className={styles.studentItem}>
                                <div className={styles.studentInfo}>
                                    <div className={styles.studentAvatar}>
                                        {s.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 600, color: 'var(--text-main)' }}>{s.name}</div>
                                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Avg Score: {s.score}</div>
                                    </div>
                                </div>
                                <div className={`${styles.riskTag} ${s.risk === 'low' ? styles.riskLow : s.risk === 'med' ? styles.riskMed : styles.riskHigh
                                    }`}>
                                    {s.risk === 'low' ? 'Low' : s.risk === 'med' ? 'Monitor' : 'High'}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div style={{ padding: '1rem', borderTop: '1px solid rgba(0,0,0,0.04)' }}>
                        <Button variant="outline" style={{ width: '100%' }}>View All Students</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
