import React, {useState, useEffect} from 'react'

const EditUSerForm = (props) => {
  const [user, setUser]= useState(props.currentUser)

  useEffect(()=>{
    setUser(props.currentUser)
  }, [props])

  const handleInputChange=e=>{
    const {name, value} =e.target
    setUser({...user, [name]: value})
  }

  const handleSubmit=e=>{
    e.preventDefault();
    props.updateUser(user.id, user)
  }

  return (
    <form>
      <label>Name</label>
      <input type='text' name='name' value={user.name} onChange={handleInputChange}/>
      <label>Username</label>
      <input type='text' name='username' value={user.username} onChange={handleInputChange}/>
      <button onClick={handleSubmit}>Update user</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditUSerForm
