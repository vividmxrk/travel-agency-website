import Link from 'next/link';
const links = ['about', 'tour-packages', 'car-rental', 'services', 'gallery', 'blog', 'contact'];
export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b bg-white/95 backdrop-blur">
      <nav className="section flex items-center justify-between py-4">
        <Link href="/" className="text-xl font-bold text-brand">Puja Travels</Link>
        <div className="flex flex-wrap gap-4 text-sm font-medium">
          {links.map((item) => <Link key={item} href={`/${item}`}>{item.replace('-', ' ')}</Link>)}
          <Link href="/admin/login" className="text-brand">Admin</Link>
        </div>
      </nav>
    </header>
  );
}
