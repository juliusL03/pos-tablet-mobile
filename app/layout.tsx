import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E-Store POS",
  description:
    "A point-of-sale dashboard developed by Juls Dev to streamline inventory and sales operations.",
  keywords: ["POS", "Point of Sale", "Inventory", "Sales", "Dashboard", "Juls Dev", "Next.js"],
  authors: [{ name: "Julius Legaspi", url: "https://www.julsdev.site" }],
  creator: "Juls Dev",
  publisher: "Juls Dev",
  metadataBase: new URL("https://www.julsdev.site"),
  openGraph: {
    title: "E-Store POS | Juls Dev",
    description: "Efficient and intuitive POS designed by Juls Dev.",
    url: "https://www.julsdev.site",
    siteName: "Juls Dev POS",
    images: [
      {
        url: "/logo/estore-pos.png",
        width: 1200,
        height: 630,
        alt: "E-Store POS by Juls Dev",
      },
    ],
    locale: "en_PH",
    type: "website",
  },
  icons: {
    icon: "/logo/estore-pos.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
