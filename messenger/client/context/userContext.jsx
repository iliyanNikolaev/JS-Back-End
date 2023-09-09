import { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {

    const [authData, setAuthData] = useState({});

    async function login(username) {
        try {
            const response = await fetch('http://localhost:3030/api/users', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username })
            });

            const data = await response.json();

            setAuthData(data);

            return data;   
        } catch (err) {
            throw err;
        }
    }

    const ctx = {
        authData,
        login
    }

    return (
        <UserContext.Provider value={ctx}>
            {children}
        </UserContext.Provider>
    )
}
