"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
    ArrowLeft,
    Stethoscope,
    Mail,
    Lock,
    User,
    FileText,
    Award,
    Briefcase
} from 'lucide-react';
import styles from '../counsellorAuth.module.css';

export default function CounsellorSignup() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate signup delay
        setTimeout(() => {
            setIsLoading(false);
            router.push('/dashboard/counsellor');
        }, 1500);
    };

    return (
        <div className={styles.container}>
            <div className={styles.mainCard} style={{ maxWidth: '600px' }}>

                <Link href="/auth/counsellor/login" className={styles.backLink}>
                    <ArrowLeft size={18} /> Back to Login
                </Link>

                <div className={styles.leftSection}>
                    <div className={styles.header}>
                        <div style={{
                            width: '48px',
                            height: '48px',
                            background: '#EEF2FF',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 1.5rem auto',
                            color: '#4F46E5'
                        }}>
                            <Stethoscope size={24} />
                        </div>
                        <h1 className={styles.title}>Join as a Specialist</h1>
                        <p className={styles.subtitle}>Registration for Psychologists & Psychiatrists</p>
                    </div>

                    <form onSubmit={handleSignup} className={styles.form}>
                        {/* Name Field */}
                        <div style={{ position: 'relative' }}>
                            <User size={18} style={{ position: 'absolute', top: '50%', left: '1rem', transform: 'translateY(-50%)', color: '#94A3B8' }} />
                            <input
                                type="text"
                                className={styles.input}
                                placeholder="Full Name (e.g. Dr. Sarah Smith)"
                                style={{ paddingLeft: '3rem' }}
                                required
                            />
                        </div>

                        {/* License & Specialization Row */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <div style={{ position: 'relative' }}>
                                <FileText size={18} style={{ position: 'absolute', top: '50%', left: '1rem', transform: 'translateY(-50%)', color: '#94A3B8' }} />
                                <input
                                    type="text"
                                    className={styles.input}
                                    placeholder="License Number"
                                    style={{ paddingLeft: '3rem' }}
                                    required
                                />
                            </div>
                            <div style={{ position: 'relative' }}>
                                <Award size={18} style={{ position: 'absolute', top: '50%', left: '1rem', transform: 'translateY(-50%)', color: '#94A3B8' }} />
                                <select
                                    className={styles.input}
                                    style={{ paddingLeft: '3rem', appearance: 'none', cursor: 'pointer' }}
                                    required
                                >
                                    <option value="" disabled selected>Specialization</option>
                                    <option value="clinical_psychologist">Clinical Psychologist</option>
                                    <option value="psychiatrist">Psychiatrist</option>
                                    <option value="counsellor">School Counsellor</option>
                                    <option value="therapist">Child Therapist</option>
                                </select>
                            </div>
                        </div>

                        {/* Experience */}
                        <div style={{ position: 'relative' }}>
                            <Briefcase size={18} style={{ position: 'absolute', top: '50%', left: '1rem', transform: 'translateY(-50%)', color: '#94A3B8' }} />
                            <input
                                type="text"
                                className={styles.input}
                                placeholder="Years of Experience & Current Affiliation"
                                style={{ paddingLeft: '3rem' }}
                            />
                        </div>

                        {/* Email */}
                        <div style={{ position: 'relative' }}>
                            <Mail size={18} style={{ position: 'absolute', top: '50%', left: '1rem', transform: 'translateY(-50%)', color: '#94A3B8' }} />
                            <input
                                type="email"
                                className={styles.input}
                                placeholder="Work Email Address"
                                style={{ paddingLeft: '3rem' }}
                                required
                            />
                        </div>

                        {/* Password */}
                        <div style={{ position: 'relative' }}>
                            <Lock size={18} style={{ position: 'absolute', top: '50%', left: '1rem', transform: 'translateY(-50%)', color: '#94A3B8' }} />
                            <input
                                type="password"
                                className={styles.input}
                                placeholder="Create Secure Password"
                                style={{ paddingLeft: '3rem' }}
                                required
                            />
                        </div>

                        <div style={{ display: 'flex', alignItems: 'start', gap: '0.5rem', fontSize: '0.85rem', color: '#64748B', marginTop: '0.5rem' }}>
                            <input type="checkbox" style={{ marginTop: '0.2rem' }} required />
                            <span>I certify that I am a licensed mental health professional and agree to the Terms of Service.</span>
                        </div>

                        <button type="submit" className={styles.submitButton} disabled={isLoading}>
                            {isLoading ? 'Verifying Credentials...' : 'Register as Specialist'}
                        </button>
                    </form>

                </div>
            </div>
        </div>
    );
}
