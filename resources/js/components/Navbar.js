import React from "react";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";

const Navbar = () => {
    // const { url } = history.state;
    const { auth, isLoggedIn, isGuest } = usePage().props;
    const url = window.location.pathname;
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div className="container">
                <InertiaLink className="navbar-brand" href="/">
                    Laravel
                </InertiaLink>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li
                            className={
                                url == "/" ? "nav-item active" : "nav-item"
                            }
                        >
                            <InertiaLink
                                className="nav-link"
                                href={route("home")}
                            >
                                Home <span className="sr-only"></span>
                            </InertiaLink>
                        </li>
                        <li
                            className={
                                url == route("users.index")
                                    ? "nav-item active"
                                    : "nav-item"
                            }
                        >
                            <InertiaLink
                                className="nav-link"
                                href={route("users.index")}
                            >
                                Users
                            </InertiaLink>
                        </li>
                    </ul>

                    <ul className="navbar-nav me-auto"></ul>

                    <ul className="navbar-nav ms-auto">
                        {auth.isGuest && (
                            <React.Fragment>
                                <li className="nav-item">
                                    <InertiaLink
                                        className="nav-link"
                                        href={route("login")}
                                    >
                                        Login
                                    </InertiaLink>
                                </li>

                                <li className="nav-item">
                                    <InertiaLink
                                        className="nav-link"
                                        href={route("register")}
                                    >
                                        Register
                                    </InertiaLink>
                                </li>
                            </React.Fragment>
                        )}

                        {auth.user && (
                            <React.Fragment>
                                <li className="nav-item dropdown">
                                    <InertiaLink
                                        id="navbarDropdown"
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        {auth.user.name}
                                    </InertiaLink>

                                    <div
                                        className="dropdown-menu dropdown-menu-end"
                                        aria-labelledby="navbarDropdown"
                                    >
                                        <InertiaLink
                                            method="post"
                                            className="dropdown-item"
                                            href={route("logout")}
                                            as="button"
                                        >
                                            Logout
                                        </InertiaLink>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Dropdown link
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Action
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Another action
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Something else here
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </React.Fragment>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
