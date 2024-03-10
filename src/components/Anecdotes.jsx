import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const Anecdotes = () => {
    
    // eslint-disable-next-line no-unused-vars
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => (      
        state.anecdote.filter(anecdote => anecdote.content.toUpperCase().includes(state.filter.toUpperCase()))
        ))
    return(
    <ul>
        <h2>Anecdotes</h2>
        {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
          <div key={anecdote.id}>
            <div>

              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => { 
                dispatch(vote(anecdote.id))
                dispatch(setNotification(`You voted "${anecdote.content}"`))
              }}>vote</button>

                
            </div>
            </div>)}
          </ul>
          )          
}

export default Anecdotes

