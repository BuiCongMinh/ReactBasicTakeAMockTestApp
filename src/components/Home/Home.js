import VideoHomePage from "../../assets/video-homePage.mp4";

const Home = (props) => {
    return (
        <div className="homepage-container">
            <video autoPlay muted loop >
                <source  src={VideoHomePage} type="video/mp4"  controls= {false}  />
            </video>
            <div>
                <div className="">
                    <h1>Theres a better way to ask  </h1>
                </div>

                <div className="homepage-content">
                    <div className='title-1'>There's a better way to ask </div>
                    <div className='title-2'>You don't want to make a boring form. And your audience won't answer one. Create a typeform instead—and make everyone happy. </div>
                    <div className='title-3'><button>Get started - it's free</button> </div>
                </div>

            </div>
        </div>
    )
}

export default Home
