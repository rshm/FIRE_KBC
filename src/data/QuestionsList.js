import React, { Component } from 'react';
import Papa from 'papaparse';
import File from './data.csv';

class QuestionsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: [],
            questionsBackup: [],
        };
    }

    componentDidMount = async () => {
        await Papa.parse(File, {
            download: true,
            header: true,
            delimiter: ';',
            complete: function (results) {
                //last empty record
                results.data.pop();
                // const questions_all = results.dataold.filter(q => q.question); // filter out empty questions_all
                const easyQuestions = results.data.filter((q) => q.level === 'easy');
                const mediumQuestions = results.data.filter(
                    (q) => q.level === 'medium'
                );
                const hardQuestions = results.data.filter((q) => q.level === 'Hard');
                const selectedQuestions = [
                    ...this.getRandomQuestions(easyQuestions, 3),
                    ...this.getRandomQuestions(mediumQuestions, 3),
                    ...this.getRandomQuestions(hardQuestions, 3),
                ];

                this.setState({
                    questions: selectedQuestions,
                    questionsBackup: results.data,
                });

                this.props.handleSelectedQuestions(selectedQuestions);

                // selectedQuestions.forEach((q) => {
                //     console.log('id:' + q.id);
                //     console.log('question:' + q.question);
                //     console.log('answer:' + q.answers);
                // });
            }.bind(this),
        });
    };

    getRandomQuestions = (questions, count) => {
        const shuffled = questions.sort(() => 0.5 - Math.random());
        return shuffled
            .slice(0, count)
            .map((q, index) => ({
                id: index + 1,
                question: q.question,
                answers: [
                    {
                        text: q.choice_a,
                        correct: q.answer === q.choice_a,
                    },
                    {
                        text: q.choice_b,
                        correct: q.answer === q.choice_b,
                    },
                    {
                        text: q.choice_c,
                        correct: q.answer === q.choice_c,
                    },
                    {
                        text: q.choice_d,
                        correct: q.answer === q.choice_d,
                    },
                ],
            }));
    };

    render() {
        return null;
    }
}

export default QuestionsList;
