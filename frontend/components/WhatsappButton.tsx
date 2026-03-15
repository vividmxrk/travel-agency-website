'use client';

export default function WhatsappButton() {
  const url = `https://wa.me/7005652251?text=${encodeURIComponent('Hello Puja Travels, I would like to enquire about your tour packages.')}`;
  return (
    <a href={url} target="_blank" className="fixed bottom-6 right-6 z-50 rounded-full bg-green-500 px-5 py-3 font-semibold text-white shadow-lg" aria-label="Chat on WhatsApp">
      WhatsApp
    </a>
  );
}
