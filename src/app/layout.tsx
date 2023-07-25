import Header from "./components/home/Layout/Header";
import { ChakraProviders } from "./providers/chakraUI";
import { Recoil } from "./components/common";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>준영 블로그</title>
      <meta
        name="description"
        content="I post about programming and web development."
      />
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
