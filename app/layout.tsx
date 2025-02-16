import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./globals.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="">
          <Navbar />
          <Sidebar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
