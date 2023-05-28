import { InertiaLink, Link } from "@inertiajs/inertia-react";
import React, { useEffect } from "react";
import Front from "../layouts/Front";
import swal from "sweetalert2";
import { Inertia } from "@inertiajs/inertia";

function Users({ users, create_url }) {
    useEffect(() => {
        document.title = "Users Page";
    });

    return (
        <Front create={create_url}>
            <div className="row d-block">
                {users.map((user) => (
                    <li className="p-1" key={user.id}>
                        {user.name} -
                        <InertiaLink href={route("users.edit", user.id)}>
                            Edit
                        </InertiaLink>
                        &nbsp; | &nbsp;
                        <InertiaLink
                            type="button"
                            method="POST"
                            data={{ _method: "delete" }}
                            href={user.delete_url}
                        >
                            Delete
                        </InertiaLink>
                    </li>
                ))}
            </div>
        </Front>
    );
}

export default Users;
