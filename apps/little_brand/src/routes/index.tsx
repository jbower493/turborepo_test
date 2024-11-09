import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
    component: HomeComponent,
});

function HomeComponent() {
    return (
        <div className="p-2">
            <h3>Little Brand home</h3>
        </div>
    );
}
