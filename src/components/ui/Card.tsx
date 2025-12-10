import React from 'react';
import clsx from 'clsx';
import styles from './Card.module.css';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    hoverable?: boolean;
    active?: boolean;
}

export const Card = ({ children, className, hoverable = false, active = false, ...props }: CardProps) => {
    return (
        <div
            className={clsx(
                styles.card,
                hoverable && styles.hoverable,
                active && styles.active,
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};
