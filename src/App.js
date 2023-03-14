import { useState } from "react";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import './App.css';
// import Quiz from "./components/Quiz";
// import Home from "./data/test2";
import Home from "./data/test";
// import loadQuestions from "./data/questions";
function App() {
    const [questionNumber, setQuestionNumber] = useState(1);
    const [timeOut, setTimeOut] = useState(false);
    return (
        <div className="App">
            <MDBRow>
                <MDBCol md="9">
                    <div className="main">
                        <div style={{ height: "50%", position: "relative" }}>
                            {/*<Quiz*/}
                            {/*    data={loadQuestions}*/}
                            {/*    questionNumber={questionNumber}*/}
                            {/*    setQuestionNumber={setQuestionNumber}*/}
                            {/*    setTimeOut={setTimeOut}*/}
                            {/*/>*/}
                        </div>
                    </div>
                </MDBCol>
                <MDBCol md="3">Progress
                <Home/></MDBCol>

            </MDBRow>
        </div>
    );
}

export default App;
