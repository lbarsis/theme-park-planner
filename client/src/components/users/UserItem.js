import React, { useState } from 'react';

function UserItem({ user }) {
  const [isAdmin, setIsAdmin] = useState(user.admin)

  function handleAssignAdmin() {

    fetch(`/users/${user.id}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        admin: !isAdmin
      })
    })
    .then(r => {
      if (r.ok) {
        r.json().then(user => console.log(user))
      } else {
        r.json().then(errors => console.log(errors))
      }
    })

    setIsAdmin(admin => !admin)
  }

  return (
    <div key={user.id}>
      <p>
        {user.username}
        <input type="checkbox" id="vehicle1" onChange={handleAssignAdmin} checked={isAdmin} />
      </p>
    </div>
  );
}

export default UserItem;
