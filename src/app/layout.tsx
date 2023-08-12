import { Metadata } from "next";
import GoogleAnalytics from "./components/common/GoogleAnalytics";
import { Suspense } from "react";

export const metadata: Metadata = {
  generator: "Next.js 13.4.2",
  title: {
    default: "준영의 기술블로그 | HOME",
    template: `%s | 준영의 기술블로그`,
  },
  description: "준영의 기술블로그 입니다.",
  openGraph: {
    type: "website",
    siteName: "준영의 기술블로그",
    title: "준영의 기술블로그",
    description: "준영의 기술블로그 입니다.",
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
    title: "준영의 기술블로그",
    description: "준영의 기술블로그 입니다.",
  },
};
export const revalidate = 3600;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en">
      <Suspense fallback={null}>
        {GA_ID && <GoogleAnalytics GA_TRACKING_ID={GA_ID} />}
      </Suspense>

      <body>{children}</body>
    </html>
  );
}
