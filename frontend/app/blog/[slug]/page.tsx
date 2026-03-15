import { blogs } from '@/lib/data';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogs.find((item) => item.slug === params.slug);
  if (!post) return { title: 'Blog Not Found' };
  return { title: `${post.title} | Puja Travels Blog`, description: post.excerpt, alternates: { canonical: `/blog/${post.slug}` } };
}

export default function BlogDetail({ params }: { params: { slug: string } }) {
  const post = blogs.find((item) => item.slug === params.slug);
  if (!post) return notFound();
  return <main className="section"><h1 className="text-4xl font-bold">{post.title}</h1><p className="mt-4 text-lg text-slate-700">{post.content}</p></main>;
}
