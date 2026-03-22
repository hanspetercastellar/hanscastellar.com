import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hans Peter Castellar del Río — Full Stack Developer",
  description:
    "Full Stack Developer especializado en arquitectura hexagonal, Domain-Driven Design (DDD) y Clean Code. Basado en Cartagena, Colombia.",
  keywords: [
    "Full Stack Developer",
    "Hexagonal Architecture",
    "DDD",
    "NestJS",
    "React",
    "TypeScript",
    "Cartagena",
    "Colombia",
  ],
  authors: [{ name: "Hans Peter Castellar del Río" }],
  openGraph: {
    title: "Hans Peter Castellar del Río — Full Stack Developer",
    description:
      "Full Stack Developer especializado en arquitectura hexagonal, DDD y Clean Code.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
