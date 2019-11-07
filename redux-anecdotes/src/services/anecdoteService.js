import axios from 'axios';

const url = 'http://localhost:3001/anecdotes'

const randomID = () => {
    return Math.floor(Math.random() * Math.floor(10000)).toString();
}

const getAll = async () => {
    const response = await axios.get(url);
    return response.data
}

const create = async (content) => {
    const object = { content: content, id: randomID(), votes: 0 }
    const response = await axios.post(url, object)
    return response.data
}


const voteAnecdote = async (id) => {
    const existing = await axios.get(url + '/' + id)
    console.log(existing)
    const found = existing.data
    const votes = found.votes + 1
    const anecdoteToUpdate = { ...found, votes }
    const response = await axios.put(url + '/' + id, anecdoteToUpdate)
    return response.data
}


export default {
    getAll,
    create,
    voteAnecdote
}