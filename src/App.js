import React, {useState} from 'react';

import UserTable from './components/table/UserTable'
import AddUserForm from './components/forms/AddUserForm'
import EditUserForm from './components/forms/EditUSerForm'

const App= ()=> {
  const userData=[
    { id: 1, name: 'Thanh', username: 'yogathanh' },
    { id: 2, name: 'Tester 1', username: 'test-1' },
    { id: 3, name: 'Ben', username: 'benisphere' },
  ]

  const initialFormState = { id: null, name: '', username: '' }
  const [users, setUsers]= useState(userData)
  const [currentUser, setCurrentUser] = useState(initialFormState)
  const [editing, setEditing] = useState(false)

  const handleAddUser= user=>{
    user.id=users.length+1
    setUsers([...users, user])
  }

  const deleteUser=id=>{
    setUsers(users.filter(user=>user.id!==id))
  }

  const updateUser=(id, updatedUser)=>{
    setEditing(false)
    setUsers(users.map(user=> user.id === id ? updatedUser : user))
  }

  const editRow=user=>{
    setEditing(true)
    setCurrentUser({id: user.id, name: user.name, username: user.username})
  }

  return (
    <div className="container">
      <h1>CRUD with Hooks</h1>
      <div className='flex-row'>
        <div className='flex-large'>
          {editing ? (
            <div>
              <h2>Edit User</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ): (
            <div>
              <h2>Add User</h2>
              <AddUserForm addUser={handleAddUser}/>
            </div>
          )}
        </div>
        <div className='flex-large'>
          <h2>View Users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser}/>
        </div>
      </div>
    </div>
  );
}

export default App;
