import { Outlet, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosClient from "@/axiosClient";

export default function StudentDashboardLayout() {
    const navigate = useNavigate();

    const [user, setUser] = useState({});

    useEffect(() => {
        if (!window.localStorage.getItem("token")) {
            navigate("/login");
            return;
        }

        axiosClient.get("/user").then(({ data }) => {
            setUser(data);
        });
    }, [navigate]);

    return (
        <>
            <header>
                <nav className="border-b border-slate-200 bg-white shadow-sm">
                    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                        {/* Logo */}
                        <Link
                            to="/"
                            className="text-xl font-bold tracking-tight text-slate-900 transition hover:text-blue-600"
                        >
                            School Management
                        </Link>

                        {/* Navigation */}
                        <ul className="flex items-center gap-2">
                            <li>
                                <Link
                                    to="/"
                                    className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition duration-200 hover:bg-slate-100 hover:text-blue-600"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/login"
                                    className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition duration-200 hover:bg-blue-700 hover:shadow-md"
                                >
                                    Log
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

            <main className="container mx-auto min-h-[calc(100vh-145px)] px-4 py-8">

                {/* User Table */}
                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">

                    <div className="border-b border-slate-200 px-6 py-4">
                        <h2 className="text-lg font-semibold text-slate-900">
                            Student Information
                        </h2>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-slate-50 text-xs uppercase text-slate-600">
                                <tr>
                                    <th className="px-6 py-4">ID</th>
                                    <th className="px-6 py-4">Name</th>
                                    <th className="px-6 py-4">Email</th>
                                    <th className="px-6 py-4">Email Status</th>
                                    <th className="px-6 py-4">Created At</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr className="border-t border-slate-200 hover:bg-slate-50">

                                    <td className="px-6 py-4 font-medium text-slate-900">
                                        {user.id}
                                    </td>

                                    <td className="px-6 py-4 text-slate-700">
                                        {user.name}
                                    </td>

                                    <td className="px-6 py-4 text-slate-700">
                                        {user.email}
                                    </td>

                                    <td className="px-6 py-4">
                                        {user.email_verified_at ? (
                                            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                                                Verified
                                            </span>
                                        ) : (
                                            <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-700">
                                                Not Verified
                                            </span>
                                        )}
                                    </td>

                                    <td className="px-6 py-4 text-slate-600">
                                        {user.created_at}
                                    </td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Child routes */}
                <div className="mt-8">
                    <Outlet />
                </div>

            </main>

            <footer className="border-t border-slate-200 bg-white">
                <div className="mx-auto max-w-7xl px-6 py-5 text-center text-sm text-slate-500">
                    Footer
                </div>
            </footer>
        </>
    );
}