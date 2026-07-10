import { useState } from 'react';
import './QuizCore.css';

const QuizCore = ({ currentQuestion, onNext }) => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!selectedOption) return;
        onNext(selectedOption);
    };

    return (
        <div className="quiz-core-container">
            <h2 className="question-title">{currentQuestion.question}</h2>
            <form onSubmit={handleSubmit} className="options-form">
                <div className="options-grid">
                    {currentQuestion.options.map((option, index) => (
                        <label
                            key={index}
                            className={`option-card ${selectedOption === option ? 'selected' : ''}`}
                        >
                            <input
                                type="radio"
                                name="quiz-option"
                                value={option}
                                checked={selectedOption === option}
                                onChange={(e) => setSelectedOption(e.target.value)}
                                className="hidden-radio"
                            />
                            <span className="option-text">{option}</span>
                        </label>
                    ))}
                </div>
                <button type="submit" className="next-btn" disabled={!selectedOption}>
                    შემდეგი ➔
                </button>
            </form>
        </div>
    );
};

export default QuizCore;