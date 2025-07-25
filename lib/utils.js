// lib/utils.js
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Simple utility for combining Tailwind classes
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

// Simple throttle for scroll events
export const throttle = (func, limit) => {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
};