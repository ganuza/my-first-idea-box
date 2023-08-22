import './Ideas.css'

function Ideas(props) {
  const {name} = props
  return (
    <div>
      <h2>Hello, {name}!</h2>
      <h2>My phone # is {props.phone}</h2>
    </div>
  )
}

export default Ideas
