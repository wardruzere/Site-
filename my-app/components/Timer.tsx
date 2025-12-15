"use client";
import { useState, useEffect } from "react";

export default function Timer({ targetDate }: { targetDate: string }) {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const countdownDate = new Date(targetDate).getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            if (distance < 0) {
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((distance / (1000 * 60)) % 60),
                seconds: Math.floor((distance / 1000) % 60),
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <div className="flex justify-center gap-4 mt-6">
            {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="flex flex-col items-center bg-red-600 text-white rounded-lg px-4 py-2 shadow-lg w-20">
                    <span className="text-3xl font-bold">{value.toString().padStart(2, "0")}</span>
                    <span className="uppercase text-xs mt-1">{unit}</span>
                </div>
            ))}
        </div>
    );
}
