"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Bold, Italic, List, Image as ImageIcon, Save, Sparkles, Wand2, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import styles from './journal.module.css';

const prompts = [
    "What made you smile today?",
    "Describe a challenge you overcame.",
    "Who are you grateful for?",
    "What's one thing you learned?"
];

export default function JournalPage() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [isSaving, setIsSaving] = useState(false);

    // Get today's date formatted
    const today = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    });

    const handlePromptClick = (prompt: string) => {
        // If empty content, just set it. If content present, append.
        setContent(prev => prev ? `${prev}\n\n${prompt}` : prompt);
    };

    const handleSave = () => {
        setIsSaving(true);
        // Simulate save
        setTimeout(() => {
            setIsSaving(false);
            // Could show toast here
            setTitle('');
            setContent('');
        }, 1500);
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div>
                    <h1 className={styles.title}>My Journal</h1>
                    <p className={styles.subtitle}>Express yourself freely.</p>
                </div>
            </div>

            <div className={styles.prompts}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#6C5CE7', fontWeight: 600, fontSize: '0.9rem', marginRight: 8 }}>
                    <Sparkles size={16} />
                    <span>Ideas:</span>
                </div>
                {prompts.map((p, i) => (
                    <button key={i} className={styles.promptChip} onClick={() => handlePromptClick(p)}>
                        {p}
                    </button>
                ))}
            </div>

            <div className={styles.editorCard}>
                <div className={styles.dateLabel}>
                    <Calendar size={14} style={{ display: 'inline', marginRight: 6, verticalAlign: -2 }} />
                    {today}
                </div>

                <div className={styles.toolbar}>
                    <button className={`${styles.toolBtn} ${styles.activeTool}`}><Bold size={20} /></button>
                    <button className={styles.toolBtn}><Italic size={20} /></button>
                    <div style={{ width: 1, backgroundColor: '#E2E8F0', margin: '0 4px' }} />
                    <button className={styles.toolBtn}><List size={20} /></button>
                    <button className={styles.toolBtn}><ImageIcon size={20} /></button>
                </div>

                <input
                    type="text"
                    placeholder="Title your entry..."
                    className={styles.titleInput}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <textarea
                    className={styles.contentArea}
                    placeholder="Start writing here... How are you feeling?"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>

            <div className={styles.footer}>
                <Button variant="ghost">Cancel</Button>
                <Button
                    onClick={handleSave}
                    isLoading={isSaving}
                    leftIcon={<Save size={20} />}
                >
                    Save Entry
                </Button>
            </div>
        </div>
    );
}
