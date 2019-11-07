import React from 'react';
// eslint-disable-next-line
import { addAnecdote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';
import { connect } from 'react-redux';

const AnecdoteForm = (props) => {
    const add = async (event) => {
        event.preventDefault();
        const content = event.target.anecdote.value;
        props.addAnecdote(content)

        props.setNotification(`Added: ${content}`, 5)
        event.target.anecdote.value = '';
        console.log(content)
    }

    return (
        <div>
            <h2>create new</h2>

            <form onSubmit={add}>
                <input type="text" name="anecdote" />
                <input type="submit" />
            </form>
        </div>
    )
}

const mapDispatchToStore = {
    addAnecdote,
    setNotification
}

export default connect(null, mapDispatchToStore)(AnecdoteForm);