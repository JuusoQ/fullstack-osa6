import React, { useEffect } from 'react';
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'
import { initalizeAnecdotes } from "./reducers/anecdoteReducer";
import { connect } from 'react-redux'

const App = (props) => {

  useEffect(() => {
    props.initalizeAnecdotes();
  })

  return (
    <div>
      <Filter />
      <Notification />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default connect(null, { initalizeAnecdotes })(App)