import { useState, useEffect } from 'react';
import './TimerProgress.css';

const TimerProgress = ({ current, total, onTimeUp, isQuizOver }) => {
    const INITIAL_TIME = 240; // 4 წუთი
    const [timeLeft, setTimeLeft] = useState(INITIAL_TIME);

    useEffect(() => {
        if (isQuizOver) return;

        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [isQuizOver]);

    useEffect(() => {
        if (timeLeft === 0 && !isQuizOver) {
            onTimeUp(INITIAL_TIME);
        }
    }, [timeLeft, isQuizOver, onTimeUp]);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    const progressPercentage = (current / total) * 100;

    return (
        <div className="timer-progress-container">
            <div className="stats-row">
                <div className="progress-text">კითხვა: <span>{current}/{total}</span></div>
                <div className={`timer-text ${timeLeft < 15 ? 'danger' : ''}`}>
                    ⏱️ {formatTime(timeLeft)}
                </div>
            </div>
            <div className="progress-bar-bg">
                <div className="progress-bar-fill" style={{ width: `${progressPercentage}%` }}></div>
            </div>
        </div>
    );
};

export default TimerProgress;