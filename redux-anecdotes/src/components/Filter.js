import React from 'react'
import {filterAnecdotes} from '../reducers/filterReducer'
import {connect} from 'react-redux';

const Filter = (props) => {

  const handleChange = (event) => {
    // input-kentän arvo muuttujassa event.target.value
    const value = event.target.value;
    props.filterAnecdotes(value)
    
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    filter: state.filter
  }
}

const mapDispatchToStore = {
  filterAnecdotes
}

const ConnectedFilter = connect(mapStateToProps, mapDispatchToStore)(Filter)

export default ConnectedFilter;