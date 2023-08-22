import { useState } from 'react'
import './App.css'

function App() {

  const [ideas, setIdea] = useState([])

  return (
    <main className='App'>
      <h1>IdeaBox</h1>
      <p>Hi!</p>
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