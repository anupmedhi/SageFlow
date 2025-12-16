"use client";
import React from 'react';
import { Trophy, Target, TrendingUp, Medal } from 'lucide-react';
import styles from '../student.module.css';

interface StatBlockProps {
    label: string;
    value: string;
    icon: React.ReactNode;
    iconBg: string;
    iconColor: string;
}

const StatBlock = ({ label, value, icon, iconBg, iconColor }: StatBlockProps) => (
    <div className={styles.statCard} style={{ flexDirection: 'row', alignItems: 'center', padding: '1.25rem' }}>
        <div className={styles.statIcon} style={{ background: iconBg, color: iconColor }}>
            {icon}
        </div>
        <div className={styles.statInfo}>
            <h4>{label}</h4>
            <div style={{ fontSize: '1.5rem' }}>{value}</div>
        </div>
    </div>
);

export default function StudentStatsRow() {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
            <StatBlock
                label="Total Points"
                value="1,250"
                icon={<Trophy size={24} />}
                iconBg="#E0E7FF"
                iconColor="#4F46E5"
            />
            <StatBlock
                label="Goals Met"
                value="12"
                icon={<Target size={24} />}
                iconBg="#DCFCE7"
                iconColor="#10B981"
            />
            <StatBlock
                label="Avg Mood"
                value="8.5"
                icon={<TrendingUp size={24} />}
                iconBg="#FEE2E2"
                iconColor="#EF4444"
            />
            <StatBlock
                label="Leaderboard"
                value="#5 Rank"
                icon={<Medal size={24} />}
                iconBg="#FEF3C7"
                iconColor="#D97706"
            />
        </div>
    );
}
