import React from "react"
import { useEffect, useState } from "react"
import { getQuizByUser } from '../../service/apiService'
import './ListQuiz.scss'
import { useNavigate } from "react-router-dom"

const ListQuiz = (props) => {
    const [arrQuiz, setArrQuiz] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        getQuizData()
    }, [])

    const getQuizData = async () => {
        let res = await getQuizByUser()
        if (res && res.EC === 0) {
            setArrQuiz(res.DT)
        }
    }

    return (
        <div className="list-quiz-container container">
            {
                arrQuiz && arrQuiz.length > 0 &&
                arrQuiz.map((quiz, index) => {
                   
                    return (
                        <div className="card" style={{ width: "18rem" }} key={`${index}-quiz`}>
                            <img className="card-img-top" src={`data:image/png;base64,${quiz.image}`} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Quiz {index + 1} </h5>
                                <p className="card-text">{quiz.description}</p>
                                <button
                                    href="#"
                                    className="btn btn-primary"
                                    onClick={() => navigate(`/quiz/${quiz.id}`, { state: { quizTitle: quiz.description } })}
                                >
                                    start now !
                                </button>
                            </div>
                        </div>
                    )
                })
            }

            {
                arrQuiz && arrQuiz.length === 0 &&
                <h1>
                    You dont have any quiz ... !
                </h1>
            }

        </div>
    )
}

export default ListQuiz

