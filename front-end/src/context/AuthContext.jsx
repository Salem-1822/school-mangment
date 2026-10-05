import { createContext, useContext, useEffect, useState } from "react";
import axiosClient from "@/axiosClient";

const AuthContext = createContext(null);

/**
 * Provides authentication state to the entire application.
 * Fetches GET /api/user once on mount.
 * Exposes: user, setUser, authLoading, logout
 */
export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [authLoading, setAuthLoading] = useState(true);

    useEffect(() => {
        axiosClient
            .get("/api/user")
            .then(({ data }) => {
                setUser(data);
            })
            .catch(() => {
                // 401 = not authenticated — keep user as null
                setUser(null);
            })
            .finally(() => {
                setAuthLoading(false);
            });
    }, []);

    /**
     * Calls POST /logout on the backend root (not /api/logout).
     * Clears local user state on success.
     */
    async function logout() {
        await axiosClient.post(
            "/logout",
            {},
            { baseURL: import.meta.env.VITE_BACKEND_URL }
        );
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, setUser, authLoading, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
    return useContext(AuthContext);
}
