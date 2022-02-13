import React from 'react'

const Profile = props => {
    console.log(props)
    return <div style={{paddingLeft: "100px", paddingTop : "30px"}}>
        {props.handleName()}
        <h1>This is my name : {props.name}</h1>
        {props.children}
        <h2>This is my bio : {props.bio}</h2>
        <h2>This is my profession : {props.profession}</h2>
        
    </div>
    
}



export default Profile