import _ from 'lodash'
const Question = (props) => {
    const { data, index, handleCheckBox } = props
    if (_.isEmpty(data)) {
        return (
            <></>
        )
    }

    const handelHanleCheckbox = (e, aId, qId) => {
        // if(qe)
        // console.log('>>> check event:', e.target.checked);
        // console.log('>>> check data: ', data);
        
        handleCheckBox(aId,qId)

    }

    return (
        <>
            {
                data.image ?
                    <div className='q-image'>
                        <img src={`data:image/png;base64,${data.image}`} />
                    </div> :
                    <div className='q-image'></div>
            }
            <div className="question">
                Question {index + 1} : {data.questionDescpition}?
            </div>
            <div className="answer">
                {data.answers && data.answers.length &&
                    data.answers.map((a, index) => {
                        return (
                            <div className="a-child" key={`answer-${index}`}>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        checked = {a.isSelected}
                                        onChange={(e) => { handelHanleCheckbox(e, a.id, data.questionId) }}
                                    />

                                    <label className="form-check-label">
                                        {a.description}
                                    </label>
                                </div>
                            </div>
                        )
                    })
                }
            </div >
        </>
    )
}

export default Question
