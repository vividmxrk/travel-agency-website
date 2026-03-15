import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsappButton from '@/components/WhatsappButton';
import SeoSchema from '@/components/SeoSchema';

export const metadata: Metadata = {
  metadataBase: new URL('https://pujatravels.in'),
  title: 'Puja Travels | Meghalaya & Northeast Tour Packages',
  description: 'Book curated Northeast India tours, car rentals, and custom holiday packages from Shillong-based Puja Travels.',
  alternates: { canonical: '/' },
  openGraph: { title: 'Puja Travels', description: 'Northeast travel experts', url: 'https://pujatravels.in', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Puja Travels' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SeoSchema />
        <Navbar />
        {children}
        <Footer />
        <WhatsappButton />
      </body>
    </html>
  );
}
