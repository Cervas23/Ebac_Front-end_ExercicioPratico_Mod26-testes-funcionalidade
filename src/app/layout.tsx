import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Listinha",
  description: "Sua listinha diária para você não esquecer de nada.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
