import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/invoices/$invoiceId/")({
    component: RouteComponent,
});

function RouteComponent() {
    return <div>Single Invoice</div>;
}
