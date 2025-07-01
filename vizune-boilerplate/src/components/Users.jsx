import React, { useEffect, useState } from 'react'

function Users() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        if (!res.ok) throw new Error('Failed to fetch users')
        const data = await res.json()
        setUsers(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  if (loading) return <p>Loading users...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <ul className="space-y-2">
      {users.map((user) => {
        return (
          <li key={user.id} className="border p-2 rounded">
            {user.name}
          </li>
        )
      })}
    </ul>
  )
}

export default Users
