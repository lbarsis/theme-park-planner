import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../context/userContext';
import UserItem from './UserItem';

function Users() {
  const { users, setUsers } = useContext(UserContext)
    
  useEffect(() => {
    fetch('/users').then(r => {
      if (r.ok) {
        r.json().then(users => setUsers(users))
      } 
    })

  }, [])

  const displayUsers = users.map(user => {
    return <UserItem key={user.id} user={user} />
  })

  return (
    <div>
      {displayUsers}
    </div>
  );
}

export default Users;
