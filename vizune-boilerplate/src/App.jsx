import { useState } from 'react'

import './styles/App.css'
import Button from './components/Button'
import Users from './components/Users'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col justify-center">
        <Button onClick={() => setCount((count) => count + 1)} className="mb-5">
          count is {count}
        </Button>
        <Users />
      </div>
    </>
  )
}

export default App
