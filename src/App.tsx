import './index.css'
import Landing from './components/Landing'
import MarketPlace from './components/MarketPlace'
import { useState } from 'react'

function App() {
  const [signedIn, setSignedIn] = useState(false)

  return (
    <>
      {signedIn ? <MarketPlace flipper={() => setSignedIn(false)}/> : <Landing flipper={() => setSignedIn(true)}/>}
      
    </>
  )
}

export default App
