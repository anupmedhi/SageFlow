"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { GraduationCap, ArrowLeft } from 'lucide-react';
import styles from '../studentAuth.module.css';

export default function StudentSignup() {
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate signup
        router.push('/student');
    };

    return (
        <div className={styles.container}>
            <div className={styles.blob1} />
            <div className={styles.blob2} />

            <Link href="/auth/student/login" style={{ position: 'absolute', top: '2rem', left: '2rem', zIndex: 10 }}>
                <Button variant="ghost" size="sm" style={{ gap: '0.5rem' }}>
                    <ArrowLeft size={16} />
                    Back to Login
                </Button>
            </Link>

            <div className={styles.card}>
                <div className={styles.header}>
                    <div style={{
                        width: '48px',
                        height: '48px',
                        background: '#E0E7FF',
                        color: '#4F46E5',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 1.5rem auto'
                    }}>
                        <GraduationCap size={24} />
                    </div>
                    <h1 className={styles.title}>Create Account</h1>
                    <p className={styles.subtitle}>Join SageFlow to start your journey.</p>
                </div>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Full Name</label>
                        <input
                            type="text"
                            className={styles.input}
                            placeholder="e.g. Alex Miller"
                            required
                        />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Select Class</label>
                            <select className={styles.input} required defaultValue="">
                                <option value="" disabled>Select...</option>
                                <option value="5A">Class 5A</option>
                                <option value="5B">Class 5B</option>
                                <option value="6A">Class 6A</option>
                            </select>
                        </div>
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Roll No</label>
                            <input
                                type="text"
                                className={styles.input}
                                placeholder="001"
                                required
                            />
                        </div>
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Email Address</label>
                        <input
                            type="email"
                            className={styles.input}
                            placeholder="alex@school.edu"
                            required
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Password</label>
                        <input
                            type="password"
                            className={styles.input}
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <Button
                        type="submit"
                        size="lg"
                        style={{ width: '100%', marginTop: '0.5rem', background: '#4F46E5' }}
                    >
                        Create Account
                    </Button>
                </form>

                <Link href="/auth/student/login" className={styles.link}>
                    Already have an account? Sign in
                </Link>
            </div>
        </div>
    );
}
