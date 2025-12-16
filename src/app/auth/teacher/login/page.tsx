"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { BookOpen, ArrowLeft, Mail, Lock, User, UserPlus } from 'lucide-react';
import styles from '../teacherAuth.module.css';

export default function TeacherLogin() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate login
        setTimeout(() => {
            setIsLoading(false);
            router.push('/dashboard/teacher');
        }, 1000);
    };

    return (
        <div className={styles.container}>
            <div className={styles.mainCard}>

                <Link href="/" className={styles.backLink}>
                    <ArrowLeft size={18} /> Back
                </Link>

                <div className={styles.leftSection}>
                    <div className={styles.header}>
                        <div style={{
                            width: '48px',
                            height: '48px',
                            background: '#EEF2FF',
                            color: '#4F46E5', /* Indigo to match app */
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 1.5rem auto'
                        }}>
                            <BookOpen size={24} />
                        </div>
                        <h1 className={styles.title}>Welcome Board</h1>
                        <p className={styles.subtitle}>Faculty & Staff Portal</p>
                    </div>

                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div style={{ position: 'relative' }}>
                            <User size={18} style={{ position: 'absolute', top: '50%', left: '1rem', transform: 'translateY(-50%)', color: '#94A3B8' }} />
                            <input
                                type="text"
                                className={styles.input}
                                placeholder="Employee ID"
                                style={{ paddingLeft: '3rem' }}
                                required
                            />
                        </div>

                        <div style={{ position: 'relative' }}>
                            <Mail size={18} style={{ position: 'absolute', top: '50%', left: '1rem', transform: 'translateY(-50%)', color: '#94A3B8' }} />
                            <input
                                type="email"
                                className={styles.input}
                                placeholder="Email Address"
                                style={{ paddingLeft: '3rem' }}
                                required
                            />
                        </div>

                        <div style={{ position: 'relative' }}>
                            <Lock size={18} style={{ position: 'absolute', top: '50%', left: '1rem', transform: 'translateY(-50%)', color: '#94A3B8' }} />
                            <input
                                type="password"
                                className={styles.input}
                                placeholder="Password"
                                style={{ paddingLeft: '3rem' }}
                                required
                            />
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', color: '#64748B' }}>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                                <input type="checkbox" style={{ borderRadius: '4px' }} />
                                Remember me
                            </label>
                            <span style={{ cursor: 'pointer', color: '#4F46E5' }}>Forgot password?</span>
                        </div>

                        <button
                            type="submit"
                            className={styles.submitButton}
                            disabled={isLoading}
                        >
                            {isLoading ? 'Signing In...' : 'Sign In'}
                        </button>
                    </form>

                    <div className={styles.divider}>New Faculty?</div>

                    <button type="button" className={styles.submitButton} style={{ background: '#EEF2FF', color: '#4F46E5', border: '1px solid #E0E7FF', marginTop: 0 }}>
                        <UserPlus size={18} />
                        Create Faculty Account
                    </button>
                </div>
            </div>
        </div>
    );
}
