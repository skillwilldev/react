import './QuizResults.css';

const QuizResults = ({ questions, userAnswers, timeSpent, onRestart }) => {
    const correctCount = questions.reduce((acc, q, index) => {
        return q.correctAnswer === userAnswers[index] ? acc + 1 : acc;
    }, 0);

    const percentage = Math.round((correctCount / questions.length) * 100);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins} წთ. ${secs < 10 ? '0' : ''}${secs} წმ.`;
    };

    let rank = "Intern";
    if (percentage >= 80) rank = "Middle";
    else if (percentage >= 50) rank = "Junior";

    return (
        <div className="modal-overlay">
            <div className="results-modal">
                <h2>🎉 მარათონის შედეგები</h2>
                <hr />
                <div className="results-stats">
                    <p>სწორი პასუხები: <strong>{correctCount} / {questions.length}</strong></p>
                    <p>პროცენტული მაჩვენებელი: <strong>{percentage}%</strong></p>

                    <p>დახარჯული დრო: <strong>{formatTime(timeSpent)}</strong></p>

                    <p>სტატუსи: <span className={`rank-badge ${rank.toLowerCase()}`}>{rank}</span></p>
                </div>
                <button onClick={onRestart} className="restart-btn">თავიდან დაწყება</button>
            </div>
        </div>
    );
};

export default QuizResults;