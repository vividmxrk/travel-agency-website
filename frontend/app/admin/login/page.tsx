'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const [error, setError] = useState('');
  const router = useRouter();
  async function handleSubmit(formData: FormData) {
    const username = formData.get('username');
    const password = formData.get('password');
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ username, password })
    });
    if (!res.ok) return setError('Invalid credentials');
    const { token } = await res.json();
    localStorage.setItem('adminToken', token);
    router.push('/admin/packages');
  }
  return <main className="section max-w-lg"><h1 className="mb-5 text-3xl font-bold">Admin Login</h1><form action={handleSubmit} className="card space-y-4 p-6"><input name="username" placeholder="Username" className="w-full rounded border p-3" /><input name="password" type="password" placeholder="Password" className="w-full rounded border p-3" /><button className="btn w-full">Login</button>{error && <p className="text-red-600">{error}</p>}</form></main>;
}
