import './Ideas.css'
import Card from '../Card/Card'

function Ideas({ ideas }) {
  const ideaCards = ideas.map(idea => {
    return (
      <Card
        title={idea.title}
        description={idea.description}
        id={idea.id}
        key={idea.id}
      />
    )
  })

  return (
    // <div>
    //   <h2>Hello, {name}!</h2>
    //   <h2>My phone # is {props.phone}</h2>
    // </div>
    <div className='ideas-container'>
      {ideaCards}
    </div>
  )
}

export default Ideas
