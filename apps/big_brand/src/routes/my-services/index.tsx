import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useServicesQuery } from "@repo/queries/queries";

export const Route = createFileRoute("/my-services/")({
    component: RouteComponent,
});

function RouteComponent() {
    const { data } = useServicesQuery();

    if (!data) return <div>Loading...</div>;

    return (
        <div>
            <div>My Services</div>
            <ul>
                {data.services.map(({ id, name }) => {
                    return (
                        <li>
                            <Link
                                to="/my-services/$serviceId"
                                params={{ serviceId: id.toString() }}
                            >
                                {name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
