import { useState } from 'react'

function useCounter(initCount = 0, value) {
    const [count, setCount] = useState(initCount)
    const increment = () => setCount(count + value);
    const decrement = () => setCount(count - value);
    const reset = () => setCount(initCount);

    return [count, increment, decrement, reset];
}

export default useCounter
