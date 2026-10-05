import { Outlet, Link, useNavigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@/context/AuthContext";

/**
 * Inner nav component — consumes AuthContext.
 * Shows: Guest → Login | Authenticated → Student Dashboard + Logout
 */
function MainNav() {
    const { user, authLoading, logout } = useAuth();
    const navigate = useNavigate();

    async function handleLogout() {
        try {
            await logout();
            navigate("/login");
        } catch (error) {
            console.log("LOGOUT ERROR:", error.response?.data);
        }
    }

    return (
        <nav className="border-b border-slate-200 bg-white shadow-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                {/* Logo */}
                <Link
                    to="/"
                    className="text-xl font-bold tracking-tight text-slate-900 transition hover:text-blue-600"
                >
                    School Management
                </Link>

                {/* Navigation links */}
                <ul className="flex items-center gap-2">
                    <li>
                        <Link
                            to="/"
                            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition duration-200 hover:bg-slate-100 hover:text-blue-600"
                        >
                            Home
                        </Link>
                    </li>

                    {/* Show auth links only after auth check resolves */}
                    {!authLoading && (
                        user ? (
                            // Authenticated student
                            <>
                                <li>
                                    <Link
                                        to="/student/dashboard"
                                        className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition duration-200 hover:bg-slate-100 hover:text-blue-600"
                                    >
                                        Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <button
                                        onClick={handleLogout}
                                        className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition duration-200 hover:bg-red-700 hover:shadow-md"
                                    >
                                        Logout
                                    </button>
                                </li>
                            </>
                        ) : (
                            // Guest
                            <li>
                                <Link
                                    to="/login"
                                    className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition duration-200 hover:bg-blue-700 hover:shadow-md"
                                >
                                    Login
                                </Link>
                            </li>
                        )
                    )}
                </ul>

            </div>
        </nav>
    );
}

/**
 * Root layout — principal navigation of the application.
 * Wraps all routes. AuthProvider is mounted here so auth state
 * is available to the nav and all child routes (including StudentDashboardLayout).
 */
export default function Layout() {
    return (
        <AuthProvider>
            <header>
                <MainNav />
            </header>

            <main className="container mx-auto min-h-[calc(100vh-145px)] px-4 py-8">
                <Outlet />
            </main>

            <footer className="border-t border-slate-200 bg-white">
                <div className="mx-auto max-w-7xl px-6 py-5 text-center text-sm text-slate-500">
                    Footer
                </div>
            </footer>
        </AuthProvider>
    );
}