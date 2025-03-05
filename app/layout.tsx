import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.layer.css";
import { Toaster } from "react-hot-toast";
import { MantineProvider } from "@mantine/core";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Task Demo",
  description: "Calendar widget and contextual toolbar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}  antialiased`}>
        <Toaster position="bottom-right" />
        <MantineProvider theme={{ cursorType: "pointer" }}>
          <div className="flex flex-col h-dvh overflow-auto p-[clamp(1.5rem,2.875vw,2.875rem)] bg-white">
            <main className="flex flex-col flex-1 overflow-auto border rounded-3xl border-[#09090B0D] p-[clamp(2rem,6.25vw,6.25rem)] h-full max-w-[1440px] mx-auto w-full">
              {children}
            </main>
          </div>
        </MantineProvider>
      </body>
    </html>
  );
}
