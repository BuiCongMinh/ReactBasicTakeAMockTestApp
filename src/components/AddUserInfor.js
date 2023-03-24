import React from "react";

class UserInfor extends React.Component {
    state = {
        name: "Bùi Công Minh",
        age: 25,
        address: "Hoà Bình"
    }

    inputOnchangeName(event) {
        // bad code! :
        // this.state.age = event.target.value ( vì đây nó sẽ thay đổi trạng thái của state một cách gián tiếp !)

        // good code! :
        this.setState({
            name: event.target.value
        })
    }

    inputOnchangeAge(event) {
        // console.log(event.target.value);
        this.setState({
            age: event.target.value
        })
    }

    handelOnSubmit(event) {
        event.preventDefault();
        // console.log(this.state);

        this.props.adNewUser({
            id: Math.floor((Math.random() * 100) + 1) + '-random ',
            name: this.state.name,
            age: this.state.age,
            address: this.state.address
        });
    }
    render() {
        return (
            <div>
                My name is:  {this.state.name} and Im  {this.state.age}

                <form onSubmit={(event) => { this.handelOnSubmit(event) }}>
                    <label>Name : </label>
                    <input value={this.state.name} type='text' onChange={(event) => this.inputOnchangeName(event)} />
                    <label> Age : </label>
                    <input value={this.state.age} type='text' onChange={(event) => this.inputOnchangeAge(event)} />
                    <button> submit !</button>
                </form>
            </div>
        )
    }
}

export default UserInfor
