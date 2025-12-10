"use client";

import React from 'react';
import clsx from 'clsx';
import { Loader2 } from 'lucide-react';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
}

export const Button = ({
    children,
    className,
    variant = 'primary',
    size = 'md',
    isLoading = false,
    leftIcon,
    disabled,
    ...props
}: ButtonProps) => {
    return (
        <button
            className={clsx(
                styles.button,
                styles[variant],
                styles[size],
                className
            )}
            disabled={disabled || isLoading}
            {...props}
        >
            {isLoading && <Loader2 className={clsx(styles.icon, "animate-spin")} size={18} />}
            {!isLoading && leftIcon && <span className={styles.icon}>{leftIcon}</span>}
            {children}
        </button>
    );
};
