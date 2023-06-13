import { useState } from 'react';
import './ManageQuiz.scss'
import Select from 'react-select'
import { postCreateNewQuiz } from '../../../../service/apiService';
import { toast } from 'react-toastify';
import TableQuiz from './TableQuiz';
import Accordion from 'react-bootstrap/Accordion';

const options = [
    { value: 'EASY', label: 'EASY' },
    { value: 'MEDIUM', label: 'MEDIUM' },
    { value: 'HARD', label: 'HARD' },
];

const ManageQuiz = (props) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('');
    const [type, setType] = useState('')
    const [image, setImage] = useState(null)


    const handelChangeFile = (e) => {
        if (e.target && e.target.files && e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }

    const handelSubmitQuiz = async () => {
        if (!name || !description) {
            return toast.error('Name or Description is required !')
        }

        let res = await postCreateNewQuiz(description, name, type?.value, image)

        if (res && res.EC === 0) {
            toast.success(res.EM)
            setName('')
            setDescription('')
            setImage(null)
        } else {
            toast.error(`${res.EM}`)
        }
    }

    return (
        <div className="quiz-container">
            <Accordion >
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Manage Quizzes</Accordion.Header>
                    <Accordion.Body>
                        <div className="add-new">

                            <fieldset className="border rounded-3 p-3">
                                <legend className="float-none w-auto px-3">Add new quiz: </legend>
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder='your quiz name'
                                        value={name}
                                        onChange={(e) => { setName(e.target.value) }}
                                    />
                                    <label>Name</label>
                                </div>
                                <div className="form-floating">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder='descripyion... '
                                        value={description}
                                        onChange={(e) => { setDescription(e.target.value) }}
                                    />
                                    <label htmlFor="floatingPassword">Description</label>
                                </div>
                                <div className='my-3'>
                                    <Select
                                        value={type}
                                        defaultValue={type}
                                        onChange={setType}

                                        options={options}
                                        placeholder={"Quizz type..."}
                                    />
                                </div>
                                <div className='more-action form-group'>
                                    <label className='mb-1'>UpLoad Image</label>
                                    <input
                                        type='file'
                                        className='form-control'
                                        onChange={(e) => handelChangeFile(e)}
                                    />
                                </div>
                                <div className='mt-3'>
                                    <button
                                        className='btn btn-warning'
                                        onClick={() => handelSubmitQuiz()}
                                    >
                                        Save
                                    </button>
                                </div>
                            </fieldset>

                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <div className="list-detail">
                <TableQuiz
                />
            </div>
        </div>
    )
}
export default ManageQuiz