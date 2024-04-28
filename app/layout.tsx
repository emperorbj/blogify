import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "blogger",
  description: "best blog app for creators",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <div className="wrapper bg-purple-600">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
