import React from 'react';
import UserItem from './UserItem';

function Users({ users }) {

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
