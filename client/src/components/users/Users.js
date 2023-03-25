import React, { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import UserItem from './UserItem';

function Users() {
  const { users } = useContext(UserContext)

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
