import { Link } from "@tanstack/react-router";
import { createContext, useContext } from "react";

type GetSingleInvoiceUrl = (id: string) => string;

type TInvoicesContext = {
    getSingleInvoiceUrl: GetSingleInvoiceUrl;
    AlternateSingleInvoiceLinkComponent: ({
        invoiceId,
        linkText,
    }: {
        invoiceId: number;
        linkText: string;
    }) => React.ReactElement;
};

export const InvoicesContext = createContext<TInvoicesContext>({
    getSingleInvoiceUrl: () => "",
    AlternateSingleInvoiceLinkComponent: () => <></>,
});

export function Invoices() {
    const { getSingleInvoiceUrl, AlternateSingleInvoiceLinkComponent } =
        useContext(InvoicesContext);

    const invoices = [1, 2, 3, 4, 5];

    return (
        <div>
            <ul>
                {invoices.map((invoice) => {
                    return (
                        <li>
                            <Link to={getSingleInvoiceUrl(invoice.toString())}>
                                Link with URL passed in: {invoice}
                            </Link>
                            <span> / </span>
                            <AlternateSingleInvoiceLinkComponent
                                invoiceId={invoice}
                                linkText={`Whole link passed in (type safe): ${invoice}`}
                            />
                            <span> / </span>
                            <Link to={`/invoices/${invoice}`}>
                                Hardcoded link (relies on same route structure)
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
