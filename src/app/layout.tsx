import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Toaster } from "sonner";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { AuthProvider } from "@/providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sak Estates",
  description: "The property website for agents.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html lang="en" suppressHydrationWarning={true}>
        <body className={`${inter.className} ${"theme-orange"}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster
              toastOptions={{
                unstyled: true,
                classNames: {
                  error: "bg-red-400",
                  success: "text-green-400",
                  warning: "text-yellow-400",
                  info: "bg-blue-400",
                },
              }}
              position="bottom-right"
            />

            {children}
          </ThemeProvider>
        </body>
      </html>
    </AuthProvider>
  );
}
