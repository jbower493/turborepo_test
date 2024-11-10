import { createContext } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Invoices, InvoicesContext } from "@repo/containers/invoices";

export const Route = createFileRoute("/invoices/")({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <InvoicesContext.Provider
            value={{
                getSingleInvoiceUrl: (id) => `/invoices/view/${id}`,
                AlternateSingleInvoiceLinkComponent: ({
                    invoiceId,
                    linkText,
                }) => (
                    <Link
                        to="/invoices/view/$invoiceId"
                        params={{ invoiceId: invoiceId.toString() }}
                    >
                        {linkText}
                    </Link>
                ),
            }}
        >
            <Invoices />
        </InvoicesContext.Provider>
    );
}
