"use client";
import { Button } from '@/components/ui/Button';
import { Brain, Heart, Sparkles, Stethoscope, Activity, CheckCircle, AlertCircle, Download, Calendar, Users, MessageCircle } from 'lucide-react';
import React, { useState } from 'react';
import styles from './parent.module.css';

export default function ParentDashboard() {
    const [selectedChild, setSelectedChild] = useState<'alex' | 'sarah'>('alex');

    return (
        <div>
            <div className={styles.header}>
                <div>
                    <h1 className={styles.title}>Parent Dashboard</h1>
                    <p className={styles.subtitle}>Welcome back, Mrs. Miller</p>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <Button variant="outline" style={{ gap: '0.5rem', background: 'white' }}>
                        <Download size={18} />
                        Download Report
                    </Button>
                    <Button style={{ gap: '0.5rem', background: '#4F46E5', color: 'white' }}>
                        <Calendar size={18} />
                        Book a Counsellor
                    </Button>
                </div>
            </div>

            {/* FAMILY SECTION */}
            <h2 className={styles.sectionTitle}>
                <Users size={24} className="text-primary" /> My Family
            </h2>

            <div className={styles.familyGrid}>
                <div
                    className={`${styles.childSelectorCard} ${selectedChild === 'alex' ? styles.active : ''}`}
                    onClick={() => setSelectedChild('alex')}
                >
                    <div className={styles.childAvatar} style={{ background: '#E0E7FF', color: '#4F46E5' }}>AL</div>
                    <div>
                        <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>Alex Miller</div>
                        <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Class 5A • Age 10</div>
                    </div>
                    {selectedChild === 'alex' && <CheckCircle size={20} color="#10B981" style={{ marginLeft: 'auto' }} />}
                </div>

                <div
                    className={`${styles.childSelectorCard} ${selectedChild === 'sarah' ? styles.active : ''}`}
                    onClick={() => setSelectedChild('sarah')}
                >
                    <div className={styles.childAvatar} style={{ background: '#FCE7F3', color: '#EC4899' }}>SA</div>
                    <div>
                        <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>Sarah Miller</div>
                        <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Class 8B • Age 13</div>
                    </div>
                    {selectedChild === 'sarah' && <CheckCircle size={20} color="#10B981" style={{ marginLeft: 'auto' }} />}
                </div>
            </div>

            <div className={styles.familyHarmonyCard}>
                <div className={styles.harmonyContent}>
                    <div style={{ flex: 1 }}>
                        <h3 style={{ fontSize: '1.5rem', margin: '0 0 0.5rem 0' }}>Family Pulse 💜</h3>
                        <p style={{ opacity: 0.9, lineHeight: 1.6 }}>
                            Great job! Both kids reported feeling <strong>"Supported"</strong> this week.
                            Consider planning a shared activity this weekend.
                        </p>

                        <div className={styles.topicCard}>
                            <div style={{ background: '#E0E7FF', padding: '0.5rem', borderRadius: '50%', color: '#4F46E5' }}>
                                <MessageCircle size={20} />
                            </div>
                            <div>
                                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>Dinner Table Topic</div>
                                <div style={{ fontWeight: 600, marginTop: '2px' }}>"What was one thing that made you laugh today?"</div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.harmonyMetric}>
                        <div style={{ fontSize: '2.5rem', fontWeight: 800 }}>92%</div>
                        <div style={{ fontSize: '0.875rem', opacity: 0.8 }}>Household Harmony</div>
                    </div>
                </div>
                {/* Decorative background blob */}
                <div style={{
                    position: 'absolute', top: -100, right: -50, width: 300, height: 300,
                    background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
                    borderRadius: '50%'
                }} />
            </div>

            {/* Child Profile & Quick Stats */}
            <div className={styles.profileSection}>
                <div className={styles.avatar}>
                    {selectedChild === 'alex' ? 'AL' : 'SA'}
                </div>
                <div style={{ flex: 1 }}>
                    <h2 style={{ margin: 0, fontSize: '1.5rem', marginBottom: '0.25rem' }}>
                        {selectedChild === 'alex' ? 'Alex Miller' : 'Sarah Miller'}
                    </h2>
                    <p style={{ margin: 0, color: 'var(--text-muted)' }}>
                        {selectedChild === 'alex' ? 'Class 5A • Roll No. 12 • Age 10' : 'Class 8B • Roll No. 24 • Age 13'}
                    </p>
                </div>
                <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Next Assessment</div>
                    <div style={{ fontWeight: 600, color: '#4F46E5' }}>Nov 15, 2025</div>
                </div>
            </div>

            {/* Score Cards */}
            <div className={styles.scoreGrid}>
                <div className={styles.scoreCard}>
                    <div style={{ color: '#8B5CF6', marginBottom: '0.5rem' }}><Brain size={32} /></div>
                    <div className={styles.scoreValue}>125</div>
                    <div className={styles.scoreLabel}>IQ Score</div>
                    <div style={{ fontSize: '0.875rem', color: '#10B981', fontWeight: 500 }}>High Average</div>
                </div>
                <div className={styles.scoreCard}>
                    <div style={{ color: '#EC4899', marginBottom: '0.5rem' }}><Heart size={32} /></div>
                    <div className={styles.scoreValue}>110</div>
                    <div className={styles.scoreLabel}>EQ Score</div>
                    <div style={{ fontSize: '0.875rem', color: '#10B981', fontWeight: 500 }}>Above Average</div>
                </div>
                <div className={styles.scoreCard}>
                    <div style={{ color: '#F59E0B', marginBottom: '0.5rem' }}><Activity size={32} /></div>
                    <div className={styles.scoreValue}>88%</div>
                    <div className={styles.scoreLabel}>Wellbeing</div>
                    <div style={{ fontSize: '0.875rem', color: '#10B981', fontWeight: 500 }}>Stable</div>
                </div>
                <div className={styles.scoreCard}>
                    <div style={{ color: '#3B82F6', marginBottom: '0.5rem' }}><CheckCircle size={32} /></div>
                    <div className={styles.scoreValue}>92</div>
                    <div className={styles.scoreLabel}>Focus Score</div>
                    <div style={{ fontSize: '0.875rem', color: '#3B82F6', fontWeight: 500 }}>Improving</div>
                </div>
            </div>

            <div className={styles.gridTwoCol}>

                {/* AI Psychometric Overview */}
                <div className={styles.overviewCard}>
                    <div className={styles.cardHeader}>
                        <div className={styles.cardIcon} style={{ background: '#EEF2FF', color: '#6366F1' }}>
                            <Sparkles size={24} />
                        </div>
                        <div style={{ flex: 1 }}>
                            <h3 className={styles.cardTitle}>Psychometric Overview</h3>
                            <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>AI Analysis based on recent inputs</div>
                        </div>
                        <div className={styles.aiBadge}>
                            <Sparkles size={12} /> AI Insight
                        </div>
                    </div>

                    <div className={styles.reportText}>
                        <p style={{ marginBottom: '1rem' }}>
                            Alex demonstrates strong <strong>analytical reasoning</strong> and pattern recognition skills (IQ 125).
                            Recent assessments indicate a high level of empathy, though there are signs of mild
                            social anxiety in group settings. The EQ score (110) suggests good emotional regulation overall.
                        </p>
                    </div>

                    <div className={styles.recommendationList}>
                        <div className={styles.recommendationItem}>
                            <CheckCircle size={20} color="#10B981" style={{ marginTop: '2px' }} />
                            <div>
                                <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>Encourage Group Activities</div>
                                <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>To build confidence in social settings.</div>
                            </div>
                        </div>
                        <div className={styles.recommendationItem}>
                            <CheckCircle size={20} color="#10B981" style={{ marginTop: '2px' }} />
                            <div>
                                <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>Mindfulness Practice</div>
                                <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Continue daily 5-min breathing exercises.</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Psychiatrist Overview */}
                <div className={styles.overviewCard}>
                    <div className={styles.cardHeader}>
                        <div className={styles.cardIcon} style={{ background: '#FEF3C7', color: '#D97706' }}>
                            <Stethoscope size={24} />
                        </div>
                        <div>
                            <h3 className={styles.cardTitle}>Specialist Review</h3>
                            <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Dr. Emily Chen, Child Psychologist</div>
                        </div>
                    </div>

                    <div className={styles.reportText}>
                        <p style={{ marginBottom: '1rem' }}>
                            I have reviewed Alex's recent assessment data. The results are consistent with a generally happy and
                            well-adjusted child. The slight dip in "Social Comfort" is normal for this age group.
                        </p>
                    </div>

                    <div className={styles.doctorNote}>
                        <strong>Dr. Chen's Note:</strong><br />
                        "Alex is doing great! I recommend focusing on positive reinforcement for the next few weeks.
                        Let's schedule a follow-up if the anxiety markers persist for more than a month.
                        No immediate intervention is required."
                    </div>

                    <div style={{ marginTop: '1.5rem', padding: '1rem', background: '#FEF2F2', borderRadius: '12px', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                        <AlertCircle size={20} color="#EF4444" />
                        <div style={{ fontSize: '0.875rem', color: '#991B1B' }}>
                            <strong>Action Item:</strong> Review the <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>"Social Confidence"</span> module with Alex this weekend.
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
