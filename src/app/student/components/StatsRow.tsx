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
    <div className={styles.statCard}>
        <div className={styles.statIcon} style={{ background: iconBg, color: iconColor }}>
            {icon}
        </div>
        <div className={styles.statInfo}>
            <h4>{label}</h4>
            <div className={styles.statValue}>{value}</div>
        </div>
    </div>
);

export default function StudentStatsRow() {
    return (
        <div className={styles.statsGrid}>
            <StatBlock
                label="Total Points"
                value="1,250"
                icon={<Trophy size={20} />}
                iconBg="#E0E7FF"
                iconColor="#4F46E5"
            />
            <StatBlock
                label="Goals Met"
                value="12"
                icon={<Target size={20} />}
                iconBg="#DCFCE7"
                iconColor="#10B981"
            />
            <StatBlock
                label="Avg Mood"
                value="8.5"
                icon={<TrendingUp size={20} />}
                iconBg="#FEE2E2"
                iconColor="#EF4444"
            />
            <StatBlock
                label="Rank"
                value="#5"
                icon={<Medal size={20} />}
                iconBg="#FEF3C7"
                iconColor="#D97706"
            />
        </div>
    );
}
