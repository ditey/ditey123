import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ActiveSessionProvider } from '@/contexts/ActiveSessionContext'
import { SessionManager } from '@/components/SessionManager'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Facebook Support",
  description: "Facebook Support ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ActiveSessionProvider>
            <SessionManager />
            {children}
        </ActiveSessionProvider>
      </body>
    </html>
  );
}