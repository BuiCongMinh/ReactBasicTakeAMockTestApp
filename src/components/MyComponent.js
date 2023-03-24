import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor"

class MyComponent extends React.Component {
    state = {
        listUser: [
            { id: 1, userName: 'Minh', age: 16 },
            { id: 2, userName: 'Sữa ông thọ', age: 30 },
            { id: 3, userName: 'Hà', age: 69 },
        ]
    }

    adNewUser(userObject) {
        // console.log('check data from perent:', userObject);

        // cách 1 (badcode vì thao tác trực tiếp đến data)
        // let newList = this.state.listUser;
        // console.log('check List data in parent: ', newList);
        // newList.unshift(userObject);
        // this.setState({
        //     listUser: newList
        // })

        // cách 2: goodcode
        this.setState({
            listUser: [userObject, ...this.state.listUser]
        })
    }

    // jsx 
    render() {
        return (
            <div>
                <AddUserInfor adNewUser={(userObject)=>{ this.adNewUser(userObject) } } />
                <p></p>
                <DisplayInfor listUser={this.state.listUser} />
            </div>
        );
    }
}

export default MyComponent;
