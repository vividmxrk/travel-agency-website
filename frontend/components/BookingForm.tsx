'use client';
import { FormEvent, useState } from 'react';

export default function BookingForm() {
  const [status, setStatus] = useState('');
  async function submitBooking(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget).entries());
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/bookings`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData)
    });
    setStatus(res.ok ? 'Booking submitted successfully.' : 'Could not submit booking.');
    if (res.ok) e.currentTarget.reset();
  }
  return (
    <form onSubmit={submitBooking} className="card grid gap-4 p-6 md:grid-cols-2">
      {['name', 'phone', 'email', 'travelers', 'destination', 'travelDates'].map((name) => (
        <input key={name} name={name} required placeholder={name} className="rounded-lg border p-3" />
      ))}
      <textarea name="message" placeholder="Message" className="rounded-lg border p-3 md:col-span-2" />
      <button className="btn md:col-span-2">Submit Booking</button>
      {status && <p className="text-sm text-brand md:col-span-2">{status}</p>}
    </form>
  );
}
