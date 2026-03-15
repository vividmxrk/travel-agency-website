const services = ['Custom tour packages', 'Hotel booking', 'Tour guides', 'Transport services'];
export default function ServicesPage() { return <main className="section"><h1 className="text-4xl font-bold">Services</h1><ul className="mt-6 list-disc space-y-2 pl-6">{services.map((s) => <li key={s}>{s}</li>)}</ul></main>; }
