import PropTypes from 'prop-types'

const ShowCount = ({ count }) => {
  return (
    <div className='card'>
      <h3>Your count is {count}</h3>
    </div>
  )
}

ShowCount.propTypes = { count: PropTypes.number }

export default ShowCount

// const [count, setCount] = useState(0)
