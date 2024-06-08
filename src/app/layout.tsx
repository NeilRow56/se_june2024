import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Toaster } from "sonner";
import { ThemeProvider } from "@/providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "convex_ai",
  description: "The connected workspace where better, faster work happens.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
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
  );
}
