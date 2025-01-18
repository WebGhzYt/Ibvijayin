/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useLocation } from "react-router-dom";
import { useAuthStore } from "../store/auth/authStore";
import logo from '../assets/img/logo.png';
const Header = () => {
    const { isLogin, logout } = useAuthStore();
    const { pathname } = useLocation();

    const handleLogout = () => {
        logout();
    };

    const isActive = (path: any) => pathname === path;

    return (
        <header>
            <div className="header" id="header">
                <nav className="navbar navbar-expand-lg navbar-light bg-white">
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            <img src={logo} alt="logo-png" className="img-fluid" />
                        </Link>
                        <button
                            className="navbar-toggler collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link
                                        className={`nav-link ${isActive("/") ? "active" : ""}`}
                                        to="/"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                            <Link
                                                className={`nav-link ${isActive("/course") ? "active" : ""}`}
                                                to="/course"
                                            >
                                                Course
                                            </Link>
                                        </li>
                                {isLogin && (
                                    <>
                                
                                     
                                        <li className="nav-item">
                                            <Link
                                                className={`nav-link ${isActive("/new-dashboard/index.html") ? "active" : ""}`}
                                                to="./new-dashboard/index.html"
                                            >
                                                Dashboard
                                            </Link>
                                        </li>
                                    </>
                                )}
                            </ul>
                            {isLogin ? (
                                <div className="header-buttons">
                                    <a
                                        onClick={handleLogout}
                                        className="secondary-btn btn"
                                    >
                                        Logout
                                    </a>
                                </div>
                            ) : (
                                <div className="header-buttons">
                                    <Link
                                        to="/login"
                                        className="secondary-btn btn"
                                    >
                                        Login
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
