import type { Metadata } from "next";
import "./globals.css";
import CustomNav from "@/components/Custom/CustomNav";

export const metadata: Metadata = {
  title: "BashaKoi",
  description: "Bashakoi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#153045] text-white max-w-[1920px]">
        <header className="p-2 border-b ">
          <CustomNav />
        </header>
        <main className="">{children}</main>
      </body>
    </html>
  );
}
