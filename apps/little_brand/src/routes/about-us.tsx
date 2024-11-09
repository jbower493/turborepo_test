import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about-us")({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <div className="p-2">
            <h3>About us</h3>
        </div>
    );
}
