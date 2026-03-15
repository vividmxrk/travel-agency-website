import { packages } from '@/lib/data';
import { notFound } from 'next/navigation';
export default function PackageDetail({ params }: { params: { slug: string } }) {
  const pkg = packages.find((item) => item.slug === params.slug);
  if (!pkg) return notFound();
  return <main className="section"><h1 className="text-4xl font-bold">{pkg.destination} Tour</h1><p className="mt-4">{pkg.details}</p><p className="mt-3 font-semibold">Price: ₹{pkg.price}</p></main>;
}
