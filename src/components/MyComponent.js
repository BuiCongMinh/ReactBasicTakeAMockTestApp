import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor"

// class MyComponent extends React.Component {
//     state = {
//         listUser: [
//             { id: 1, userName: 'Minh', age: 16 },
//             { id: 2, userName: 'Sữa ông thọ', age: 30 },
//             { id: 3, userName: 'Hà', age: 69 },
//         ]
//     }

//     adNewUser(userObject) {
//         // console.log('check data from perent:', userObject);

//         // cách 1 (badcode vì thao tác trực tiếp đến data)
//         // let newList = this.state.listUser;
//         // console.log('check List data in parent: ', newList);
//         // newList.unshift(userObject);
//         // this.setState({
//         //     listUser: newList
//         // })

//         // cách 2: goodcode
//         this.setState({
//             listUser: [userObject, ...this.state.listUser]
//         })
//     }

//     handelDeleteUser(userId){
//         let newListUser = this.state.listUser

//         newListUser = newListUser.filter(item => item.id !== userId ) 

//         this.setState({
//             listUser: newListUser
//         }) 
//     }

//     // jsx 
//     render() {
//         return (
//             <>
//                 <div className="a">
//                     <AddUserInfor adNewUser={(userObject) => { this.adNewUser(userObject) }} />
//                     <br></br>
//                     <DisplayInfor listUser={this.state.listUser} handelDeleteUser = { (userId)=>{ this.handelDeleteUser(userId) }} />
//                 </div>
//                 <div className="b"></div>
//             </>
//         );
//     }
// }

const MyComponent = (props) => {
    const [listUser, setListUser] = useState([
        { id: 1, userName: 'Minh', age: 16 },
        { id: 2, userName: 'Sữa ông thọ', age: 30 },
        { id: 3, userName: 'Hà', age: 69 },
    ])
    const adNewUser = (userObject) => {
        setListUser([userObject, ...listUser])
    }
    const handelDeleteUser = (userId) => {
        // console.log('check userId:', userId);
        let newListUser = listUser.filter((item) => item.id != userId);
        // console.log(`check newUserid`, newListUser);
        setListUser(newListUser)
    }

    return (
        <>
            <div className="a">
                <AddUserInfor adNewUser={adNewUser} />
                <br></br>
                <DisplayInfor listUser={listUser} handelDeleteUser={handelDeleteUser} />
            </div>
            <div className="b"></div>
        </>
    );

}

export default MyComponent;