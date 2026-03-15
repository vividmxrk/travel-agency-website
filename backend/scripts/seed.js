require('dotenv').config();
const bcrypt = require('bcryptjs');
const connectDb = require('../src/config/db');
const { Admin, Package, Blog } = require('../src/models/BaseModels');

(async () => {
  await connectDb();
  await Admin.findOneAndUpdate({ username: 'admin' }, { username: 'admin', password: await bcrypt.hash('admin123', 10) }, { upsert: true });
  await Package.deleteMany();
  await Blog.deleteMany();
  await Package.insertMany([
    { destination: 'Meghalaya', slug: 'meghalaya-tour', price: 12999, duration: '4D/3N', description: 'Waterfalls and caves', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1400', details: 'Detailed itinerary for Shillong and Cherrapunji.' },
    { destination: 'Kaziranga', slug: 'kaziranga-wildlife', price: 10999, duration: '3D/2N', description: 'Safari package', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1400', details: 'Jeep safari and resort stay.' }
  ]);
  await Blog.insertMany([
    { title: 'Top Places in Meghalaya', slug: 'top-places-in-meghalaya', excerpt: 'Best attractions in Meghalaya', content: 'Long-form SEO optimized article.' },
    { title: 'Shillong Weekend Guide', slug: 'shillong-weekend-guide', excerpt: '2 day Shillong itinerary', content: 'Sample blog content with local tips.' }
  ]);
  console.log('Seed completed');
  process.exit(0);
})();
