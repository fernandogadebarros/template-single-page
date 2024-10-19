import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import type { Metadata } from 'next';
import { Header } from '@/components/Template/Header';
import { Footer } from '@/components/Template/Footer';

const jakarta = Plus_Jakarta_Sans({
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-jakarta',
});

export const metadata: Metadata = {
  title: 'Single Page Design',
  description: 'Single Page Design | Frontend Mentor',
  icons: ['/assets/favicon-32x32.png'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${jakarta.variable} ${jakarta.className} bg-write-light antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
