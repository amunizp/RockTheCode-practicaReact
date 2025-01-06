import { useState } from 'react'
import ShowCount from '../ShowCount/ShowCount'
import './home.css'
import BottonAdd from '../botton/bottonAdd'
import BottonSubstract from '../botton/bottonSubstract'
import ButtonField from '../botton/bottonField'

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
      <p>
        {count % 5 === 0
          ? 'This is a multiple of 5'
          : 'This is not a multiple of 5'}
        {count % 5 === 0 ? (
          <ButtonField count={count} setCount={setCount} />
        ) : null}
      </p>
    </main>
  )
}

export default Home
