import Papa from 'papaparse';
import data from './data.csv';
const loadQuestions = async () => {
    return new Promise((resolve, reject) => {
        Papa.parse(data, {
            download: true,
            delimiter: ";",
            complete: (result) => {
                const questions = result.data;
                const easyQuestions = questions.filter(q => q.level === 'Easy');
                const mediumQuestions = questions.filter(q => q.level === 'Medium');
                const hardQuestions = questions.filter(q => q.level === 'Hard');
                const selectedQuestions = [
                    ...getRandomQuestions(easyQuestions, 5),
                    ...getRandomQuestions(mediumQuestions, 5),
                    ...getRandomQuestions(hardQuestions, 5)
                ];
                resolve(selectedQuestions);
            },
            error: (err) => {
                reject(err);
            }
        });
    });
};

const getRandomQuestions = (questions, count) => {
    const shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count).map((q, index) => ({
        id: index + 1,
        question: q.question,
        choices: [q.choice_a, q.choice_b, q.choice_c, q.choice_d],
        answer: q.answer
    }));
};
loadQuestions();
export default loadQuestions;
