import Header from "./components/home/Layout/Header";
import { Title, Description } from "./constant";
import { Metadata } from "next";
import { ChakraProviders } from "./providers/chakraUI";
import { Recoil } from "./components/common";

export const metadata: Metadata = {
  title: Title,
  description: Description,
  openGraph: {
    type: "website",
    siteName: Title,
    title: Title,
    description: Description,
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
  return (
    <html lang="en">
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
