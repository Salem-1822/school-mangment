
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header>
        <nav className="border-b border-gray-200 bg-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

            {/* Logo */}
            <Link
              to="/"
              className="text-xl font-bold text-gray-900"
            >
              School Management
            </Link>

            {/* Navigation */}
            <ul className="flex items-center gap-6">
              <li>
                <Link
                  to="/"
                  className="text-gray-700 transition hover:text-blue-600"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/users"
                  className="text-gray-700 transition hover:text-blue-600"
                >
                  Users
                </Link>
              </li>

              <li>
                <Link
                  to="/button"
                  className="text-gray-700 transition hover:text-blue-600"
                >
                  Button
                </Link>
              </li>

              <li>
                <Link
                  to="/login"
                  className="text-gray-700 transition hover:text-blue-600"
                >
                  Login
                </Link>
              </li>

              <li>
                <Link
                  to="/register"
                  className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
                >
                  Register
                </Link>
              </li>
            </ul>

          </div>
        </nav>
      </header>

      <main className={'container mx-auto px-4 py-8'}>
        <Outlet />
      </main>

      <footer>
        Footer
      </footer>
    </>
  );
}
