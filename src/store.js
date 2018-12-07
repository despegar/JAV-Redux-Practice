import { createStore } from 'redux';

const reducer = (state, action) => {
    if (action.type === 'ADD_TO_LIST') {
        return {
            ...state,
            list: state.list.concat(action.item)
        }
    }
    return state;
}

export default createStore(reducer, {list: []});