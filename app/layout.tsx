import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = "https://maganji.co.ke";
const title = "Maganji — Know Your Breathing Room | Budgeting App for Kenya";
const description =
  "Maganji is a personal finance app and M-Pesa expense tracker built for Kenya. It reads your M-Pesa and Airtel Money messages automatically and shows your breathing room — what's actually left to spend. Free on the App Store and Google Play.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Maganji",
  },
  description,
  keywords: [
    "budgeting app Kenya",
    "M-Pesa expense tracker",
    "personal finance app Kenya",
    "money manager Kenya",
    "Airtel Money tracker",
    "track M-Pesa spending",
    "Kenyan budgeting app",
    "Januworry budget",
    "chama tracker app",
  ],
  authors: [{ name: "Brimukon Labs" }],
  creator: "Brimukon Labs",
  applicationName: "Maganji",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: siteUrl,
    siteName: "Maganji",
    title,
    description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Maganji — Know your breathing room",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MobileApplication",
              name: "Maganji",
              applicationCategory: "FinanceApplication",
              operatingSystem: "iOS, Android",
              description,
              url: siteUrl,
              publisher: {
                "@type": "Organization",
                name: "Brimukon Labs",
              },
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "KES",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
