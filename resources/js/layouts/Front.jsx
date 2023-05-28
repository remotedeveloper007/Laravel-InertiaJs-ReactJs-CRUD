import React, { useEffect } from "react";
import Navbar from "../components/Navbar";

function Front({ title, children, create_url }) {
    useEffect(() => {
        document.title = title;
    });
    return (
        <React.Fragment>
            <Navbar create={create_url} />
            <main className="container">{children}</main>
        </React.Fragment>
    );
}

export default Front;
