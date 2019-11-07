import React from 'react';
import {voteAnecdote} from '../reducers/anecdoteReducer'
import {setNotification} from '../reducers/notificationReducer'
import {connect} from 'react-redux'

const AnecdoteList = (props) => {
    //const {anecdotes, filter} = props.store.getState();
    const anecdotes = props.anecdotesToShow
    //const filter = props.filter

    const vote = (id) => {
        props.voteAnecdote(id)
        
        const voted = anecdotes.filter(anecdote => anecdote.id === id).content
        props.setNotification(`You voted ${voted}`, 3);
    }
    return (
        <div>
            <h2>Anecdotes</h2>
            {
                anecdotes.map(anecdote =>
                    <div key={anecdote.id}>
                        <div>
                            {anecdote.content}
                        </div>
                        <div>
                            has {anecdote.votes}
                            <button onClick={() => vote(anecdote.id)}>vote</button>
                        </div>
                    </div>
                )}
        </div>
    )
}

const anecdotesToShow = ({anecdotes, filters}) => {
    return anecdotes.filter(anecdote => anecdote.content.includes(filters)).sort((a,b) => b.votes - a.votes)
}

const mapDispatchToStore = {
    voteAnecdote,
    setNotification
}

const mapStateToProps = (state) => {
    return {
        anecdotesToShow: anecdotesToShow(state) 
    }
}

const ConnectedAnecdoteList = connect(mapStateToProps, mapDispatchToStore)(AnecdoteList)

export default ConnectedAnecdoteList