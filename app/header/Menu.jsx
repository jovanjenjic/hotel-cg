import Link from "next/link";
import { Fragment } from "react";
export const Page = () => (
    <Fragment>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/team">Team</Link></li>
        <li><Link href="/services-details">Services Details</Link></li>
        <li><Link href="/404-error">404 Page</Link></li>
    </Fragment>
);
export const Room = () => (
    <Fragment>
        <li><Link href="/room-style">Room Style</Link></li>
        <li><Link href="/room-modern">Room Modern</Link></li>
        <li><Link href="/room-list">Room List</Link></li>
        <li><Link href="/room-details">Room Details</Link></li>
    </Fragment>
);