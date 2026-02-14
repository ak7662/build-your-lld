import { useEffect, useState } from "react"

const useFetchye = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState("")
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json())
            .then(data => {
                setData(data)
                setIsLoading(false)
            })
            .catch(err => setError(err))
    }, [])

    return { data, isLoading, error }

}

export default useFetchye