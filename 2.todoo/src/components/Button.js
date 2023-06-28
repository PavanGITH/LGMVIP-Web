import React,{useState} from 'react'
import MyCard from './MyCard'


function MyButton() {
  
    const handleUpClick = () => {
        console.log('clicked');
    }
    return (
    <div className="container">
        <button type="button" className ="btn btn-primary mx-auto d-flex justify-content-between mt-5" onClick={handleUpClick}>Get Users</button>
        <div className="container">
            <MyCard imageUrl="https://reqres.in/img/faces/1-image.jpg" firstName="George" lastName="Bluth" email="george.bluth@reqres.in"/>
        </div>
    </div>
  )
}

export default MyButton