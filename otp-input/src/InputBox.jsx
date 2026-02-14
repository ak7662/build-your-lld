import { useEffect, useRef, useState } from "react"

const InputBox = ({ focuusInput, setFocusInput, InputBoxNo }) => {
    const [inputValue, setInputValue] = useState("")
    const inputRef = useRef(null)

    const handleChange = (e) => {
        const val = e.target.value
        setInputValue(val)
        setFocusInput(preVVal => preVVal + 1)
        console.log(val);

    }

    useEffect(() => {
        if (focuusInput === InputBoxNo) {
            if (inputRef?.current) {
                inputRef?.current.focus()
            }
        }
    }, [focuusInput])
    return (
        <>
            <input
                ref={inputRef}
                onChange={handleChange}
                className="input-box"
                type="text"
                value={inputValue}
                maxLength={1} />
        </>
    )
}

export default InputBox