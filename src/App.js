import Card from './Card/Card'
import { useState, useEffect } from 'react'

const URL = 'https://random-data-api.com/api/v2/users'

function App() {
  const [user, setUser] = useState(undefined)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(URL)
      const res = await response.json()
      setUser(res)
      setLoading(false)
    }

    fetchUser()
  }, [])

  if (loading) return <span>Loading...</span>

  return <Card user={user} />
}

export default App
