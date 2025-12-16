"use client";
import React, { useState } from 'react';
import {
    Users,
    Calendar,
    CheckCircle,
    XCircle,
    School,
    BrainCircuit,
    Activity,
    Clock,
    Sparkles,
    ChevronDown,
    Building,
    X,
    FileText,
    MessageCircle,
    ClipboardList,
    AlertCircle
} from 'lucide-react';
import styles from './counsellor.module.css';

// Mock Data
const schools = [
    { id: 'all', name: 'All Campuses' },
    { id: 'st_marys', name: "St. Mary's International" },
    { id: 'city_high', name: "City High School" },
    { id: 'green_valley', name: "Green Valley Academy" }
];

const mockStats = {
    'all': { students: 3450, teachers: 142, cases: 28, sentiment: '94%' },
    'st_marys': { students: 1250, teachers: 48, cases: 12, sentiment: '98%' },
    'city_high': { students: 1100, teachers: 50, cases: 10, sentiment: '91%' },
    'green_valley': { students: 1100, teachers: 44, cases: 6, sentiment: '95%' }
};

const bookingsData = [
    { id: 1, schoolId: 'st_marys', student: "Alex M.", grade: "10th", date: "Today, 2:00 PM", reason: "Exam Anxiety" },
    { id: 2, schoolId: 'city_high', student: "Jordan T.", grade: "9th", date: "Tomorrow, 10:00 AM", reason: "Peer Conflict" },
    { id: 3, schoolId: 'green_valley', student: "Casey R.", grade: "11th", date: "Tomorrow, 2:00 PM", reason: "Academic Stress" }
];

const activeCases = [
    {
        id: 1,
        schoolId: 'st_marys',
        name: "Sarah Jenkins",
        grade: "11th - B",
        risk: "Moderate",
        lastSession: "2 days ago",
        insight: "Sarah is showing increased resilience. Recommendation: Continue CBT exercises focusing on public speaking.",
        trend: "Improving",
        // Extended Details for Modal
        attendance: "92%",
        academicTrend: "Stable (B+ Average)",
        teacherObservation: "Participates well in art class but withdraws during math. Seems anxious about upcoming finals.",
        peerInteraction: "Has a small close-knit group. Avoids large crowds.",
        aiRecommendation: "Schedule a check-in regarding Math anxiety. Suggest relaxation techniques before exams."
    },
    {
        id: 2,
        schoolId: 'st_marys',
        name: "Mike Ross",
        grade: "12th - A",
        risk: "High",
        lastSession: "Yesterday",
        insight: "Sudden drop in mood reported. AI Analysis suggests potential burnout. Immediate follow-up recommended.",
        trend: "Declining",
        attendance: "85% (Dropped recently)",
        academicTrend: "Declining (Was A student, now C)",
        teacherObservation: "Mike has been sleeping in class. He seems irritable when approached.",
        peerInteraction: "Withdrawn. Stopped attending football practice.",
        aiRecommendation: "Urgent: Assess for burnout/depression. Contact parents/guardians. Recommend reduced workload temporarily."
    },
    {
        id: 3,
        schoolId: 'city_high',
        name: "Emily Blunt",
        grade: "10th - C",
        risk: "Low",
        lastSession: "1 week ago",
        insight: "Stable progress. Maintenance phase.",
        trend: "Stable",
        attendance: "98%",
        academicTrend: "Improving (A- Average)",
        teacherObservation: "Very helpful in class. Seems happy.",
        peerInteraction: "Social butterfly. Organizing class events.",
        aiRecommendation: "Continue monthly maintenance sessions. Positive reinforcement."
    },
    {
        id: 4,
        schoolId: 'green_valley',
        name: "Jason Bourne",
        grade: "9th - A",
        risk: "Moderate",
        lastSession: "3 days ago",
        insight: "Issues with focusing in class. Teacher reports disruptive behavior.",
        trend: "Improving",
        attendance: "90%",
        academicTrend: "Variable",
        teacherObservation: "cannot sit still. Disrupts others often.",
        peerInteraction: "Often in conflicts during recess.",
        aiRecommendation: "Screen for ADHD. Implement classroom behavioral plan."
    }
];

export default function CounsellorDashboard() {
    const [selectedSchool, setSelectedSchool] = useState('all');
    const [bookings, setBookings] = useState(bookingsData);
    const [selectedStudent, setSelectedStudent] = useState<any>(null);

    // Derived state based on selection
    const currentStats = mockStats[selectedSchool as keyof typeof mockStats];
    const filteredCases = selectedSchool === 'all'
        ? activeCases
        : activeCases.filter(c => c.schoolId === selectedSchool);

    // In a real app, bookings would also be filtered, but often counselors want to see ALL bookings
    // We can filter them too for consistency
    const filteredBookings = selectedSchool === 'all'
        ? bookings
        : bookings.filter(b => b.schoolId === selectedSchool);


    const handleApprove = (id: number) => {
        setBookings(prev => prev.filter(b => b.id !== id));
        alert("Booking Approved!");
    };

    const handleReject = (id: number) => {
        setBookings(prev => prev.filter(b => b.id !== id));
    };

    return (
        <div style={{ padding: '0 0 2rem 0' }}>
            {/* Modal */}
            {selectedStudent && (
                <div className={styles.modalOverlay} onClick={() => setSelectedStudent(null)}>
                    <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                        <div className={styles.modalHeader}>
                            <div>
                                <h2 style={{ fontSize: '1.5rem', fontWeight: 800, margin: 0 }}>{selectedStudent.name}</h2>
                                <p style={{ color: '#64748B', margin: '0.25rem 0 0 0' }}>{selectedStudent.grade} • {schools.find(s => s.id === selectedStudent.schoolId)?.name}</p>
                            </div>
                            <button className={styles.closeButton} onClick={() => setSelectedStudent(null)}>
                                <X size={20} />
                            </button>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                            <span className={styles.riskBadge} style={{
                                backgroundColor: selectedStudent.risk === 'High' ? '#FEF2F2' : selectedStudent.risk === 'Moderate' ? '#FFFBEB' : '#ECFDF5',
                                color: selectedStudent.risk === 'High' ? '#EF4444' : selectedStudent.risk === 'Moderate' ? '#D97706' : '#10B981',
                                fontSize: '0.9rem',
                                padding: '0.35rem 1rem'
                            }}>
                                {selectedStudent.risk} Risk Profile
                            </span>
                            <span style={{
                                background: '#F1F5F9', color: '#475569', fontSize: '0.9rem', padding: '0.35rem 1rem', borderRadius: '99px', fontWeight: 600
                            }}>
                                Trend: {selectedStudent.trend}
                            </span>
                        </div>

                        <div className={styles.detailGrid}>
                            <div className={styles.detailBox}>
                                <div className={styles.detailLabel}>Attendance</div>
                                <div className={styles.detailValue}>{selectedStudent.attendance}</div>
                            </div>
                            <div className={styles.detailBox}>
                                <div className={styles.detailLabel}>Academic Performance</div>
                                <div className={styles.detailValue}>{selectedStudent.academicTrend}</div>
                            </div>
                        </div>

                        <div className={styles.sectionBlock}>
                            <div className={styles.subheader}>
                                <FileText size={18} className="text-blue-500" />
                                Teacher Observations
                            </div>
                            <div style={{ fontSize: '0.95rem', lineHeight: 1.6, color: '#334155', background: '#F8FAFC', padding: '1rem', borderRadius: '12px', borderLeft: '4px solid #3B82F6' }}>
                                "{selectedStudent.teacherObservation}"
                            </div>
                        </div>

                        <div className={styles.sectionBlock}>
                            <div className={styles.subheader}>
                                <Users size={18} className="text-green-500" />
                                Peer Interaction
                            </div>
                            <div style={{ fontSize: '0.95rem', lineHeight: 1.6, color: '#334155' }}>
                                {selectedStudent.peerInteraction}
                            </div>
                        </div>

                        <div className={styles.sectionBlock}>
                            <div className={styles.subheader}>
                                <Sparkles size={18} className="text-purple-600" />
                                AI Recommended Actions
                            </div>
                            <div style={{ background: '#F3E8FF', padding: '1rem', borderRadius: '12px', color: '#6B21A8', fontSize: '0.95rem', fontWeight: 500 }}>
                                {selectedStudent.aiRecommendation}
                            </div>
                        </div>

                        <div className={styles.actionButtons}>
                            <button className={styles.primaryAction} onClick={() => alert(`Scheduled session with ${selectedStudent.name}`)}>
                                <Calendar size={18} /> Schedule Session
                            </button>
                            <button className={styles.secondaryAction} onClick={() => alert(`Sent message to ${selectedStudent.name}'s parents`)}>
                                <MessageCircle size={18} /> Contact Parents
                            </button>
                            <button className={styles.secondaryAction} onClick={() => alert(`Assigned module to ${selectedStudent.name}`)}>
                                <ClipboardList size={18} /> Assign Module
                            </button>
                        </div>

                    </div>
                </div>
            )}

            <div className={styles.header}>
                <div>
                    <h1 className={styles.title}>Welcome back, Dr. Anderson</h1>
                    <p className={styles.subtitle}>Clinical Psychologist • License #88291</p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    {/* School Switcher */}
                    <div style={{ position: 'relative' }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            background: 'white',
                            padding: '0.5rem 1rem',
                            borderRadius: '12px',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                            cursor: 'pointer',
                            border: '1px solid #E2E8F0'
                        }}>
                            <Building size={16} color="#64748B" />
                            <select
                                value={selectedSchool}
                                onChange={(e) => setSelectedSchool(e.target.value)}
                                style={{
                                    border: 'none',
                                    outline: 'none',
                                    fontSize: '0.9rem',
                                    fontWeight: 600,
                                    color: '#1E293B',
                                    background: 'transparent',
                                    paddingRight: '1rem',
                                    cursor: 'pointer'
                                }}
                            >
                                {schools.map(school => (
                                    <option key={school.id} value={school.id}>{school.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '0.9rem', color: '#64748B' }}>Unread Notifications</div>
                        <div style={{ fontWeight: 700, color: '#EF4444', fontSize: '1.5rem' }}>3</div>
                    </div>
                </div>
            </div>

            {/* Top Grid: Profile/School & Bookings */}
            <div className={styles.mainGrid}>
                {/* Left Column */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                    {/* Assigned School Data */}
                    <div className={styles.card}>
                        <div className={styles.sectionTitle} style={{ justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                <School size={20} className="text-indigo-600" />
                                <span>Overview: {schools.find(s => s.id === selectedSchool)?.name}</span>
                            </div>
                        </div>
                        <div className={styles.schoolStats}>
                            <div className={styles.statBox}>
                                <div className={styles.statValue}>{currentStats.students}</div>
                                <div className={styles.statLabel}>Total Students</div>
                            </div>
                            <div className={styles.statBox}>
                                <div className={styles.statValue}>{currentStats.teachers}</div>
                                <div className={styles.statLabel}>Teachers</div>
                            </div>
                            <div className={styles.statBox}>
                                <div className={styles.statValue} style={{ color: '#F59E0B' }}>{currentStats.cases}</div>
                                <div className={styles.statLabel}>Active Cases</div>
                            </div>
                            <div className={styles.statBox}>
                                <div className={styles.statValue} style={{ color: '#10B981' }}>{currentStats.sentiment}</div>
                                <div className={styles.statLabel}>Avg Sentiment</div>
                            </div>
                        </div>
                    </div>

                    {/* Active Counseling Cases */}
                    <div>
                        <div className={styles.sectionTitle}>
                            <Activity size={20} />
                            Active Cases & Insights
                        </div>
                        {filteredCases.length === 0 ? (
                            <div style={{ padding: '2rem', textAlign: 'center', color: '#94A3B8', background: 'white', borderRadius: '24px' }}>No active cases found for this campus.</div>
                        ) : (
                            <div className={styles.activeCounselingList}>
                                {filteredCases.map(student => (
                                    <div
                                        key={student.id}
                                        className={styles.studentCard}
                                        onClick={() => setSelectedStudent(student)}
                                    >
                                        <div className={styles.studentHeader}>
                                            <div>
                                                <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>{student.name}</div>
                                                <div style={{ fontSize: '0.85rem', color: '#64748B' }}>
                                                    {student.grade}
                                                    {selectedSchool === 'all' && <span style={{ marginLeft: '0.5rem', fontSize: '0.7rem', background: '#F1F5F9', padding: '2px 6px', borderRadius: '4px' }}>{schools.find(s => s.id === student.schoolId)?.name}</span>}
                                                </div>
                                            </div>
                                            <span className={styles.riskBadge} style={{
                                                backgroundColor: student.risk === 'High' ? '#FEF2F2' : student.risk === 'Moderate' ? '#FFFBEB' : '#ECFDF5',
                                                color: student.risk === 'High' ? '#EF4444' : student.risk === 'Moderate' ? '#D97706' : '#10B981'
                                            }}>
                                                {student.risk} Risk
                                            </span>
                                        </div>

                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#64748B', marginBottom: '1rem' }}>
                                            <Clock size={14} /> Last session: {student.lastSession}
                                        </div>

                                        <div className={styles.aiInsight}>
                                            <Sparkles size={16} className={styles.aiIcon} />
                                            <div>
                                                <strong style={{ color: '#7C3AED', display: 'block', marginBottom: '0.25rem' }}>AI Insight</strong>
                                                {student.insight}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                </div>

                {/* Right Column: Bookings */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div className={styles.card} style={{ height: 'fit-content' }}>
                        <div className={styles.sectionTitle}>
                            <Calendar size={20} />
                            Booking Requests
                        </div>
                        {filteredBookings.length === 0 ? (
                            <div style={{ padding: '2rem', textAlign: 'center', color: '#94A3B8' }}>No pending requests</div>
                        ) : (
                            <div className={styles.bookingList}>
                                {filteredBookings.map(booking => (
                                    <div key={booking.id} className={styles.bookingItem}>
                                        <div>
                                            <div style={{ fontWeight: 600 }}>{booking.student}</div>
                                            <div style={{ fontSize: '0.8rem', color: '#64748B' }}>
                                                {booking.reason} • {booking.date}
                                                <div style={{ marginTop: '2px', fontStyle: 'italic', fontSize: '0.75rem', opacity: 0.8 }}>
                                                    {schools.find(s => s.id === booking.schoolId)?.name}
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.buttonGroup}>
                                            <button className={styles.btnApprove} onClick={() => handleApprove(booking.id)} title="Approve">
                                                <CheckCircle size={16} />
                                            </button>
                                            <button className={styles.btnReject} onClick={() => handleReject(booking.id)} title="Reject">
                                                <XCircle size={16} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Quick Profile Card (Self) */}
                    <div className={`${styles.card} ${styles.profileCard}`}>
                        <div className={styles.profileAvatar}>
                            DA
                        </div>
                        <div className={styles.profileInfo}>
                            <h2>Dr. Anderson</h2>
                            <p>Clinical Psychologist</p>
                            <div style={{ marginTop: '0.5rem', fontSize: '0.8rem', background: 'rgba(255,255,255,0.2)', padding: '0.25rem 0.75rem', borderRadius: '99px', width: 'fit-content' }}>
                                Online • Available
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
