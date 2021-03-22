import React, {useReducer, useEffect} from 'react'
import axios from 'axios'

const initState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
    switch(action.type) {

        case 'FETCH-SUCCESS': return { loading: false, post: action.payload, error:''}
        case 'FETCH-ERROR': return { loading: false, post: {}, error:'Error occured while fetching'}

        default: return state
    }
};
function DataFetchingWithReducerTwo() {
    const [state, dispatch] = useReducer(reducer, initState);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/2').then(res => {
           dispatch({type: 'FETCH-SUCCESS', payload: res.data})
        }).catch( error => {
            dispatch({type: 'FETCH-ERROR'})

        })
        return () => {

        }
    }, [])
   


    return (
        <div>
        {state.loading ? 'Loading .... ' : `Post title: ${state.post.title}`}
        {state.error ? state.error : null}
    </div>
    )
}

export default DataFetchingWithReducerTwo
