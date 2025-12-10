import React from 'react';

export const LogoIcon = ({ size = 32, color = "#8B5CF6", className }: { size?: number, color?: string, className?: string }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Outer Ring */}
            <circle cx="50" cy="50" r="46" stroke={color} strokeWidth="6" />

            {/* Outer Hairpin Loop */}
            <path
                d="M22 28 H 54 A 22 22 0 0 1 54 72 H 22"
                stroke={color}
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            {/* Inner Hairpin Loop */}
            <path
                d="M22 42 H 54 A 8 8 0 0 1 54 58 H 22"
                stroke={color}
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
