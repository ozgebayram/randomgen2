import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react'
import "../card/Card.css"

const Card = () => {
const url = "https://randomuser.me/api/"
const [user,setUser]=useState([]);
const [newUser,setNewUser]=useState([]);
const [title,setTitle]=useState('');
const [userList,setUserList]=useState([])
const [loading,setLoading]= useState(true)
const [description, setDescription] = useState("");


const getUser = async()=>{
	const {data} = await axios(url);
	setUser(data.results[0])
	console.log(data);
}


const showName=(e)=>{
	setTitle("My name is ");
	setDescription(
		user?.name.title + " " + user?.name.first + " " + user?.name.last
	  );
}
const showdate=(e)=>{
	setTitle("My age is  ");
	setDescription(
		user?.dob.age
	  );
}
const showphone=(e)=>{
	setTitle("My phone number is ");
	setDescription(
		user?.phone
	  );
}
const showNav=(e)=>{
	setTitle("My address is ");
	setDescription(
		user?.location.city +" , " + user?.location.state
	  );
}
const showRegistered=(e)=>{
	setTitle("My password is ");
	setDescription(
		new Date (user.login.password).toLocaleDateString()
	  );
}
const showemail=(e)=>{
	setTitle("My e-mail is ");
	setDescription(
		user.email
	  );
}

const changeUser=()=>{
	getUser()
};

const add = ()=>{
	(userList.includes(user) || setUserList([...userList,user]))
};

useEffect(()=>{
	getUser()
},[])
  return (
	<div className='block'>
		<div className="container">
			<h1>Random User Generator</h1>
			{/* <i onClick={changeUser} class="fa-solid fa-angles-left"></i> */}
			<img src={user?.picture?.large} alt="..." />
			{/* <i onClick={changeUser} class="fa-solid fa-angles-right"></i> */}
			<p className='title'>{title}</p>
			<p className='description'>{description}</p>
		</div>
		<div className="icon">
		<i onMouseOver={showName} name="My name is"className="fa-regular fa-user"/>
		<i onMouseOver={showemail} name="My e-mail is" className="fa-regular fa-envelope"/>
		<i onMouseOver={showdate} name="I was born  " className="fa-solid fa-calendar-days"/>
		<i onMouseOver={showphone} name="My phone number is" className="fa-solid fa-phone-volume"/>
		<i onMouseOver={showNav} name="My address is" className="fa-regular fa-compass"/>
		<i onMouseOver={showRegistered} name="My contract date is" className="fa-regular fa-handshake"/>
		</div>
		<div className="button">
			<button onClick={changeUser} className='addButton'>New User</button>
			<button className='addButton' onClick={add}>Add User</button>
		</div>
		<div>
		<table className="table">
            <thead>
              <tr className="head-tr">
                <th className="th">Firstname</th>
                <th className="th">Email</th>
                <th className="th">Phone</th>
                <th className="th">Age</th>
              </tr>
            </thead>
            <tbody>
               {userList.map((item) => {
                return (
                  <tr key={item.id.value}>
                    <td>{item.name.first}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.dob.age}</td>
                  </tr>
                ); 
               })} 
            </tbody>
          </table>
		  </div>
		
	</div>
  )
}

export default Card;