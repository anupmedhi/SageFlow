"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Stethoscope, Mail, Lock, UserPlus } from 'lucide-react';
import styles from '../counsellorAuth.module.css';

export default function CounsellorLogin() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate login delay
        setTimeout(() => {
            setIsLoading(false);
            router.push('/dashboard/counsellor');
        }, 1000);
    };

    const handleJoin = () => {
        // In a real app, this would go to a signup flow
        // For now, we can simulate joining by logging in or redirecting to a signup page
        // user prompted: "Join as a clinical psycologist/pyscatrist"
        router.push('/auth/counsellor/signup');
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
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 1.5rem auto',
                            color: '#4F46E5'
                        }}>
                            <Stethoscope size={24} />
                        </div>
                        <h1 className={styles.title}>Counsellor Portal</h1>
                        <p className={styles.subtitle}>Sign in to manage sessions & students</p>
                    </div>

                    <form onSubmit={handleLogin} className={styles.form}>
                        <div style={{ position: 'relative' }}>
                            <Mail size={18} style={{ position: 'absolute', top: '50%', left: '1rem', transform: 'translateY(-50%)', color: '#94A3B8' }} />
                            <input
                                type="email"
                                className={styles.input}
                                placeholder="Email Address"
                                style={{ paddingLeft: '3rem' }}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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

                        <button type="submit" className={styles.submitButton} disabled={isLoading}>
                            {isLoading ? 'Signing in...' : 'Sign In'}
                        </button>
                    </form>

                    <div className={styles.divider}>New to SageFlow?</div>

                    <button type="button" className={styles.joinButton} onClick={handleJoin}>
                        <UserPlus size={18} />
                        Join as a Counsellor
                    </button>

                </div>
            </div>
        </div>
    );
}
