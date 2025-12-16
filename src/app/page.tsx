"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, GraduationCap, HeartHandshake, Users } from 'lucide-react';
import { LogoIcon } from '@/components/ui/Logo';
import styles from './page.module.css';

export default function LandingPage() {
  return (
    <div className={styles.container}>
      {/* Background Shapes */}
      <div className={styles.blob1} />
      <div className={styles.blob2} />

      <main className={styles.content}>

        {/* Left Side: Brand & Hero */}
        {/* ... imports ... */}

        <div className={styles.heroContent}>
          <div className={styles.brand}>
            <LogoIcon size={56} />
            <span className={styles.brandName}>SageFlow</span>
          </div>

          <h1 className={styles.title}>
            Growth starts <br /> with reflection.
          </h1>
          <p className={styles.subtitle}>
            Empowering students to build healthy habits and mental wellness.
          </p>
        </div>

        {/* Right Side: Role Selection */}
        <div className={styles.roleSection}>
          <span className={styles.roleLabel}>Select your role to continue</span>

          <Link href="/auth/student/login" className="block">
            <div className={styles.roleCard}>
              <div className={styles.roleIconWrapper} style={{ background: '#E0E7FF', color: '#4F46E5' }}>
                <GraduationCap size={28} />
              </div>
              <div className={styles.roleText}>
                <h3>I am a Student</h3>
                <p>Track your mood & progress</p>
              </div>
              <ArrowRight className={styles.arrowIcon} size={24} />
            </div>
          </Link>

          <Link href="/auth/parent/login" className="block">
            <div className={styles.roleCard}>
              <div className={styles.roleIconWrapper} style={{ background: '#DCFCE7', color: '#10B981' }}>
                <Users size={28} />
              </div>
              <div className={styles.roleText}>
                <h3>I am a Parent</h3>
                <p>View your child's insights</p>
              </div>
              <ArrowRight className={styles.arrowIcon} size={24} />
            </div>
          </Link>

          <Link href="/auth/teacher/login" className="block">
            <div className={styles.roleCard}>
              <div className={styles.roleIconWrapper} style={{ background: '#FEE2E2', color: '#EF4444' }}>
                <BookOpen size={28} />
              </div>
              <div className={styles.roleText}>
                <h3>I am a Teacher</h3>
                <p>Monitor class wellbeing</p>
              </div>
              <ArrowRight className={styles.arrowIcon} size={24} />
            </div>
          </Link>

          <Link href="/auth/counsellor/login" className="block">
            <div className={styles.roleCard}>
              <div className={styles.roleIconWrapper} style={{ background: '#FEF3C7', color: '#D97706' }}>
                <HeartHandshake size={28} />
              </div>
              <div className={styles.roleText}>
                <h3>I am a Counsellor</h3>
                <p>Provide guidance & support</p>
              </div>
              <ArrowRight className={styles.arrowIcon} size={24} />
            </div>
          </Link>
        </div>

      </main>
    </div>
  );
}
