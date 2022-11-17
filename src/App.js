import Card from './Card/Card'
import './App.css'
import { useState, useEffect } from 'react'

const URL = 'https://random-data-api.com/api/v2/users'

function App() {
  const [user, setUser] = useState(undefined)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(URL)
      const res = await response.json()
      console.log('response', res)
      setUser(res)
      setLoading(false)
    }

    fetchUser()
  }, [])

  return <div className='bg-global'>{loading ? <span>Loading...</span> : <Card user={user} />}</div>
}

export default App
