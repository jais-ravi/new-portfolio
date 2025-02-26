import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./ClientLayout";

import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Ravi Jaiswal",
  description:
    "Passionate MERN stack developer showcasing projects, DSA expertise, and innovative web solutions.",
  icons: "/favIcon.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased dark w-full h-full">
        <ClientLayout>
          {children}
          <Toaster />
        </ClientLayout>
      </body>
    </html>
  );
}
