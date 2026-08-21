"use client";

import { createContext, useContext, useState ,useEffect } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    useEffect(() => {
        const storedUsername = localStorage.getItem("username");
    
        if (storedUsername) {
            setUsername(storedUsername);
            setIsLoggedIn(true);
        }
    }, []);

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                setIsLoggedIn,

                username,
                setUsername,

            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}