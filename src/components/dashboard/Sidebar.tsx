"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Users, PieChart, Settings, LogOut } from 'lucide-react';
import styles from './Sidebar.module.css';
import { LogoIcon } from '@/components/ui/Logo';

export default function Sidebar() {
    const pathname = usePathname();
    const isTeacher = pathname.includes('teacher');
    const isStudent = pathname.includes('student');
    const isParent = !isTeacher && !isStudent; // Fallback or explicit check if needed

    let roleName = 'Parent User';
    let roleDesc = 'Parent';
    let avatarText = 'PD';

    if (isTeacher) {
        roleName = 'Mr. Smith';
        roleDesc = 'Class 5A Teacher';
        avatarText = 'TS';
    } else if (isStudent) {
        roleName = 'Alex M.';
        roleDesc = 'Student';
        avatarText = 'AM';
    }

    return (
        <aside className={styles.sidebar}>
            <Link href="/" className={styles.logo}>
                <LogoIcon size={32} /> SageFlow
            </Link>

            <nav className={styles.nav}>
                {isStudent ? (
                    <>
                        <div className={`${styles.navItem} ${styles.active}`}>
                            <LayoutDashboard size={20} className={styles.icon} />
                            Home
                        </div>
                        <div className={styles.navItem} onClick={() => window.location.href = '/student/journal'}>
                            <Settings size={20} className={styles.icon} />
                            Journal
                        </div>
                        <Link href="/student/history" className={styles.navItem}>
                            <PieChart size={20} className={styles.icon} />
                            My Progress
                        </Link>
                    </>
                ) : (
                    <>
                        <Link
                            href={isTeacher ? "/dashboard/teacher" : "/dashboard/parent"}
                            className={`${styles.navItem} ${pathname === (isTeacher ? "/dashboard/teacher" : "/dashboard/parent") ? styles.active : ''}`}
                        >
                            <LayoutDashboard size={20} className={styles.icon} />
                            Dashboard
                        </Link>
                        <div className={styles.navItem}>
                            <Users size={20} className={styles.icon} />
                            {isTeacher ? 'Students' : 'Family'}
                        </div>
                        <div className={styles.navItem}>
                            <PieChart size={20} className={styles.icon} />
                            Analytics
                        </div>
                        <div className={styles.navItem}>
                            <Settings size={20} className={styles.icon} />
                            Settings
                        </div>
                    </>
                )}
            </nav>

            <div className={styles.user}>
                <div className={styles.avatar}>
                    {avatarText}
                </div>
                <div className={styles.userInfo}>
                    <span className={styles.userName}>{roleName}</span>
                    <span className={styles.userRole}>{roleDesc}</span>
                </div>
            </div>
        </aside>
    );
}
