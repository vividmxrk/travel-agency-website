import Link from 'next/link';
import { blogs } from '@/lib/data';
export default function Blog(){return <main className="section"><h1 className="mb-6 text-4xl font-bold">Travel Blog</h1><div className="space-y-4">{blogs.map((blog)=><article key={blog.slug} className="card p-6"><h2 className="text-2xl font-semibold">{blog.title}</h2><p>{blog.excerpt}</p><Link href={`/blog/${blog.slug}`} className="text-brand underline">Read more</Link></article>)}</div></main>}
