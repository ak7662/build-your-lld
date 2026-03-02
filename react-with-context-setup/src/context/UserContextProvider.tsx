import { createContext, useContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react"

type UserType = {
    id: number;
    name: string;
}

type UserContextType = { // Object literal may only specify known properties, and 'user' does not exist in type 'UserType'.ts(2353)
    user: UserType;
    setUser: Dispatch<SetStateAction<UserType>>
}

export const UserContext = createContext<UserContextType | null>(null)

const UserContextProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<UserType>({
        name: "Abhishek",
        id: 123
    })
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider

// Property 'user' does not exist on type 'UserContextType | null'.

export const useUser = () => {
    const context = useContext(UserContext)
    if (!context) {
        throw new Error("useUser must be used inside UserContextProvider")
    }
    return context
}