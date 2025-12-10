"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import { Home, ArrowRight, Star, Flame } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import styles from './completion.module.css';

export default function CompletionPage() {

    // Confetti effect logic (simple div generation)
    const particles = Array.from({ length: 50 }).map((_, i) => {
        const style = {
            left: `${Math.random() * 100}vw`,
            animationDelay: `${Math.random() * 2}s`,
            backgroundColor: ['#6C5CE7', '#00B894', '#fdcb6e', '#ff7675'][Math.floor(Math.random() * 4)],
        };
        return <div key={i} className={styles.confetti} style={style} />;
    });

    return (
        <div className={styles.container}>
            {particles}

            <div className={styles.content}>
                <div className={styles.iconWrapper}>
                    🎉
                </div>

                <h1 className={styles.title}>Awesome Job!</h1>
                <p className={styles.subtitle}>
                    You've completed your weekly check-in. Thanks for being honest with yourself.
                </p>

                <div className={styles.statsRow}>
                    <div className={styles.statCard}>
                        <span className={styles.statValue}>+50</span>
                        <span className={styles.statLabel}>Points Added</span>
                        <Star size={20} color="#FDCB6E" fill="#FDCB6E" style={{ marginTop: 8 }} />
                    </div>
                    <div className={styles.statCard}>
                        <span className={styles.statValue}>5</span>
                        <span className={styles.statLabel}>Day Streak</span>
                        <Flame size={20} color="#FF7675" fill="#FF7675" style={{ marginTop: 8 }} />
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                    <Link href="/student">
                        <Button size="lg" variant="outline" leftIcon={<Home size={20} />}>
                            Back Home
                        </Button>
                    </Link>
                    <Link href="/student/journal">
                        <Button size="lg" variant="primary" >
                            Write a Note <ArrowRight size={20} style={{ marginLeft: 8 }} />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
