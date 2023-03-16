import React, {useEffect, useState} from 'react';
import {MDBRow, MDBCol, MDBListGroup, MDBBtn} from "mdb-react-ui-kit";
import './App.css';
import QuestionsList from './data/QuestionsList';
import Quiz from "./components/Quiz";
import Timer from "./components/Timer";
import Start from "./components/Start";
import {rightPanel} from "./data/data";
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
            {!name ? (
                <Start setName={setName} setTimeOut={setTimeOut}/>
            ) : (
                <MDBRow>
                    <MDBCol md="9">
                        <div className="main">
                            {timeOut ? (
                                <h1 className="earned">You Earned Total: {earned}</h1>
                            ) : (
                                <>
                                    <div style={{height: "50%", position: "relative"}}>
                                        <div className="timer">
                                            <Timer
                                                setTimeOut={setTimeOut}
                                                questionNumber={questionNumber}
                                            />
                                        </div>
                                    </div>
                                    <div style={{height: "50%"}}>
                                        {selectedQuestions.length > 0 ? (
                                            <Quiz data={selectedQuestions}
                                                  questionNumber={questionNumber}
                                                  setQuestionNumber={setQuestionNumber}
                                                  setTimeOut={setTimeOut}/>
                                        ) : (
                                            <QuestionsList handleSelectedQuestions={handleSelectedQuestions}/>
                                        )}
                                    </div>
                                </>
                            )}
                        </div>
                    </MDBCol>

                    <MDBCol md="3" className="money">
                        <MDBListGroup className="money-list">
                            <MDBRow>
                         <span className="mb-2">
                         <MDBBtn
                             style={{float: "right"}}
                             className="mx-2"
                             color="light"
                             onClick={() => setTimeOut(true)}
                         >
                             Quit
                          </MDBBtn>
                        <MDBBtn
                            style={{float: "right"}}
                            onClick={() => {
                                setName(null);
                                setQuestionNumber(1);
                                setEarned("₹ 0");
                            }}
                        >
                    Exit
                  </MDBBtn>
                    </span>
                        <MDBCol md="6">Name: {name}</MDBCol>
                        <MDBCol md="6">Total Earned: {earned}</MDBCol>
                            </MDBRow>
                            <hr/>
                            {rightPanel.map((item) => (
                                <>
                                    <li
                                        className={
                                            questionNumber === item.id ? "item active" : "item"
                                        }
                                    >
                                        <h5 className="amount">{item.question}</h5>
                                    </li>
                                </>
                            ))}
                        </MDBListGroup>
                    </MDBCol>
                </MDBRow>
            )}
        </div>


    );
}

export default App;
