import React, { useState } from 'react'

function HookCounter() {

    const [count, setCount] = useState(0); // default count is zero
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count is {count}</button>
        </div>
    )
}

export default HookCounter
