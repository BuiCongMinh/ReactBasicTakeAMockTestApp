import { useState } from "react"
import { useNavigate } from "react-router-dom"
import './register.scss'
import { postRegister } from "../../service/apiService"
import { toast } from 'react-toastify'

let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

let validate = {
    valiteEmail: true,
    vailitePassword: {
        oneDigit: /(?=.*\d)/,
        lowerCase: /(?=.*[a-z])/,
        upperCase: /(?=.*[A-Z])/,
        mentionedCharacters: /[0-9a-zA-Z]{8,}/,
        onlyAZ: /[!@&*]/

    }
}

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassWord] = useState('')
    const [username, setUserName] = useState('')

    //Validate InPutPass
    const [divValidatePass, setDivValidatePass] = useState(false)
    const [checkOneDigit, setCheckOneDigit] = useState(false)
    const [checkLowerCase, setCheckLowerCase] = useState(false)
    const [checkUpperCase, setCheckUpperCase] = useState(false)
    const [checkMentionedCharacters, setCheckMentionedCharacters] = useState(false)
    const [checkAZ, setCheckAZ] = useState(true)

    const navigate = useNavigate()

    // funtion validate InPut
    const validateInputPass = (e) => {
        const valuePass = e.target.value
        const { oneDigit } = validate.vailitePassword
        const { upperCase } = validate.vailitePassword
        const { mentionedCharacters } = validate.vailitePassword
        const { lowerCase } = validate.vailitePassword
        const { onlyAZ } = validate.vailitePassword

        setCheckOneDigit(oneDigit.test(valuePass))
        setCheckLowerCase(lowerCase.test(valuePass))
        setCheckUpperCase(upperCase.test(valuePass))
        setCheckMentionedCharacters(mentionedCharacters.test(valuePass))
        if (onlyAZ.test(valuePass)) {
            setCheckAZ(false)
        } else {
            setCheckAZ(true)
        }

        return setPassWord(valuePass)
    }

    const handelReGister = async () => {

        // validatePassWord
        if ((regex.test(password) === false) || (!checkAZ)) {
            console.log(62, checkAZ);
            console.log(63, regex.test(password));
            return toast.error(`Your password must contain at least:
                                8 characters from a-z .
                                Contains at least 1 capital letter
                                Contains at least 1 digit
                                Must not contain special characters (like @!#$...)  
                                        `)
        }

        // validate Email
        let res = await postRegister(email, password, username)
        if (res.EC === -1) {
            return toast.error(String(res.EM))
        }

        if (res.EC === 0) {
            toast.success(res.EM)
            return navigate('/login')
        }
        
    }

    const handelChangeLoginPage = () => {
        navigate('/login')
    }


    return (
        <div className="register-container">
            <div className="header">
                <span>
                    Alrealy have an account ?
                </span>
                <button onClick={() => handelChangeLoginPage()}>
                    Login
                </button>
            </div>
            <div className="title col-4 mx-auto">
                <h1> MinhVN-Web </h1>
            </div>
            <div className="welcome col-4 mx-auto">
                <h2> Register </h2>
            </div>
            <div className="content-formRegister col-4 mx-auto mt-4">
                <div className="form-gruop mb-4">
                    <label className="mb-1">Email</label>
                    <input type="email" className="form-control" onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="form-gruop mb-4">
                    <label className="mb-1" >PassWord</label>
                    <input type="password" className="form-control" onChange={e => validateInputPass(e)} onBlur={() => setDivValidatePass(false)} onFocus={() => setDivValidatePass(true)} />
                    <div className={divValidatePass ? "validatePassTrue " : "validatePassFale"}>
                        <span className={checkOneDigit ? "oneDigitTrue" : "oneDigitFalse"}>. Contain at least 1 number </span><br />
                        <span className={checkLowerCase ? "lowerCaseTrue" : "lowerCaseFalse"}>. Contain at least 1 lowercase character (a-z)</span><br />
                        <span className={checkUpperCase ? "upperCaseTrue" : "upperCaseFlase"}>. Contain at least 1 uppercase character (A-Z)</span><br />
                        <span className={checkMentionedCharacters ? "mentionedCharactersTrue" : "mentionedCharactersFalse"} >. Contain at least 8 characters </span><br />
                        <span className={checkAZ ? 'onlyAZTrue' : 'onlyAZFalse'}>. Only 0-9a-zA-Z </span>
                    </div>
                </div>
                <div className="form-gruop mb-4">
                    <label className="mb-1">UserName</label>
                    <input type="" className="form-control" onChange={e => setUserName(e.target.value)} />
                </div>
                <div className="mb-1">
                    <button className="btn btn-primary mx-auto d-block" onClick={() => handelReGister()} > Create free account ! </button>
                </div>
                <div>
                    <span className='btn back btn-link mx-auto d-block' onClick={() => navigate('/')}> &lt;&lt;&lt; Go to the Home Page ! </span>
                </div>
            </div>
        </div >

    )
}
export default Register
