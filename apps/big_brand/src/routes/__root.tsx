import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
    component: RootComponent,
});

function RootComponent() {
    return (
        <>
            <div className="p-4 flex gap-2 text-lg w-full justify-between">
                <h1>Big Brand</h1>
                <div className="flex gap-4">
                    <Link
                        to="/"
                        activeProps={{
                            className: "font-bold",
                        }}
                        activeOptions={{ exact: true }}
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        activeProps={{
                            className: "font-bold",
                        }}
                    >
                        About
                    </Link>
                    <Link
                        to="/my-services"
                        activeProps={{
                            className: "font-bold",
                        }}
                    >
                        My Services
                    </Link>
                    <Link
                        to="/invoices"
                        activeProps={{
                            className: "font-bold",
                        }}
                    >
                        Invoices
                    </Link>
                </div>
            </div>
            <hr />
            <Outlet />
            <TanStackRouterDevtools position="bottom-right" />
        </>
    );
}
