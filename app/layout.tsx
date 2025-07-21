import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pic To ascii",
  description: "Created for summer.hackclub.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
