"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import styles from './assessment.module.css';

// Using more friendly/expressive data
const questions = [
    {
        id: 1,
        category: "Wellbeing",
        text: "How well did you sleep this past week?",
        type: "scale",
        options: [
            { label: "Terrible", value: 1, emoji: "😫" },
            { label: "Bad", value: 2, emoji: "🙁" },
            { label: "Okay", value: 3, emoji: "😐" },
            { label: "Good", value: 4, emoji: "🙂" },
            { label: "Superb", value: 5, emoji: "🤩" }
        ]
    },
    {
        id: 2,
        category: "Confidence",
        text: "I felt confident about my school work.",
        type: "scale",
        options: [
            { label: "Not at all", value: 1, emoji: "☁️" },
            { label: "Barely", value: 2, emoji: "🌧️" },
            { label: "Kind of", value: 3, emoji: "⛅" },
            { label: "Mostly", value: 4, emoji: "🌤️" },
            { label: "Totally!", value: 5, emoji: "☀️" }
        ]
    },
    {
        id: 3,
        category: "Support",
        text: "I felt supported by my teachers today.",
        type: "scale",
        options: [
            { label: "Nope", value: 1, emoji: "🙅" },
            { label: "Little bit", value: 2, emoji: "🤏" },
            { label: "Somewhat", value: 3, emoji: "🤷" },
            { label: "Yes", value: 4, emoji: "👍" },
            { label: "Definitely", value: 5, emoji: "🙌" }
        ]
    }
];

export default function AssessmentPage() {
    const router = useRouter();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState<Record<number, number>>({});
    const [isTransitioning, setIsTransitioning] = useState(false);

    const question = questions[currentIndex];
    const progress = ((currentIndex + 1) / questions.length) * 100;

    const handleSelect = (value: number) => {
        setAnswers(prev => ({ ...prev, [question.id]: value }));
    };

    const handleNext = async () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(prev => prev + 1);
        } else {
            router.push('/student/completion');
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.contentWrapper}>

                {/* Header / Nav */}
                <div className={styles.topBar}>
                    <button className={styles.closeBtn} onClick={() => router.push('/student')}>
                        <X size={24} strokeWidth={2.5} />
                    </button>

                    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: '0.25rem', margin: '0 1rem' }}>
                        <div className={styles.progressContainer}>
                            <div className={styles.progressBar} style={{ width: `${progress}%` }} />
                        </div>
                    </div>

                    <div style={{ fontWeight: 700, color: 'var(--primary)', fontFamily: 'var(--font-outfit)' }}>
                        {currentIndex + 1} <span style={{ color: '#CBD5E1' }}>/ {questions.length}</span>
                    </div>
                </div>

                {/* Question Card */}
                <div className={styles.cardContainer}>
                    <span className={styles.questionNumber}>{question.category}</span>

                    <h2 className={styles.questionText}>
                        {question.text}
                    </h2>

                    <div className={styles.optionsGrid}>
                        {question.options.map((opt) => (
                            <button
                                key={opt.value}
                                className={`${styles.optionCard} ${answers[question.id] === opt.value ? styles.selected : ''}`}
                                onClick={() => handleSelect(opt.value)}
                            >
                                <span className={styles.optionEmoji}>{opt.emoji}</span>
                                <span className={styles.optionLabel}>{opt.label}</span>
                                {answers[question.id] === opt.value && (
                                    <div style={{ position: 'absolute', top: 10, right: 10, color: '#6C5CE7' }}>
                                        <CheckCircle2 size={24} fill="#E0E7FF" />
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>

                    <div className={styles.footer}>
                        <Button
                            onClick={handleNext}
                            disabled={!answers[question.id]}
                            size="lg"
                            style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem', fontSize: '1.25rem', height: '64px' }}
                        >
                            {currentIndex === questions.length - 1 ? 'Finish!' : 'Next'}
                            <ArrowRight size={24} strokeWidth={3} style={{ marginLeft: 12 }} />
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    );
}
