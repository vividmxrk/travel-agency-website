const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({ destination: String, slug: { type: String, unique: true }, price: Number, duration: String, description: String, image: String, details: String }, { timestamps: true });
const bookingSchema = new mongoose.Schema({ name: String, phone: String, email: String, travelers: Number, destination: String, travelDates: String, message: String, status: { type: String, default: 'pending' } }, { timestamps: true });
const gallerySchema = new mongoose.Schema({ title: String, category: String, image: String }, { timestamps: true });
const blogSchema = new mongoose.Schema({ title: String, slug: { type: String, unique: true }, excerpt: String, content: String, coverImage: String }, { timestamps: true });
const offerSchema = new mongoose.Schema({ title: String, details: String }, { timestamps: true });
const enquirySchema = new mongoose.Schema({ name: String, email: String, phone: String, message: String }, { timestamps: true });
const carSchema = new mongoose.Schema({ name: String, pricePerDay: Number, seats: Number, fuel: String, image: String }, { timestamps: true });
const adminSchema = new mongoose.Schema({ username: { type: String, unique: true }, password: String });

module.exports = {
  Package: mongoose.model('Package', packageSchema),
  Booking: mongoose.model('Booking', bookingSchema),
  Gallery: mongoose.model('Gallery', gallerySchema),
  Blog: mongoose.model('Blog', blogSchema),
  Offer: mongoose.model('Offer', offerSchema),
  Enquiry: mongoose.model('Enquiry', enquirySchema),
  Car: mongoose.model('Car', carSchema),
  Admin: mongoose.model('Admin', adminSchema)
};
