import type { Metadata } from "next";
import {
  Merriweather,
  Old_Standard_TT,
  Cormorant_Garamond,
  Great_Vibes,
} from "next/font/google";

import "./styles/globals.css";

const merriweather = Merriweather({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const oldStandard = Old_Standard_TT({
  weight: ["400", "700"],
});

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
});

const greatVibes = Great_Vibes({
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Leandro | Web Scraping, Automation & GCP",
  description:
    "Developer with 2+ years of experience in scalable automation systems, web crawlers, and APIs. Skilled in Python, TypeScript, React, and GCP infrastructure (Cloud Run, BigQuery, CI/CD).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={[
          merriweather,
          oldStandard,
          cormorant,
          greatVibes,
          "antialiased",
        ].join(" ")}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
