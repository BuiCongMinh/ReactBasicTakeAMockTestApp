import React from "react";

class DisplayInfor extends React.Component {

    state = {
        condition: true
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
            <div>
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
