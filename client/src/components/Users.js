import React, {useState, useEffect} from 'react';
import UserItem from './UserItem';

function Users({currentUser}) {
  const [userErrors, setUserErrors] = useState(null)
  const [users, setUsers] = useState([])

  useEffect(() => {
    if (currentUser?.admin) {
      fetch('/users').then(r => {
        if (r.ok) {
          r.json().then(users => setUsers(users))
        } else {
          r.json().then(errors => setUserErrors(errors))
        }
      })
    } else {
    }
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
