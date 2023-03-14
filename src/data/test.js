import React, {Component} from 'react';
import Papa from 'papaparse';
import File from './data.csv';
class Restros extends Component {
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
            delimiter: ";",
            complete: function (results) {
                //last empty record
                results.data.pop();
                this.setState(state => ({
                    questions: results.data,
                    questionsBackup: results.data
                }));

                //to list unique cuisines
                const questions = [];
                results.data.forEach(quiz => {
                    if (quiz.question) {
                        const question = quiz.question;
                        questions.push(quiz);
                        console.log("selected questions:" + question);
                    }
                });

            }.bind(this)
        });

    }


    render() {
        return (
            <div>
                <h1>HOME PAGE</h1>

            </div>
        );
    }
}

export default Restros
