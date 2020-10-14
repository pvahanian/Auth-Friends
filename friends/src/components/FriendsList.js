import React, {useEffect, useState} from "react"
import {axiosWithAuth} from '../utls/axiosWithAuth'

const initialFriendValue =
{
    name:"",
    age:"",
    email:"",
}

const FriendsList = () => {
    const [friends, setFriends] = useState([])
    const [newFriend, setNewFriends] = useState(initialFriendValue)

    const getData = () => {
        const token = window.localStorage.getItem('token');
        axiosWithAuth()
        .get('./friends/')
        .then((res) => 
        setFriends(res.data)
    )}

    useEffect(() => {
        getData()
    }, [friends])

    const onSubmit = (e)=>{
        e.preventDefault()
        axiosWithAuth().post('./friends/',newFriend)
        .then((res) =>{setFriends(res.data)}
        )
    }

    const onChange = (e) =>{
        setNewFriends({
        ...newFriend,[e.target.name]: e.target.value
        }
    )

    }
    return (
        <div>
        {
        friends.map((friend) => (<p>My Friends Name :{friend.name} <br></br>
        Age: {friend.age} and Email : {friend.email}</p>))
        }

        <div>New Friend adder</div>
        <form onSubmit={onSubmit}>
        <input 
        type="text"
        name="name"
        onChange={onChange}
        value={newFriend.name}
        placeholder="name" >
        </input>
        <input 
        type="text"
        name="age"
        onChange={onChange}
        value={newFriend.age}
        placeholder="age" >
        </input>
        <input 
        type="text"
        name="email"
        onChange={onChange}
        value={newFriend.email}
        placeholder="email" >
        </input>
        <button onClick ={onSubmit}>Please god work</button>
        </form>
        </div>
    )
}

export default FriendsList