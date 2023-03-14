import React, { useState, useEffect } from "react";
const Quiz = (data, questionNumber, setQuestionNumber, setTimeOut) => {
    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [className, setClassName] = useState("answer");

    useEffect(() => {
        setQuestion(data[questionNumber - 1]);
    }, [data, questionNumber]);

    return (
        <div className="quiz">
            <div className="question">{question?.question}</div>
        </div>
    )

}

export default Quiz;
