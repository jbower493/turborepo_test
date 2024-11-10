import { useSingleServiceQuery } from "@repo/queries/queries";

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
    const { data } = useSingleServiceQuery(Number(serviceId));

    if (!data) return null;

    return (
        <div>
            <div>Manage service: {data.id}</div>
            <div>{data.name}</div>
            <div>{data.description}</div>
            <div>{servicesListLink}</div>
            <div>{aboutLink}</div>
        </div>
    );
}
