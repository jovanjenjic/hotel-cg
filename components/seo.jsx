"use client";
import { useEffect } from "react";

const SEO = ({ pageTitle }) => {
    useEffect(() => {
        document.title = pageTitle + ' - Villa Drobni Pijesak';
    }, []);
};

export default SEO;
