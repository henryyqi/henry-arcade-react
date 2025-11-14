// import PropTypes from 'prop-types'

const Button = ({
    color='steelblue',
    text=''
}) => {
  return (
      <button style={{backgroundColor: color}} className='button'>{text}</button>
  )
}

// Button.propTypes = {
//     color: PropTypes.string,
//     text: PropTypes.string,
//     onClick: PropTypes.func,
// }

export default Button