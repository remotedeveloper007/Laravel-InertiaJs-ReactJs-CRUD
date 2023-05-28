import React, { useState } from "react";
import Front from "../../layouts/Front";
import { Inertia } from "@inertiajs/inertia";

function register({ errors }) {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const changeHandler = (e) => {
        e.persist();
        const key = e.target.id;
        setValues((values) => ({ ...values, [key]: e.target.value }));
    };

    function submitHandler(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("email", values.email);
        formData.append("password", values.password);
        formData.append("password_confirmation", values.password_confirmation);

        Inertia.post("/register", formData);
    }

    return (
        <Front title="Register Users">
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Register</div>

                            <div className="card-body">
                                <form onSubmit={submitHandler}>
                                    <div className="row mb-3">
                                        <label
                                            htmlFor="name"
                                            className="col-md-4 col-form-label text-md-end"
                                        >
                                            Name
                                        </label>

                                        <div className="col-md-6">
                                            <input
                                                id="name"
                                                type="text"
                                                className="form-control {errors.name && 'is-invalid'}"
                                                name="name"
                                                value={values.name}
                                                onChange={changeHandler}
                                                required
                                                autoComplete="name"
                                                autoFocus
                                            />

                                            {errors.name && (
                                                <span
                                                    className="invalid-feedback"
                                                    role="alert"
                                                >
                                                    {errors.name}
                                                </span>
                                            )}
                                        </div>
                                    </div>
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
                                                className="form-control {errors.email && 'is-invalid'}"
                                                name="email"
                                                value={values.email}
                                                onChange={changeHandler}
                                                required
                                                autoComplete="email"
                                            />

                                            {errors.email && (
                                                <span
                                                    className="invalid-feedback"
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
                                                    className="invalid-feedback"
                                                    role="alert"
                                                >
                                                    {$errors.password}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label
                                            htmlFor="password_confirmation"
                                            className="col-md-4 col-form-label text-md-end"
                                        >
                                            Confirm Password
                                        </label>

                                        <div className="col-md-6">
                                            <input
                                                id="password_confirmation"
                                                type="password"
                                                className="form-control"
                                                name="password_confirmation"
                                                value={
                                                    values.password_confirmation
                                                }
                                                onChange={changeHandler}
                                                required
                                                autoComplete="new-password"
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-0">
                                        <div className="col-md-6 offset-md-4">
                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                            >
                                                Register
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

export default register;
