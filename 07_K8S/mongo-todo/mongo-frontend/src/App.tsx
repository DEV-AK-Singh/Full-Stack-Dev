import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [users, setUsers] = useState([])

  const fetchAllUsers = async () : Promise<void> => {
    const response = await fetch('/api/users')
    const data = await response.json()
    setUsers(data)
  };

  useEffect(() => {
    fetchAllUsers()
  }, []);

  return (
    <>
      <h1>K8S App</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any) => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App
