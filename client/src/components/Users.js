import React, {useEffect, useState} from 'react';

function Users({users}) {

  const displayUsers = users.map(user => <p key={user.id}>{user.username}</p>)

  return (
    <div>
      {displayUsers}
    </div>
  );
}

export default Users;
