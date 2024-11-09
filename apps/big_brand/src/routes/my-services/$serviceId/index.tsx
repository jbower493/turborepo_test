import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { Service } from "@repo/containers/service";

export const Route = createFileRoute("/my-services/$serviceId/")({
    component: RouteComponent,
});

function RouteComponent() {
    const { serviceId } = useParams({ from: "/my-services/$serviceId/" });

    return (
        <Service
            serviceId={serviceId}
            slots={{
                servicesListLink: <Link to="/my-services">My Services</Link>,
                aboutLink: <Link to="/about">About</Link>,
            }}
        />
    );
}
