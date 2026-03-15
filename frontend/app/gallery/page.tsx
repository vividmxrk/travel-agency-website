import Image from 'next/image';
import { packages } from '@/lib/data';
export default function Gallery(){return <main className="section"><h1 className="mb-6 text-4xl font-bold">Gallery</h1><div className="grid grid-cols-2 gap-4 md:grid-cols-3">{packages.map((item)=><Image key={item.slug} src={item.image} alt={`${item.destination} destination`} width={420} height={300} className="rounded-xl object-cover" />)}</div></main>}
