import React , { useState } from 'react'

function HookCounterTwo() {

    const initcount = 0;
    const [count, setcount] = useState(initcount);

    return (
        <div>
            Count: {count}
            <button onClick={() => setcount(initcount) }>Reset</button>
            <button onClick={() => setcount(prevCount => prevCount+1)}>Increment</button>
            <button onClick={() => setcount(prevCount => prevCount-1)}>Decrement</button>
            <button onClick={() => setcount(prevCount => prevCount+5)}>Increment5</button>
        </div>
    )
}

export default HookCounterTwo
