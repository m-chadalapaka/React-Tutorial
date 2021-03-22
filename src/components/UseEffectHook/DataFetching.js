import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {

    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [idB,setIdB] = useState(1);

    const handleClick = () => { setIdB (id)};

    useEffect(() => {

        axios.get(`https://jsonplaceholder.typicode.com/posts/${idB}`).then(res => {
            console.log(res);
            setPost(res.data)
        }).catch(err => console.log(err));               
    }, [idB])
    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)}></input>
            <button onClick={handleClick}>Fetch Post</button>
            <p>{post.title}</p>
            {/* <ul>
                {
                    posts.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul> */}
        </div>
    )
}

export default DataFetching
