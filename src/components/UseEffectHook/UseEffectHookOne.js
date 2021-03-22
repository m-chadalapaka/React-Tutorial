import React, { useState, useEffect } from 'react'

function UseEffectHookOne() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('');   
    useEffect(() => { // runs everytime after component is rendered
        console.log('UseEffect, updating document title');
        document.title = `You clicked ${count} times`;
    },[count]) // Update only when the count changes -- optimization

    return (
        <div>
            <input text={name} onChange={e => setName(e.target.value)}></input>
            <button onClick={() => setCount(count + 1)}> Click {count} times </button>
        </div>
    )
}

export default UseEffectHookOne
