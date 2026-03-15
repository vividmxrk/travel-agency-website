import Link from 'next/link';
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const links = ['packages', 'offers', 'gallery', 'blog', 'cars', 'bookings', 'enquiries'];
  return <main className="section grid gap-6 md:grid-cols-[240px,1fr]"><aside className="card p-4"><h2 className="font-bold">Dashboard</h2><nav className="mt-3 flex flex-col gap-2">{links.map((l)=><Link key={l} href={`/admin/${l}`}>{l}</Link>)}</nav></aside><section>{children}</section></main>;
}
