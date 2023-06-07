import { useState } from 'react'
import './login.scss'
import { useNavigate } from 'react-router-dom'
import { postLogin } from '../../service/apiService'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { setUser } from '../../redux/slice/userSlice'
import { ImSpinner10 } from 'react-icons/im'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassWord] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleLogin = async () => {
        //validate !
        const isValidEmail = validateEmail(email);
        if (!isValidEmail) {
            toast.error('Invalid Email')
            return;
        }
        if (!password) {
            toast.error('Invalid PassWord !')
            return
        }

        setIsLoading(true)
        //submit apis !
        let data = await postLogin(email, password)
        if (!data || data.EC < 0) {
            toast.error(data.EM)
            setIsLoading(false)
        }
        let user = data.DT

        if (data && data.EC === 0) {
            dispatch(setUser(user))
            toast.success(data.EM)
            setIsLoading(false)
            navigate('/')
        }


    }

    const handleRegisterPage = () => {
        navigate('/register')
    }


    return (
        <div className="login-container">
            <div className="header">
                <span>
                    Dont have an account yet?
                </span>
                <button onClick={() => handleRegisterPage()}>
                    Sign Up!
                </button>
            </div>
            <div className="title col-4 mx-auto">
                <h1> MinhVN-Web </h1>
            </div>
            <div className="welcome col-4 mx-auto">
                <h2> Well come ! </h2>
            </div>
            <div className="content-form col-4 mx-auto">
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" value={password} onChange={(e) => setPassWord(e.target.value)} />
                </div>
                <span> For got your password ? </span>
                <div>
                    <button
                        disabled={isLoading}
                        className='btn-submit'
                        onClick={() => { handleLogin() }}

                    >
                        {isLoading === true && <ImSpinner10 className='loaderIcon' />}
                        <span> Login From MinhVN-Web !</span>
                    </button>
                </div>
                <div className='text-center'>
                    <span className='back' onClick={() => navigate('/')}> &lt;&lt;&lt; Go to the Home Page ! </span>
                </div>
            </div>
        </div>
    )
}

export default Login
