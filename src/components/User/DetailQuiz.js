import { useEffect, useState } from "react"
import { useParams, useLocation } from "react-router-dom"
import { getDataQuiz, postSubmitQuiz } from '../../service/apiService'
import './detailQuiz.scss'
import _ from 'lodash'
import Question from "./Question"
import ModalResult from "./ModalResult"

const DetailQuiz = (props) => {
    const params = useParams()
    const quizId = params.id
    const location = useLocation();
    const [dataQuiz, setDataQuiz] = useState()
    const [index, setIndex] = useState(0)

    const [showModalResult, setShow] = useState(false)
    const [dataModalResult , setDataModalResult ] = useState({})


    const { quizTitle } = location.state

    useEffect(() => {
        fetchQuestions()
    }, [quizId])

    const fetchQuestions = async () => {
        const res = await getDataQuiz(quizId)
        if (res.EC === 0) {
            const raw = res.DT
            const data = _.chain(raw)
                // Group the elements of Array based on `color` property
                .groupBy("id")
                // `key` is group's name (color), `value` is the array of objects
                .map((value, key) => {
                    let questionDescpition, image = null;
                    let answers = []
                    value.forEach((item, index) => {
                        if (index === 0) {
                            questionDescpition = item.description
                            image = item.image
                        }
                        item.answers.isSelected = false
                        answers.push(item.answers)
                    })
                    return ({ questionId: key, answers, questionDescpition, image })
                })
                .value();
            setDataQuiz(data)
        }
    }


    const handelNext = () => {
        if (dataQuiz && dataQuiz.length > index + 1)
            setIndex(index + 1)

    }

    const handelPevert = () => {
        if (index - 1 >= 0)
            setIndex(index - 1)
    }

    const handelFinishQuiz = async () => {
        // {
        //     "quizId": 1,
        //     "answers": [
        //         { 
        //             "questionId": 1,
        //             "userAnswerId": [3]
        //         },
        //         { 
        //             "questionId": 2,
        //             "userAnswerId": [6]
        //         }
        //     ]
        // }
        console.log('check dataquiz :', dataQuiz);
        let payload = {
            quizId: +quizId,
            answers: []
        }
        let answers = []
        if (dataQuiz && dataQuiz.length > 0) {
            dataQuiz.forEach(question => {
                let questionId = question.questionId;
                let userAnswerId = []

                //todo: userAnswerId
                question.answers.forEach(a => {
                    if (a.isSelected === true) {
                        userAnswerId.push(a.id)
                    }
                })
                answers.push({ questionId: +questionId, userAnswerId })
            })

            payload.answers = answers
            console.log('final payload: ', payload);
            let res = await postSubmitQuiz(payload)
            if (res && res.EC === 0) {
                setDataModalResult({
                    countCorrect: res.DT.countCorrect,
                    countTotal: res.DT.countTotal,
                    quizData: res.DT.quizData
                })
                setShow(true)
            } else {

            }
        }

    }

    const handleCheckBox = (answerId, questionId) => {
        let dataQuizClone = _.cloneDeep(dataQuiz)
        let question = dataQuizClone.find(item => +item.questionId === +questionId)
        if (question && question.answers) {
            question.answers = question.answers.map(item => {
                if (+item.id === +answerId) {
                    item.isSelected = !item.isSelected
                }
                return item
            })

        }
        let index = dataQuizClone.findIndex(item => +item.questionId === +questionId)
        if (index > -1) {
            dataQuizClone[index] = question;
            setDataQuiz(dataQuizClone)
        }
    }

    return (
        <div className="detail-quiz-container">
            <div className="left-content">
                <div className="title">
                    Quiz {quizId}: {quizTitle}
                </div>
                <hr />
                <div className="q-body">
                    <img />
                </div>
                <div className="q-content">
                    <Question
                        data={
                            dataQuiz && dataQuiz.length > 0 ?
                                dataQuiz[index] : []
                        }
                        index={index}
                        handleCheckBox={handleCheckBox} />
                </div>
                <div className="footer">
                    <button className="btn btn-secondary" onClick={() => handelPevert()}>Pevert</button>
                    <button className="btn btn-primary" onClick={() => handelNext()}>Next</button>
                    <button className="btn btn-warning" onClick={() => handelFinishQuiz()}>Finish</button>
                </div>
            </div>
            <div className="right-content">
                count down
            </div>
            <ModalResult
                showModalResult={showModalResult}
                setShow={setShow}
                dataModalResult = {dataModalResult}

            />
        </div>
    )
}

export default DetailQuiz
