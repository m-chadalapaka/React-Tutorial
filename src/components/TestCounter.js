import React, { useState, useEffect } from 'react'

function TestCounter() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        // effect
         // Update the document title on click of the counter
         document.title = `Clicked ${count} times`
        return () => {
            // cleanup (unmounting)
           document.title = '';
        }
    },[count]) // Dependency array
    return (
        <div>
            <p>Clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}> Increment</button>
        </div>
    )
}

export default TestCounter
