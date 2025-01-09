import React from "react";

class Profile extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props)
        this.state = {
            userInfo : {
               name : "Dummy Name",
               location : "Dummy location"
            }
        }
        console.log("Child constructor" + this.props.name)
    }

    componentDidMount(){
        
    //  this.timer = setInterval(() =>{
    //         console.log("Namaste React OP!");
    //     },1000);
        console.log("Child component did mount " )
    }

    componentDidUpdate(){
        console.log("component did update")
    }

    componentWillUnmount(){
        console.log("component will unmount")
        // clearInterval(this.timer);
    }

    render(){
        
        console.log("Child render")
        return (
            <>    
            <h1>Profile Class component</h1>
            <img src={this.state.userInfo.avatar_url} />
            <h3> {this.state.userInfo.name}</h3>
            <h3> {this.state.userInfo.location}</h3>

            </>

        );
    }
}

export default Profile;