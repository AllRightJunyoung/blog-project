import Header from "./components/home/Layout/Header";
import { Title, Description } from "./constant";
import { Metadata } from "next";
import { ChakraProviders } from "./providers/chakraUI";
import { Recoil } from "./components/common";
import GoogleAnalytics from "./components/common/GoogleAnalytics";

export const metadata: Metadata = {
  generator: "Next.js 13.4.2",
  title: {
    default: Title,
    template: `%s | ${Title}`,
  },
  description: Description,
  openGraph: {
    type: "website",
    siteName: Title,
    title: Title,
    description: Description,
  },
  verification: {
    google: "An5DfMoH89G1p-PsDB3RcVe3QBhVdtuJnBpufYSO8Jk",
    other: {
      "naver-site-verification": "8f66a88ebd6bcf6839daa2d911cf8257354491a4",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: Title,
    description: Description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en">
      {GA_ID && <GoogleAnalytics GA_TRACKING_ID={GA_ID} />}

      <body>
        <ChakraProviders>
          <Recoil>
            <Header />
            {children}
          </Recoil>
        </ChakraProviders>
      </body>
    </html>
  );
}
