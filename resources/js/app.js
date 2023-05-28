import React from "react";
import { render } from "react-dom";
import { createInertiaApp } from "@inertiajs/inertia-react";
// import route from "ziggy";
// import { Ziggy } from "./ziggy";

// route("home", undefined, undefined, Ziggy);

createInertiaApp({
    resolve: (name) => import(`./pages/${name}`),
    setup({ el, App, props }) {
        render(<App {...props} />, el);
    },
});
