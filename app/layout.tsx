import { ThemeProvider } from "@/app/components/theme/themeSwitch"
import type { Metadata } from "next";
import { Head } from "./head";
import "./globals.css";

export const metadata: Metadata = {
  title: "Name-it",
  description: "A website helps you naming variables, functions and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
