"use client";

import { ReactNode } from "react";

export function Anchor({
    children,
    href,
}: {
    children: ReactNode;
    href: string;
}) {
    return <a href={href}>{children}</a>;
}
