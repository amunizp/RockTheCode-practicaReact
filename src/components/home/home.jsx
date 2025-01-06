import { useState } from 'react'
import ShowCount from '../ShowCount/ShowCount'
import './home.css'
import BottonAdd from '../botton/bottonAdd'
import BottonSubstract from '../botton/bottonSubstract'

const Home = () => {
  const [count, setCount] = useState(0)

  return (
    <main>
      <h2>Main or Home section</h2>
      <ShowCount count={count} />
      <p>
        <BottonAdd count={count} setCount={setCount} />
        <BottonSubstract count={count} setCount={setCount} />
      </p>
    </main>
  )
}

export default Home
