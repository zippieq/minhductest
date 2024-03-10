import { useEffect } from 'react'
import  NewAnecdote  from './components/NewAnecdote'
import  Anecdotes  from './components/Anecdotes'
import  Filter  from './components/Filter'
import Notification from './components/Notification'
import { useDispatch } from 'react-redux'
import { initializeAnecdotes } from './reducers/anecdoteReducer'

const App = () => {

  const dispatch = useDispatch()
 
  useEffect(() => {
    dispatch(initializeAnecdotes()) 
  }, []) 

    return (
    <div>
      <Notification/>
      <Filter/>
      <NewAnecdote/>
      <Anecdotes/>
    </div>
  )
}

export default App