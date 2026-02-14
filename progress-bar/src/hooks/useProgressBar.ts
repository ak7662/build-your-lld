import { useEffect, useState } from "react"

const useProgressBar = () => {
    const [progress, setProgress] = useState(0)
    useEffect(() => {
        const intervalId = setInterval(() => {
            setProgress(prevVal => {
                console.log(prevVal);

                if (prevVal < 100) {
                    return prevVal + 1
                } else {
                    clearInterval(intervalId)
                    return 100
                }
            })
        }, 1000)

        return () => clearInterval(intervalId)
    }, [])

    return { progress }
}

export default useProgressBar