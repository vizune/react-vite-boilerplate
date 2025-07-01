import { useState } from 'react'

import './styles/App.css'
import { Button } from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="flex justify-center">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>
    </>
  )
}

export default App
