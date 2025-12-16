"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Users, ArrowLeft, Send, Phone, UserCheck } from 'lucide-react';
import styles from '../parentAuth.module.css';

export default function ParentLogin() {
    const router = useRouter();
    const [step, setStep] = useState<'details' | 'otp'>('details');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState(['', '', '', '']);
    const [isLoading, setIsLoading] = useState(false);

    const handleDetailsSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setStep('otp');
        }, 1000);
    };

    const handleOtpSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate login verification
        setTimeout(() => {
            setIsLoading(false);
            router.push('/dashboard/parent');
        }, 1500);
    };

    const handleOtpChange = (index: number, value: string) => {
        if (value.length > 1) return;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Auto-focus next input
        if (value && index < 3) {
            const nextInput = document.getElementById(`otp-${index + 1}`);
            nextInput?.focus();
        }
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
                            background: '#DCFCE7',
                            color: '#10B981',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 1.5rem auto'
                        }}>
                            <Users size={24} />
                        </div>
                        <h1 className={styles.title}>Parent Access</h1>
                        <p className={styles.subtitle}>
                            {step === 'details' ? 'Secure login for parents & guardians' : `Enter the verification code sent to ${phoneNumber}`}
                        </p>
                    </div>

                    {step === 'details' ? (
                        <form onSubmit={handleDetailsSubmit} className={styles.form}>
                            <div style={{ position: 'relative' }}>
                                <UserCheck size={18} style={{ position: 'absolute', top: '50%', left: '1rem', transform: 'translateY(-50%)', color: '#94A3B8' }} />
                                <input
                                    type="text"
                                    className={styles.input}
                                    placeholder="Full Name"
                                    style={{ paddingLeft: '3rem' }}
                                    required
                                />
                            </div>

                            <div style={{ position: 'relative' }}>
                                <Phone size={18} style={{ position: 'absolute', top: '50%', left: '1rem', transform: 'translateY(-50%)', color: '#94A3B8' }} />
                                <input
                                    type="tel"
                                    className={styles.input}
                                    placeholder="Phone Number"
                                    style={{ paddingLeft: '3rem' }}
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className={styles.submitButton}
                                disabled={isLoading}
                            >
                                {isLoading ? 'Sending Code...' : (
                                    <>Get One-Time Password <Send size={16} /></>
                                )}
                            </button>
                        </form>
                    ) : (
                        <form onSubmit={handleOtpSubmit} className={styles.form}>
                            <div className={styles.otpInputGroup}>
                                {otp.map((digit, index) => (
                                    <input
                                        key={index}
                                        id={`otp-${index}`}
                                        type="text"
                                        inputMode="numeric"
                                        className={styles.otpInput}
                                        value={digit}
                                        onChange={(e) => handleOtpChange(index, e.target.value)}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Backspace' && !digit && index > 0) {
                                                document.getElementById(`otp-${index - 1}`)?.focus();
                                            }
                                        }}
                                        required
                                    />
                                ))}
                            </div>

                            <div style={{ textAlign: 'center', color: '#64748B', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                                Didn't receive code? <span style={{ color: '#10B981', fontWeight: 600, cursor: 'pointer' }}>Resend</span>
                            </div>

                            <button
                                type="submit"
                                className={styles.submitButton}
                                disabled={isLoading}
                            >
                                {isLoading ? 'Verifying...' : 'Verify & Login'}
                            </button>

                            <div className={styles.changeNumberLink} onClick={() => setStep('details')}>
                                Entered wrong number? Change
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
