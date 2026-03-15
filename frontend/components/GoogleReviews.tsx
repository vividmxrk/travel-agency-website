import { reviews } from '@/lib/data';

export default function GoogleReviews() {
  return (
    <section className="section">
      <h2 className="mb-6 text-3xl font-bold">Google Reviews ⭐ 4.9/5</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {reviews.map((review) => (
          <article key={review.name} className="card p-5">
            <p className="font-semibold">{review.name}</p>
            <p className="text-amber-500">{'★'.repeat(review.rating)}</p>
            <p className="text-sm text-slate-600">{review.text}</p>
          </article>
        ))}
      </div>
      <a href="https://g.co/kgs/9vMGC8s" target="_blank" className="mt-4 inline-block text-brand underline">Leave a Review on Google</a>
    </section>
  );
}
