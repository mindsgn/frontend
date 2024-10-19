import React from "react";
import { Providers } from "./providers";
import "../src/global.module.css";
import type { Metadata } from "next";
import { keywords } from "@/constants/keywords";

export const metadata: Metadata = {
  title: "Uluntu",
  applicationName: "Uluntu",
  authors: [
    {
      name: "Sibongiseni",
      url: "https://sibongiseni.xyz",
    },
    {
      name: "Mindsgn Studio",
      url: "https://mindsgn.studio",
    },
  ],
  description: "Uluntu, There is power in numbers.",
  keywords,
  twitter: {
    site: "https://https://Uluntu.vercel.app/",
    title: "Uluntu",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
