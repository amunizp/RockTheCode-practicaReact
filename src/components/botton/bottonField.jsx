import Field from '../field/field'
import './botton.css'
import PropTypes from 'prop-types'

const BottonField = ({ count, setCount }) => {
  const CreateField = () => {
    setCount(count - 5)
    return (
      <div>
        <Field />
      </div>
    )
  }

  return (
    <button onClick={CreateField} className='fieldBotton'>
      {' '}
      Add a field 🟫
    </button>
  )
}
BottonField.propTypes = {
  setCount: PropTypes.func,
  count: PropTypes.number
}
export default BottonField
