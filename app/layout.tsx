import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "./components/shared/sidebar/sidebar";
import { Roboto } from "next/font/google";

import { Footer } from "./components/shared/footer/footer";
import Script from "next/script";
const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
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
        <Script id="prevent-scroll-lock" strategy="afterInteractive">
          {`
            function removeScrollLockedAttribute(mutationsList) {
              for (let mutation of mutationsList) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'data-scroll-locked') {
                  document.body.removeAttribute('data-scroll-locked');
                }
              }
            }

            const observer = new MutationObserver(removeScrollLockedAttribute);
            observer.observe(document.body, { attributes: true });

            const preventScrollLock = new Proxy(document.body, {
              set: function(target, key, value) {
                if (key === 'setAttribute' && value[0] === 'data-scroll-locked') {
                  return false; // Prevent the attribute from being added
                }
                return Reflect.set(target, key, value);
              }
            });

            document.body.setAttribute = preventScrollLock.setAttribute;
          `}
        </Script>
        <Footer className="hidden" />
      </body>
    </html>
  );
}
