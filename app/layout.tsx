import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NIA Annual Calendar Review Tool",
  description: "Review and request changes to the NIA annual work calendar before finalization",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
