import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";

/**
 * StudentDashboardLayout
 *
 * - Reads authentication state from AuthContext (no duplicate /api/user fetch).
 * - If not yet loaded: shows a loading indicator.
 * - If authenticated: renders the student information and <Outlet />.
 * - If not authenticated (401): redirects to /login.
 *
 * The principal navigation (header/navbar/footer) is provided by Layout.jsx.
 * This component does NOT create a second navbar.
 */
export default function StudentDashboardLayout() {
    const { user, authLoading } = useAuth();
    const navigate = useNavigate();

    // Redirect unauthenticated visitors to login
    useEffect(() => {
        if (!authLoading && !user) {
            navigate("/login");
        }
    }, [authLoading, user, navigate]);

    // While the auth check is running, show a neutral loading state
    if (authLoading) {
        return (
            <div className="flex items-center justify-center py-24 text-slate-500">
                Checking authentication…
            </div>
        );
    }

    // Do not flash dashboard content while redirect is in-flight
    if (!user) {
        return null;
    }

    return (
        <div className="space-y-6">

            {/* Page heading */}
            <div>
                <h1 className="text-2xl font-bold text-slate-900">
                    Student Dashboard
                </h1>
                <p className="mt-1 text-sm text-slate-500">
                    Welcome back, {user.name}.
                </p>
            </div>

            {/* Student information card */}
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">

                <div className="border-b border-slate-200 px-6 py-4">
                    <h2 className="text-base font-semibold text-slate-800">
                        Account Information
                    </h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">

                        <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500">
                            <tr>
                                <th className="px-6 py-3">ID</th>
                                <th className="px-6 py-3">Name</th>
                                <th className="px-6 py-3">Email</th>
                                <th className="px-6 py-3">Email Status</th>
                                <th className="px-6 py-3">Member Since</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-slate-100 text-slate-700">
                            <tr>
                                <td className="px-6 py-4">{user.id}</td>
                                <td className="px-6 py-4 font-medium">{user.name}</td>
                                <td className="px-6 py-4">{user.email}</td>
                                <td className="px-6 py-4">
                                    {user.email_verified_at ? (
                                        <span className="inline-flex items-center rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-700">
                                            Verified
                                        </span>
                                    ) : (
                                        <span className="inline-flex items-center rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-700">
                                            Not Verified
                                        </span>
                                    )}
                                </td>
                                <td className="px-6 py-4">
                                    {new Date(user.created_at).toLocaleDateString()}
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>

            </div>

            {/* Child route content (StudentDashboard index or future sub-pages) */}
            <Outlet />

        </div>
    );
}