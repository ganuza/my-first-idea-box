import { useState } from 'react'
import './App.css'
import Ideas from '../Ideas/Ideas'

function App() {
  const dummyIdeas = [
    { id: 1, title: 'Prank Travis', description: 'Stick googly eyes on all his stuff' },
    { id: 2, title: 'Make a secret password app', description: 'So you your rideshare driver can both know neither one of you is lying' },
    { id: 3, title: 'Learn a martial art', description: 'To exact vengeance upon my enemies' },
  ]
  const [ideas, setIdeas] = useState([])

  console.log(ideas)

  return (
    <main className='App'>
      <h1>IdeaBox</h1>
      {!ideas.length && <h2>No ideas yet -- add some!</h2>}
      <Ideas ideas={ideas} />
    </main>
  )
}

export default App



// you want to return a title of IdeaBox in an h1
// this worked

// you want to return a paragraph of Hi! in <p>
// now we have 2 things being returned which causes an error.  You can only return ONE thing.  Let's wrap the <h1> and <p> in something (<main>) and now it works again

// set up useState and set variables ideas, setIdeas

// you'll want to put a class on the container that holds your returns and call it 'App'