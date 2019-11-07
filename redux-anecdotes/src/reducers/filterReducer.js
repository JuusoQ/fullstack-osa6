const initialState = '';

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FILTER' :
            return action.data.filterText;    
        default:
            return state;
    }
} 

export const filterAnecdotes = (filterText) => {
    return {
        type:'FILTER',
        data: {
            filterText:filterText
        }
    }
}

export default filterReducer