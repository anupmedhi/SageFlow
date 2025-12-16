"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Search, Filter, BookOpen, Users, AlertCircle, Sparkles, TrendingUp, ChevronRight, Brain, X, MessageCircle, FileText, Mail } from 'lucide-react';
import styles from './teacher.module.css';

// Mock Data
interface Student {
    id: number;
    name: string;
    class: string;
    mood: number;
    engagement: string;
    risk: string;
}

const STUDENTS: Student[] = [
    { id: 1, name: "Alex Miller", class: "5A", mood: 8.5, engagement: "High", risk: "Low" },
    { id: 2, name: "Sarah Jones", class: "5A", mood: 6.2, engagement: "Medium", risk: "Medium" },
    { id: 3, name: "Mike Ross", class: "5B", mood: 9.0, engagement: "High", risk: "Low" },
    { id: 4, name: "Emma Watson", class: "5A", mood: 4.5, engagement: "Low", risk: "High" },
    { id: 5, name: "David Kim", class: "5B", mood: 7.8, engagement: "High", risk: "Low" },
    { id: 6, name: "Lisa Park", class: "5A", mood: 5.5, engagement: "Medium", risk: "Medium" },
];

export default function TeacherDashboard() {
    const [searchTerm, setSearchTerm] = useState("");
    const [classFilter, setClassFilter] = useState("All");
    const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

    const filteredStudents = STUDENTS.filter(student => {
        const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesClass = classFilter === "All" || student.class === classFilter;
        return matchesSearch && matchesClass;
    });

    return (
        <div>
            <div className={styles.header}>
                <div>
                    <h1 className={styles.title}>Teacher Dashboard</h1>
                    <p className={styles.subtitle}>Overview for Mr. Robert Smith</p>
                </div>
                <Button style={{ background: '#EF4444', color: 'white', gap: '0.5rem' }}>
                    <Sparkles size={18} /> Generate Class Report
                </Button>
            </div>

            {/* Stats Overview */}
            <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                    <div className={styles.statIcon} style={{ background: '#FEE2E2', color: '#EF4444' }}>
                        <Users size={28} />
                    </div>
                    <div>
                        <div style={{ fontSize: '2rem', fontWeight: 800, lineHeight: 1 }}>42</div>
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Total Students</div>
                    </div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statIcon} style={{ background: '#FEF3C7', color: '#D97706' }}>
                        <AlertCircle size={28} />
                    </div>
                    <div>
                        <div style={{ fontSize: '2rem', fontWeight: 800, lineHeight: 1 }}>3</div>
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Needs Attention</div>
                    </div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statIcon} style={{ background: '#DCFCE7', color: '#166534' }}>
                        <TrendingUp size={28} />
                    </div>
                    <div>
                        <div style={{ fontSize: '2rem', fontWeight: 800, lineHeight: 1 }}>7.8</div>
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Avg Class Mood</div>
                    </div>
                </div>
            </div>

            <div className={styles.gridTwoCol}>

                {/* Student List Section */}
                <div className={styles.tableCard}>
                    <div className={styles.tableHeader}>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Student Roster</h3>
                        <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                            Showing {filteredStudents.length} students
                        </div>
                    </div>

                    <div className={styles.controlsSection} style={{ marginBottom: '1.5rem' }}>
                        <div className={styles.searchBar}>
                            <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8' }} />
                            <input
                                type="text"
                                className={styles.searchInput}
                                placeholder="Search student name..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <select
                            className={styles.filterSelect}
                            value={classFilter}
                            onChange={(e) => setClassFilter(e.target.value)}
                        >
                            <option value="All">All Classes</option>
                            <option value="5A">Class 5A</option>
                            <option value="5B">Class 5B</option>
                        </select>
                    </div>

                    <div style={{ overflowX: 'auto' }}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th className={styles.th}>Name</th>
                                    <th className={styles.th}>Class</th>
                                    <th className={styles.th}>Mood Score</th>
                                    <th className={styles.th}>Engagement</th>
                                    <th className={styles.th}>Risk Level</th>
                                    <th className={styles.th}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredStudents.map(student => (
                                    <tr
                                        key={student.id}
                                        className={styles.tr}
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => setSelectedStudent(student)}
                                    >
                                        <td className={styles.td} style={{ fontWeight: 600 }}>{student.name}</td>
                                        <td className={styles.td}>{student.class}</td>
                                        <td className={styles.td}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                <div style={{
                                                    width: '32px', height: '6px', borderRadius: '4px', background: '#E2E8F0', overflow: 'hidden'
                                                }}>
                                                    <div style={{
                                                        width: `${student.mood * 10}%`, height: '100%',
                                                        background: student.mood > 7 ? '#10B981' : student.mood > 4 ? '#F59E0B' : '#EF4444'
                                                    }} />
                                                </div>
                                                {student.mood}
                                            </div>
                                        </td>
                                        <td className={styles.td}>{student.engagement}</td>
                                        <td className={styles.td}>
                                            <span className={`${styles.statusBadge} ${student.risk === 'High' ? styles.statusLow :
                                                student.risk === 'Medium' ? styles.statusMed :
                                                    styles.statusHigh
                                                }`}>
                                                {student.risk}
                                            </span>
                                        </td>
                                        <td className={styles.td}>
                                            <Button variant="ghost" size="sm" style={{ padding: '0.25rem' }}>
                                                <ChevronRight size={18} />
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* AI Insights & Recommendations */}
                <div className={styles.aiSection}>

                    <div className={styles.insightCard}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                            <Sparkles size={20} color="#EF4444" />
                            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#991B1B' }}>Class Insights (AI)</h3>
                        </div>
                        <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: '#7F1D1D', marginBottom: '1rem' }}>
                            <strong>Class 5A</strong> is showing lower energy levels on Monday mornings.
                            Engagement drops by 15% during Math period. Recommend starting with a quick energizer.
                        </p>
                    </div>

                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginTop: '0.5rem' }}>Recommended Activities</h3>

                    {[
                        { title: "Group Breathing Exercise", duration: "5 min", type: "Calming", color: "#EC4899" },
                        { title: "Rapid Fire Quiz", duration: "10 min", type: "Energy", color: "#F59E0B" },
                        { title: "Gratitude Circle", duration: "15 min", type: "Bonding", color: "#10B981" }
                    ].map((activity, i) => (
                        <div key={i} className={styles.activityCard}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                <div style={{ fontWeight: 600 }}>{activity.title}</div>
                                <div style={{ fontSize: '0.75rem', padding: '2px 8px', borderRadius: '12px', background: '#F1F5F9', color: '#64748B' }}>
                                    {activity.duration}
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                                <Brain size={14} color={activity.color} />
                                <span>{activity.type} Boost</span>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

            {/* STUDENT DETAIL MODAL */}
            {selectedStudent && (
                <div className={styles.modalOverlay} onClick={() => setSelectedStudent(null)}>
                    <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                        <div className={styles.modalHeader}>
                            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                                <div style={{
                                    width: '64px', height: '64px', background: '#E2E8F0', borderRadius: '50%',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '1.5rem', fontWeight: 700, color: '#475569'
                                }}>
                                    {selectedStudent.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div>
                                    <h2 style={{ fontSize: '1.75rem', marginBottom: '0.25rem' }}>{selectedStudent.name}</h2>
                                    <p style={{ color: 'var(--text-muted)' }}>Class {selectedStudent.class} • ID: ST-{1000 + selectedStudent.id}</p>
                                </div>
                            </div>
                            <button className={styles.closeButton} onClick={() => setSelectedStudent(null)}>
                                <X size={20} />
                            </button>
                        </div>

                        <div className={styles.detailGrid}>
                            <div className={styles.detailCard}>
                                <div style={{ color: '#00B894', fontWeight: 700, fontSize: '1.5rem', marginBottom: '0.25rem' }}>{selectedStudent.mood}</div>
                                <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Avg Mood Score</div>
                            </div>
                            <div className={styles.detailCard}>
                                <div style={{ color: '#6C5CE7', fontWeight: 700, fontSize: '1.5rem', marginBottom: '0.25rem' }}>82%</div>
                                <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Focus Score</div>
                            </div>
                            <div className={styles.detailCard}>
                                <div style={{ color: '#F59E0B', fontWeight: 700, fontSize: '1.5rem', marginBottom: '0.25rem' }}>Completed</div>
                                <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Recent Assessment</div>
                            </div>
                        </div>

                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Sparkles size={20} color="#8B5CF6" /> AI Behavioral Insight
                        </h3>
                        <p style={{ lineHeight: 1.6, color: 'var(--text-main)', marginBottom: '2rem' }}>
                            {selectedStudent.name} has shown consistent improvement in engagement over the last two weeks.
                            However, mood logs indicate slight anxiety before Math tests.
                            {selectedStudent.risk === 'High' && <span style={{ color: '#EF4444', fontWeight: 600 }}> Flagged for immediate teacher review due to consecutive low mood scores.</span>}
                        </p>

                        <div className={styles.actionSection}>
                            <div className={styles.actionTitle}>
                                <AlertCircle size={20} /> Recommended Actions
                            </div>
                            <p style={{ fontSize: '0.9rem', color: '#7F1D1D' }}>Based on recent activity, here are suggested interactions:</p>

                            <div className={styles.actionButtonList}>
                                <Button style={{ background: 'white', color: '#1E293B', border: '1px solid #E2E8F0', gap: '0.5rem' }}>
                                    <Mail size={16} /> Email Parent
                                </Button>
                                <Button style={{ background: 'white', color: '#1E293B', border: '1px solid #E2E8F0', gap: '0.5rem' }}>
                                    <MessageCircle size={16} /> Schedule 1:1
                                </Button>
                                <Button style={{ background: '#EF4444', color: 'white', gap: '0.5rem', marginLeft: 'auto' }}>
                                    <FileText size={16} /> View Full Report
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
}
