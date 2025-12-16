"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { GraduationCap, ArrowLeft, User, Hash, School, Lock } from 'lucide-react';
import styles from '../studentAuth.module.css';

export default function StudentLogin() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate login
        setTimeout(() => {
            setIsLoading(false);
            router.push('/student');
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
                            color: '#4F46E5',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 1.5rem auto'
                        }}>
                            <GraduationCap size={24} />
                        </div>
                        <h1 className={styles.title}>Student Login</h1>
                        <p className={styles.subtitle}>Welcome back! Let's get you signed in.</p>
                    </div>

                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div style={{ position: 'relative' }}>
                            <User size={18} style={{ position: 'absolute', top: '50%', left: '1rem', transform: 'translateY(-50%)', color: '#94A3B8' }} />
                            <input
                                type="text"
                                className={styles.input}
                                placeholder="First Name"
                                style={{ paddingLeft: '3rem' }}
                                required
                            />
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <div style={{ position: 'relative' }}>
                                <Hash size={18} style={{ position: 'absolute', top: '50%', left: '1rem', transform: 'translateY(-50%)', color: '#94A3B8' }} />
                                <input
                                    type="text"
                                    className={styles.input}
                                    placeholder="Roll No"
                                    style={{ paddingLeft: '3rem' }}
                                    required
                                />
                            </div>
                            <div style={{ position: 'relative' }}>
                                <School size={18} style={{ position: 'absolute', top: '50%', left: '1rem', transform: 'translateY(-50%)', color: '#94A3B8' }} />
                                <input
                                    type="text"
                                    className={styles.input}
                                    placeholder="Class"
                                    style={{ paddingLeft: '3rem' }}
                                    required
                                />
                            </div>
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

                        <button
                            type="submit"
                            className={styles.submitButton}
                            disabled={isLoading}
                        >
                            {isLoading ? 'Signing In...' : 'Sign In'}
                        </button>
                    </form>

                    <Link href="/auth/student/signup" className={styles.link}>
                        Don't have an account? <span style={{ fontWeight: 600 }}>Create one</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
