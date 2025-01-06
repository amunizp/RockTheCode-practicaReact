import './botton.css'
import PropTypes from 'prop-types'

const BottonAdd = ({ count, setCount }) => {
  const AddOne = () => {
    setCount(count + 1)
  }

  return <button onClick={AddOne}> Add up +1</button>
}
BottonAdd.propTypes = { setCount: PropTypes.func, count: PropTypes.number }
export default BottonAdd
