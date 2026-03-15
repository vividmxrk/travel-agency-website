# Puja Travels - Production Ready Travel Agency Platform

Complete full-stack solution for **Puja Travels** with Next.js frontend, Express backend, MongoDB database, booking engine, JWT admin dashboard, Google reviews section, WhatsApp integration, and SEO tooling.

## Project Structure

```text
travel-agency-website/
├── frontend/
│   ├── app/ (all website + admin pages)
│   ├── components/ (navbar, booking form, reviews, whatsapp, schema)
│   ├── lib/data.ts (demo seed-like frontend data)
│   └── ...next/tailwind configs
├── backend/
│   ├── src/
│   │   ├── config/db.js
│   │   ├── models/BaseModels.js
│   │   ├── middleware/auth.js
│   │   ├── routes/ (auth + CRUD APIs)
│   │   └── server.js
│   ├── scripts/seed.js
│   └── .env.example
└── README.md
```

## Features Delivered
- Public pages: Home, About, Tour Packages (listing + dynamic detail), Car Rental, Services, Gallery, Blog (listing + SEO detail), Contact.
- Full booking form with API submission to MongoDB.
- Floating WhatsApp button on all pages.
- Google Reviews section with stars, latest reviews, and leave-review link.
- Admin login and dashboard pages for managing packages, offers, gallery, blogs, cars, bookings, enquiries.
- REST API routes for packages, bookings, gallery, blog, offers, enquiry (+ cars).
- JWT authentication for protected write routes.
- SEO: metadata, canonical URLs, OpenGraph, Twitter card, schema.org TravelAgency JSON-LD, robots and sitemap.
- Demo data for packages and blog posts.

## API Endpoints
- `GET/POST/PUT/DELETE /api/packages`
- `POST/GET /api/bookings`
- `POST/GET /api/gallery`
- `POST/GET /api/blog`
- `POST/GET /api/offers`
- `POST/GET /api/enquiry`
- `POST /api/auth/login`

## Local Run Instructions

### 1) Backend
```bash
cd backend
npm install
cp .env.example .env
npm run seed
npm run dev
```

### 2) Frontend
```bash
cd frontend
npm install
echo "NEXT_PUBLIC_API_URL=http://localhost:5000" > .env.local
npm run dev
```

Open `http://localhost:3000`.

Admin default credentials after seeding:
- username: `admin`
- password: `admin123`

## Deployment

### Frontend to Vercel / Netlify
1. Import `frontend` as project root.
2. Set env: `NEXT_PUBLIC_API_URL=https://your-backend-url`.
3. Build command: `npm run build`, output handled by Next.js.

### Backend to Render
1. Create Web Service with root `backend`.
2. Set env vars: `MONGO_URI`, `JWT_SECRET`, `PORT=5000`.
3. Start command: `npm start`.
4. Run one-off command `npm run seed` once after deploy.

## SEO URLs
- `/tour-packages/meghalaya-tour`
- `/blog/top-places-in-meghalaya`

