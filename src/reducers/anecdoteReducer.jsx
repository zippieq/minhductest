import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'
/* eslint-disable no-case-declarations */

const AnecdoteSlice = createSlice({
  name: 'anecdote',
  initialState: [],
  reducers: {
    
    vote (state ,action) {
    console.log(JSON.parse(JSON.stringify(state)))
    const id = action.payload
    console.log(id)
    const anecdoteToChange = state.find(n => n.id === id)
    console.log(anecdoteToChange)
    const changedanecdote = { 
      ...anecdoteToChange, 
      votes : anecdoteToChange.votes + 1
    }

    return state.map(anecdote =>
      anecdote.id !== id ? anecdote : changedanecdote )
    
  },

  appendAnecdote(state, action) {
    state.push(action.payload)
  },
  setAnecdotes(state, action) {
    return action.payload
  }},

})

export const { vote, appendAnecdote, setAnecdotes } = AnecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    
    dispatch(appendAnecdote(newAnecdote))
  }
}



export default AnecdoteSlice.reducer