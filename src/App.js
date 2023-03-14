import React, {useEffect, useState} from 'react';
import { MDBRow, MDBCol, MDBListGroup, MDBBtn } from "mdb-react-ui-kit";
import './App.css';
import QuestionsList from './data/QuestionsList';
import Quiz from "./components/Quiz";

function App() {
    const [selectedQuestions, setSelectedQuestions] = useState([]);
    const [name, setName] = useState(null);
    const [questionNumber, setQuestionNumber] = useState(1);
    const [timeOut, setTimeOut] = useState(false);
    const [earned, setEarned] = useState("₹ 0");


    const handleSelectedQuestions = (questions) => {
        console.log('QUESTIONS ARE-------------');
        questions.forEach((q) => {
            console.log('id:' + q.id);
            console.log('question:' + q.question);
            console.log('answer:' + q.answers);
        });
        setSelectedQuestions(questions);
    };

    return (

        <div className="App">
            <MDBRow>
                <MDBCol md="9">
                    <div className="main">
                        <div style={{ height: "50%", position: "relative" }}>
                            <div className="timer">
                            </div>
                        </div>
                        <div style={{ height: "50%" }}>
                            {selectedQuestions.length > 0 ? (
                                <Quiz data={selectedQuestions}
                                      questionNumber={questionNumber}
                                      setQuestionNumber={setQuestionNumber}
                                      setTimeOut={setTimeOut}/>
                            ) : (
                                <QuestionsList handleSelectedQuestions={handleSelectedQuestions} />
                            )}
                        </div>
                    </div>
                </MDBCol>
                <MDBCol md="3">
                </MDBCol>
            </MDBRow>
        </div>


        //
        // <div className="App">
        //     <header className="App-header">
        //         <h1>Quiz App</h1>
        //     </header>
        //     <div className="container">
        //         {selectedQuestions.length > 0 ? (
        //             <Quiz data={selectedQuestions} />
        //         ) : (
        //             <QuestionsList handleSelectedQuestions={handleSelectedQuestions} />
        //         )}
        //     </div>
        // </div>
    );
}

export default App;
