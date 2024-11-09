type Props = {
    serviceId: string;
    slots: {
        servicesListLink: React.ReactNode;
        aboutLink: React.ReactNode;
    };
};

export function Service({
    serviceId,
    slots: { servicesListLink, aboutLink },
}: Props) {
    return (
        <div>
            <div>Manage service: {serviceId}</div>
            <div>{servicesListLink}</div>
            <div>{aboutLink}</div>
        </div>
    );
}
