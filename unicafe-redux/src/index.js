import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {

  const giveVote = (vote) => {
    store.dispatch({
      type:vote
    })
  }

  const average = () => {
    let yhteensa = store.getState().good + store.getState().ok + store.getState().bad
    let tulot = 1*store.getState().good + 0*store.getState().ok + (-1)*store.getState().bad
    return isNaN((tulot/yhteensa)) === true ? 0 : (tulot/yhteensa) 
  }

  const positives = () => {
    let positiivisia = (store.getState().good/(store.getState().good + store.getState().ok + store.getState().bad))*100
    return isNaN(positiivisia) === true ? 0 : positiivisia 
  }

  return (
    <div>
      <h1>Äänestä</h1>
      <button onClick={()=>giveVote('GOOD')}>hyvä</button> 
      <button onClick={()=>giveVote('OK')}>neutraali</button> 
      <button onClick={()=>giveVote('BAD')}>huono</button>
      <button onClick={()=>giveVote('ZERO')}>nollaa tilastot</button>
      <h1>Tilastot</h1>
      <div>hyvä {store.getState().good}</div>
      <div>neutraali {store.getState().ok}</div>
      <div>huono {store.getState().bad}</div>
      <div>Yhteensä: {store.getState().good + store.getState().ok + store.getState().bad} </div>
      <div>Keskiarvo: {average()}</div>
      <div>Positiviisia: {positives()} % </div>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
