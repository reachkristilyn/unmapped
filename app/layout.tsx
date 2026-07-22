import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import { Atkinson_Hyperlegible } from "next/font/google";

const atkinson = Atkinson_Hyperlegible({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-atkinson",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: { default: "The Unmapped", template: "%s — The Unmapped" },
    description: "Exploring the accessibility gaps in AI and the technology around it.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${atkinson.variable} h-full antialiased`}
    >
     <body>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-white focus:text-emerald-950 focus:px-4 focus:py-2 focus:z-50">Skip to content</a>
      <Nav />
        {children}
        <footer className="bg-emerald-950 border-t border-emerald-800 px-8 py-6 text-center text-sm text-emerald-100">
          <p>The Unmapped</p>
          <p className="mt-1">
            © {new Date().getFullYear()} Kristi Lyn Eaton <span aria-hidden="true">·</span>{" "}
            <a href="mailto:kristi.eaton@columbia.edu" aria-label="Contact by email" className="underline underline-offset-4 hover:text-white">
              Contact
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}
