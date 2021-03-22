import React , {useState, useEffect, useRef} from 'react'

function HookTimer() {
    const [timer, setTimer] = useState(0);
    const intervalRef = useRef()

    useEffect(() => {        
        intervalRef.current = setInterval(() => {
            setTimer(preVTimer => preVTimer + 1)
        },1000)
        return () => {
            // cleanup
            clearInterval(intervalRef.current)
        }
    }, [])
    return (
        <div>
            Hook Timer -- {timer}
            <div>
                    <button onClick={() => clearInterval(intervalRef.current)}>Stop Timer</button>
                </div>
        </div>
        
    )
}

export default HookTimer
