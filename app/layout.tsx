import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "./components/shared/sidebar/sidebar";
import { Roboto } from 'next/font/google'

import { Footer } from "./components/shared/footer/footer";
const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})
export const metadata: Metadata = {
  title: "test-intravision",
  description: "main layout",
};
// font-family: "Roboto";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${roboto.className} flex flex-col antialiased`}>
        <main className="flex flex-grow min-h-[100vh]">
          <Sidebar />
          {children}
        </main>
        <Footer className="hidden"/>
      </body>
    </html>
  );
}
