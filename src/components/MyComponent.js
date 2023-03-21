import React from "react";

class MyComponent extends React.Component {
    state ={
        name: "Bùi Công Minh",
        age: 25,
        address: "Hoà Bình"
    }

    handelClick(event){
        console.log('click me button! ');
        // console.log(event);
        console.log('My name is: ', this.state.name);
    }
    handelOnMouseOver(event){
        // console.log('click me button! ');
        console.log(event);
    }

    // jsx 
    render() {
        return (
            <div>
                My name is:  {this.state.name} and Im from {this.state.address}
                <button onClick={this.handelClick}>click me</button>
                <button onMouseOver = {this.handelOnMouseOver}>Hover me</button>
            </div>
        );
    }
}

export default MyComponent;
