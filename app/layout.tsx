import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import MobileNavBar from './components/ui/MobileNavBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Health tech app',
  description: 'Health tech app for hackathon.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="w-full h-screen grid grid-rows-[1fr_min-content]">
          <div className="h-full overflow-y-scroll">{children}</div>
          <MobileNavBar />
        </main>
      </body>
    </html>
  );
}
