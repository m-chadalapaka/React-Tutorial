import { useEffect } from 'react'

function useDocumentTitle(count) {
    useEffect(() => {

        document.title = `Count is ${count}`
        return () => {
            // cleanup
        }
    }, [count])
}

export default useDocumentTitle
