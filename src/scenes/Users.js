import React, { useEffect, useState } from 'react'
import { Button } from 'react-materialize'

function Users() {
  const [allUsers, setAllUsers] = useState()
  const [newUser, setNewUser] = useState({})

  useEffect(() => {
    fetch(`${process.env.REACT_APP_ENDPOINT}/users`)
      .then((response) => response.json())
      .then((data) => setAllUsers(data))
      .catch((err) => console.log('This is a error', err))
  }, [])

  function createUser(){
      fetch(`'${process.env.REACT_APP_ENDPOINT}:5000/signup`,{
          method:'POST',
          headers:{
              Accept:'application/json',
              'Content-Type':'application/json'
          },
          body:JSON.stringify(newUser)
      })
  }
  console.log('all users here', allUsers)

  return (
    <div className="container scrollArea">
      <ul class="collection with-header">
        <li class="collection-header">
          <h4>Users</h4>
        </li>

        {allUsers &&
          allUsers.map((user) => {
            return (
              <li class="collection-item">
                <div>
                  {user.email} / {user.firstName} {user.lastName}
                  <a href="#!" class="secondary-content">
                    <i class="material-icons">send</i>
                  </a>
                </div>
              </li>
            )
          })}
      </ul>
      <label>email </label>
      <input onChange={e=> setNewUser({...newUser,email:e.target.value})} />
      <label>Password </label>
      <input onChange={e=> setNewUser({...newUser,password:e.target.value})} />
      <label>First Name </label>
      <input onChange={e=> setNewUser({...newUser,firstName:e.target.value})} />
      <label>Last Name </label>
      <input onChange={e=> setNewUser({...newUser,lastName:e.target.value})} />
      <label>Testing</label>
      <input onChange={e=> setNewUser({...newUser,test:e.target.value})} />
      <button class="background button"onClick={()=>createUser()}>Create User</button>
    
      
    </div>
  )
}

export default Users
