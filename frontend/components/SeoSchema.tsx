export default function SeoSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'Puja Travels',
    telephone: '+91-7005652251',
    address: { '@type': 'PostalAddress', streetAddress: 'Pdengshnong, Golflink', addressLocality: 'Shillong' }
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
