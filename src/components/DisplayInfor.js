import React from "react";
import './DisplayInfor.scss';
import logo from "../logo.svg";

class DisplayInfor extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            condition: true
        }
    }


    hideShowList() {
        this.setState({
            condition: !this.state.condition
        })
    }

    render() {
        //destructuring 
        const { listUser } = this.props;

        // console.log('check array:', listUser);
        return (
            <div className="display-infor-container">
                <img src={logo} alt='hình ảnh minh hoạ scss'/>

                <div >
                    <span onClick={() => { this.hideShowList() }}>
                        {this.state.condition === true ? 'hide list -' : 'show list +'}
                    </span>
                </div>

                {
                    (this.state.condition) &&
                    <div>
                        {listUser.map((user) => {
                            return (
                                <div key={user.id} className={Number(user.age) < 18 ? "red" : "green"}>
                                    <div>Name: {user.userName}, age: {user.age} </div>
                                    <div><button onClick={ () => { this.props.handelDeleteUser(user.id) }}>delete</button></div>
                                    <div> <hr /> </div>
                                </div>
                            )

                        })}
                    </div>
                }

            </div>

        )
    }
}

export default DisplayInfor
