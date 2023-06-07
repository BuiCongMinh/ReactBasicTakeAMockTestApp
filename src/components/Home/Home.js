import { useNavigate } from "react-router-dom";
import VideoHomePage from "../../assets/video-homePage.mp4";
import { useSelector } from "react-redux";

const Home = (props) => {
    const navigate = useNavigate()
    const account = useSelector(state => {
        return state.userReducer.account
    })
    const isAuthenticate = useSelector(state => {
        return state.userReducer.isAuthenticated
    })

    return (
        <div className="homepage-container">
            <video autoPlay muted loop >
                <source src={VideoHomePage} type="video/mp4" controls={false} />
            </video>
            <div>
                <div className="">
                    <h1>Theres a better way to ask  </h1>
                </div>

                <div className="homepage-content">
                    <div className='title-1'>There's a better way to ask </div>
                    <div className='title-2'>You don't want to make a boring form. And your audience won't answer one. Create a typeform instead—and make everyone happy. </div>
                    <div className='title-3'>
                        {
                            !isAuthenticate ?
                                <button onClick={() => navigate('/login')} >Get started - it's free</button> :
                                <button onClick={() => navigate('/user')}> Doing Quiz Now ! </button>
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home
