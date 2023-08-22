import './Ideas.css'
import Card from '../Card/Card'

function Ideas(props) {
  const {name} = props
  return (
    // <div>
    //   <h2>Hello, {name}!</h2>
    //   <h2>My phone # is {props.phone}</h2>
    // </div>
    <div className='ideas-container'>
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default Ideas
