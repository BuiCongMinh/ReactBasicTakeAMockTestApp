import React, { useEffect, useState } from "react";
import './DisplayInfor.scss';
import logo from "../logo.svg";

// class DisplayInfor extends React.Component {

//     constructor(props) {
//         console.log('>>> this is constructor ');
//         super(props)
//         this.state = {
//             condition: true
//         }
//     }

//     hideShowList() {
//         this.setState({
//             condition: !this.state.condition
//         })
//     }

//     componentDidMount() {
//         console.log('this is component DidMount ');
//         setTimeout(() => {
//             document.title = 'web của MVN'
//         }, 3000)
//     }

//     componentDidUpdate(prevProps, prevState, snapshot) {
//         if (this.props.listUser !== prevProps.listUser) {
//             if (this.props.listUser.length === 5) {
//                 alert('you have 5 user !')
//             }
//         }
//     }

//     render() {
//         //destructuring 
//         const { listUser } = this.props;

//         console.log('this is render');

//         // console.log('check array:', listUser);
//         return (
//             <div className="display-infor-container">

//                 {true &&
//                     <div>
//                         {listUser.map((user) => {
//                             return (
//                                 <div key={user.id} className={Number(user.age) < 18 ? "red" : "green"}>
//                                     <div>Name: {user.userName}, age: {user.age} </div>
//                                     <div><button onClick={() => { this.props.handelDeleteUser(user.id) }}>delete</button></div>
//                                     <div> <hr /> </div>
//                                 </div>
//                             )

//                         })}
//                     </div>
//                 }

//             </div>

//         )
//     }
// }

const DisplayInfor = (props) => {
    const [isShowHideListUser, setIsShowHideListUser] = useState(true)

    const handelShowHideListUser = () => {
        setIsShowHideListUser(!isShowHideListUser)
    }

    const { listUser } = props;

    console.log('>>> call Render !');

    useEffect(() => {
        if(listUser.length === 0 ){
            alert('bạn đã hết ký tự !')
        }
        console.log('>>> call userEffect !');
    }, [listUser])

    return (
        <div className="display-infor-container">
            <div>
                <span onClick={() => { handelShowHideListUser() }}>
                    {isShowHideListUser ? 'Hide List User -' : 'Show List User +'}
                </span>
            </div>
            {isShowHideListUser &&
                <div>
                    {listUser.map((user) => {
                        return (
                            <div key={user.id} className={Number(user.age) < 18 ? "red" : "green"}>
                                <div>Name: {user.userName}, age: {user.age} </div>
                                <div><button onClick={() => { props.handelDeleteUser(user.id) }}>delete</button></div>
                                <div> <hr /> </div>
                            </div>
                        )

                    })}
                </div>
            }

        </div>

    )
}

export default DisplayInfor
