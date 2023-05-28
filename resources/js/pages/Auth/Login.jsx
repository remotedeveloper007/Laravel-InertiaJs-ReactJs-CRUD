import React, { useState } from "react";
import Front from "../../layouts/Front";
import { Inertia } from "@inertiajs/inertia";

function Login({ errors }) {
    const [values, setValues] = useState({
        email: "",
        password: ""
    });

    const changeHandler = (e) => {
        e.persist();
        const key = e.target.id;
        setValues((values) => ({ ...values, [key]: e.target.value }));
    };

    function submitHandler(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("email", values.email);
        formData.append("password", values.password);

        Inertia.post("/login", formData);
    }

    return (
        <Front title="Login Users">
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Login</div>

                            <div className="card-body">
                                <form onSubmit={submitHandler}>
                                    <div className="row mb-3">
                                        <label
                                            htmlFor="email"
                                            className="col-md-4 col-form-label text-md-end"
                                        >
                                            Email Address
                                        </label>

                                        <div className="col-md-6">
                                            <input
                                                id="email"
                                                type="email"
                                                className="form-control"
                                                name="email"
                                                value={values.email}
                                                onChange={changeHandler}
                                                required
                                                autoComplete="email"
                                            />

                                            {errors.email && (
                                                <span
                                                    className="text-danger"
                                                    role="alert"
                                                >
                                                    {errors.email}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label
                                            htmlFor="password"
                                            className="col-md-4 col-form-label text-md-end"
                                        >
                                            Password
                                        </label>

                                        <div className="col-md-6">
                                            <input
                                                id="password"
                                                type="password"
                                                className="form-control {errors.password && 'is-invalid'}"
                                                name="password"
                                                value={values.password}
                                                onChange={changeHandler}
                                                required
                                                autoComplete="new-password"
                                            />

                                            {errors.password && (
                                                <span
                                                    className="text-danger"
                                                    role="alert"
                                                >
                                                    { errors.password}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-md-6 offset-md-4">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="remember"
                                                    id="remember"
                                                    checked={values.remember}
                                                    onChange={(e) =>
                                                        setValues(
                                                            "remember",
                                                            e.target.checked
                                                        )
                                                    }
                                                />

                                                <label
                                                    className="form-check-label"
                                                    htmlFor="remember"
                                                >
                                                    Remember Me
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row mb-0">
                                        <div className="col-md-6 offset-md-4">
                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                            >
                                                Login
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Front>
    );
}

export default Login;
