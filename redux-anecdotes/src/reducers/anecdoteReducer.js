
import anecdoteService from '../services/anecdoteService';

const getId = () => (100000 * Math.random()).toFixed(0)


// eslint-disable-next-line
const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}


const anecdoteReducer = (state = [], action) => {
  
  switch (action.type) {
    case 'VOTE':
      const id = action.data.id;
      const idToUpdate = state.find(n => n.id === id)
      const voted = {
        ...idToUpdate,
        votes: idToUpdate.votes + 1
      }
      return state.map(anecdote => anecdote.id !== id ? anecdote : voted);
    case 'NEW':
      return [...state, action.data]
    case 'INIT':
      return action.data
    default:
      return state
  }
}

/* export const voteAnecdote = (id) => {
  return {
    type: 'VOTE',
    data: {
      id: id
    }
  }
} */

export const voteAnecdote = (id) => {
  return async dispatch => {
    const response = await anecdoteService.voteAnecdote(id)
    dispatch({
      type:'VOTE',
      data: {
        id: response.id
      }
    })
  }
}


export const addAnecdote = (anecdote) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.create(anecdote);
    dispatch({
      type: 'NEW',
      data: newAnecdote 
    })
  }
};


export const initalizeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll();
    dispatch({
      type: 'INIT',
      data: anecdotes
    })
  }
}

export default anecdoteReducer