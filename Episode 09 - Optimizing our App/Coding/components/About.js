import React from "react";
import ProfileFnComponent from "./Profile.js"
import Profile from "./ProfileClass.js";
class About extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent constructor")
    }

    componentDidMount(){
        console.log("Parent component did mount")
    }    

    render(){
    console.log("Parent render")
    return(
    <div>
    <h1> It's About page</h1>
    <h1>This is Namaste React Live Course - Chapter 7 🚀</h1>
    {/* <Profile name={"First Child"} xyz={"abc"}/>
    <ProfileFnComponent /> */}
    </div>
    )        
    }
}

export default About;

