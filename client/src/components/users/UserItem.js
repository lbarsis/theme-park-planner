import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function UserItem({ user }) {
  const [isAdmin, setIsAdmin] = useState(user.admin)
  const [adminErrors, setAdminErrors] = useState(null)

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
        r.json()
      } else {
        r.json().then(errors => setAdminErrors(errors))
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
      {
        adminErrors ? adminErrors.map(errors => <p key={uuidv4()}>{errors}</p>) : null
      }
    </div>
  );
}

export default UserItem;
