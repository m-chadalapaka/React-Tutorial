import React, { useState, useMemo } from 'react'

function Counter() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)
    const incrementOne = () => setCounterOne(counterOne + 1);
    const incrementTwo = () => setCounterTwo(counterTwo + 1);
    const isEven =  useMemo(
        () => {
            let i=0;
            while(i<30000000) i++ ; //Code to add slowness.. does nothing
            return (counterOne % 2 === 0)}, [counterOne])
    // const isEven = () => {return (counterOne % 2 === 0)}
    return (
        <div>
            <div>
                <button onClick={incrementOne}>Count one -- {counterOne}</button>
                <span>{isEven ? 'Even' : 'Odd'}</span>
            </div>
            <div>
                <button onClick={incrementTwo}>Count two -- {counterTwo}</button>
            </div>
        </div>
    )
}

export default Counter
