import React, {useReducer} from 'react'

// Using Complex state and actions.
const initState = {
    firstCounter: 0,
    secondCounter: 10
};
const reducer = (state,action) => {
    switch(action.type) {
        case 'increment': return { ...state, firstCounter: state.firstCounter + action.value};
        case 'decrement': return { ...state, firstCounter: state.firstCounter - action.value};
        case 'increment2': return { ...state, secondCounter: state.secondCounter + action.value};
        case 'decrement2': return { ...state, secondCounter: state.secondCounter - action.value};
        case 'reset': return initState;
        default: return state;
    }
}

function ReducerHookTwo() {
   const [count, dispatch] = useReducer(reducer, initState);
   // A component can have multiple useReducers
    return (
        <div>
            <p>First Counter: {count.firstCounter}</p>
            <p>Second Counter: {count.secondCounter}</p>
            <div>
                <button onClick={() => dispatch({type: 'increment', value: 1})}>Increment</button>
                <button onClick={() => dispatch({type: 'decrement', value: 1})}>Decrement</button>
                <button onClick={() => dispatch({type: 'increment', value: 5})}>Increment 5</button>
                <button onClick={() => dispatch({type: 'decrement', value: 5})}>Decrement 5</button>
            </div>
            <div>
            <button onClick={() => dispatch({type: 'increment2', value: 1})}>Increment Counter 2</button>
                <button onClick={() => dispatch({type: 'decrement2', value: 1})}>Decrement Counter 2</button>
            </div>
            <div>
                <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
            </div>

        </div>
    )
}

export default ReducerHookTwo
