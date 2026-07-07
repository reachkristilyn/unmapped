import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
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

export const metadata = {
  title: "The Unmapped",
  description: "Exploring the accessibility gaps in AI design.",
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
      <nav className="fixed top-0 z-20 w-full bg-emerald-950/80 backdrop-blur-sm px-8 py-4 flex items-center justify-between">
          <Link href="/" className="font-bold text-white text-lg tracking-wide [font-family:var(--font-atkinson)]">
            The Unmapped
          </Link>
          <div className="flex gap-8">
            <Link href="/beams/tokenization" className="text-emerald-100 hover:text-white underline-offset-4 hover:underline transition-colors">
              Tokenization
            </Link>
            <Link href="/beams/screen-readers" className="text-emerald-100 hover:text-white underline-offset-4 hover:underline transition-colors">
              Screen Readers
            </Link>
          </div>
        </nav>
        {children}
        <footer className="bg-emerald-950 border-t border-emerald-800 px-8 py-6 text-center text-sm text-emerald-100">
          <p>The Unmapped · Exploring accessibility gaps in AI design</p>
          <p className="mt-1">© {new Date().getFullYear()} Kristi Lyn Eaton</p>
        </footer>
      </body>
    </html>
  );
}
