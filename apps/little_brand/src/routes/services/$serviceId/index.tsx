import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { Service } from "@repo/containers/service";

export const Route = createFileRoute("/services/$serviceId/")({
    component: RouteComponent,
});

function RouteComponent() {
    const { serviceId } = useParams({ from: "/services/$serviceId/" });

    return (
        <Service
            serviceId={serviceId}
            slots={{
                servicesListLink: <Link to="/services">Services</Link>,
                aboutLink: <Link to="/about-us">About Us</Link>,
            }}
        />
    );
}
