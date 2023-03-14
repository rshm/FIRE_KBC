import Papa from 'papaparse';
import {useEffect, useState} from 'react';
import OscarData from './data.csv';

function Home() {
    const [selectedQuestions, setSelectedQuestions] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchParseData = async () => {
            Papa.parse(OscarData, {
                download: true,
                delimiter: ";",
                complete: ((result) => {
                        const questions = result.data;
                        console.log("results: ",questions)
                        const easyQuestions = questions.filter(q => q.level === 'Easy');
                        const mediumQuestions = questions.filter(q => q.level === 'Medium');
                        const hardQuestions = questions.filter(q => q.level === 'Hard');
                        const selectedQuestions = [
                            ...getRandomQuestions(easyQuestions, 5),
                            ...getRandomQuestions(mediumQuestions, 5),
                            ...getRandomQuestions(hardQuestions, 5)
                        ];
                        setSelectedQuestions(selectedQuestions);
                    }

                )
            })
        }
        fetchParseData()
    }, [])

    return (
        <div>
            <h1>HOME PAGE</h1>

        </div>
    );
}

const getRandomQuestions = (questions, count) => {
    const shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count).map((q, index) => ({
        id: index + 1,
        question: q.question,
        choices: [q.choice_a, q.choice_b, q.choice_c, q.choice_d],
        answer: q.answer
    }));
};

export default Home;
