"use client";
import NextTopLoader from "nextjs-toploader";
import { useEffect } from "react";
import "./styles/styles.css";
import "./assets/css/all.css";
import "./assets/css/meanmenu.min.css";
import "./assets/sass/style.css";
import "../i18n";
import { init } from "@emailjs/browser";

export default function RootLayout({ children }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.min.js");
    init("mU5g30vFzqjkPhdZP");
  }, []);
  return (
    <html lang="en" suppressHydrationWarning={true}> 
	    <link rel="icon" type="image/png" href="favicon.png" />
      <body>
        <NextTopLoader showSpinner={false} />
        {children}
      </body>
    </html>
  );
}
