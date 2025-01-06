import './botton.css'
import PropTypes from 'prop-types'

const BottonSubstract = ({ count, setCount }) => {
  const RemoveOne = () => {
    setCount(count - 1)
  }

  return <button onClick={RemoveOne}> Remove +1</button>
}
BottonSubstract.propTypes = {
  setCount: PropTypes.func,
  count: PropTypes.number
}
export default BottonSubstract
