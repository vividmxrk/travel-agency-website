import { offers, packages } from '@/lib/data';
import BookingForm from '@/components/BookingForm';
import GoogleReviews from '@/components/GoogleReviews';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <section className="section grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="text-5xl font-bold">Discover Northeast India with Puja Travels</h1>
          <p className="mt-4 text-slate-600">Premium tours, car rental and local expertise from Shillong.</p>
          <Link href="/tour-packages" className="btn mt-6 inline-block">Explore Packages</Link>
        </div>
        <Image src={packages[0].image} alt="Meghalaya hills" width={700} height={450} className="rounded-3xl object-cover" priority />
      </section>
      <section className="section">
        <h2 className="mb-6 text-3xl font-bold">Featured Tour Packages</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {packages.map((pkg) => (
            <article key={pkg.slug} className="card overflow-hidden">
              <Image src={pkg.image} alt={pkg.destination} width={420} height={260} className="h-52 w-full object-cover" loading="lazy" />
              <div className="p-5"><h3 className="text-xl font-semibold">{pkg.destination}</h3><p>{pkg.duration} • ₹{pkg.price}</p><p className="text-sm text-slate-600">{pkg.description}</p></div>
            </article>
          ))}
        </div>
      </section>
      <GoogleReviews />
      <section className="section"><h2 className="mb-4 text-3xl font-bold">Quick Booking</h2><BookingForm /></section>
      <section className="section"><h2 className="mb-4 text-3xl font-bold">Latest Offers</h2><div className="grid gap-4 md:grid-cols-2">{offers.map((offer) => <div key={offer.title} className="card p-6"><h3 className="font-semibold">{offer.title}</h3><p>{offer.details}</p></div>)}</div></section>
    </main>
  );
}
