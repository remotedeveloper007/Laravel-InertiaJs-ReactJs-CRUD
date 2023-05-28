import React, { useState } from "react";
import Front from "../layouts/Front";
import { Inertia } from "@inertiajs/inertia";

function Edit(props) {
    const { id, name, email, errors } = props;
    const [values, setValues] = useState({
        id,
        name,
        email,
    });

    const changeHandler = (e) => {
        e.persist();
        const key = e.target.id;
        setValues((values) => ({ ...values, [key]: e.target.value }));
    };

    function submitHandler(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append("id", values.id);
        formData.append("name", values.name);
        formData.append("email", values.email);
        formData.append("_method", "PUT");

        Inertia.post("/users/" + values.id, formData);
    }

    return (
        <Front title="Edit Users">
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card">
                            <div className="card-header">
                                <h5>Add User</h5>
                            </div>
                            <div className="card-body">
                                <form
                                    onSubmit={submitHandler}
                                    method="put"
                                    encType="multipart/form-data"
                                >
                                    <div className="form-group row">
                                        <label
                                            htmlFor="name"
                                            className="col-4 col-form-label"
                                        >
                                            Name
                                        </label>
                                        <div className="col-md-8">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                placeholder="Name"
                                                value={values.name}
                                                onChange={changeHandler}
                                            />
                                            {errors.name && (
                                                <div className="text-danger">
                                                    {errors.name}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label
                                            htmlFor="email"
                                            className="col-4 col-form-label"
                                        >
                                            Email
                                        </label>
                                        <div className="col-8">
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                placeholder="Email"
                                                value={values.email}
                                                onChange={changeHandler}
                                            />
                                            {errors.email && (
                                                <div className="text-danger">
                                                    {errors.email}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <div className="offset-sm-4 col-sm-8">
                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                            >
                                                Update
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

export default Edit;
