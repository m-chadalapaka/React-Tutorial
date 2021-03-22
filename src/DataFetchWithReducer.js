import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetchWithReducer() {
    const [loading, setLoading] = useState(true);
    const [error, setError] =  useState('')
    const [post,setPost] = useState({});


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1').then(res => {
            setLoading(false);
            setPost(res.data);
            setError('');
        }).catch( error => {
            setLoading(false);
            setPost({});
            setError('Error', error);
        })
        return () => {

        }
    }, [])
    return (
        <div>
            {loading ? 'Loading .... ' : post.title}
            {error ? error : null}
        </div>
    )
}

export default DataFetchWithReducer
