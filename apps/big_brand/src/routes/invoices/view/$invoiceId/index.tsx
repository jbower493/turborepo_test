import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/invoices/view/$invoiceId/")({
    component: RouteComponent,
});

function RouteComponent() {
    return <div>View single invoice</div>;
}
