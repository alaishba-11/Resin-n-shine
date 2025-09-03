
import React, { useState } from 'react';
import { ExternalLink, Instagram, Mail } from 'lucide-react'; // PlayCircle removed as it's no longer used
import TestimonialCard from "../components/testimonials/TestimonialCard";
import ImageModal from '../components/common/ImageModal';

// Category Tile Component
const CategoryTile = ({ image, alt, label, link, showEmailHelper = false }) => (
  <div className="group">
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="tile aspect-square block relative overflow-hidden rounded-2xl focus:outline-2 focus:outline-[#A6D4EC] focus:outline-offset-2 bg-white border border-[#EDE3D5]"
    >
      <img
        src={image}
        alt={alt}
        className="w-full h-full object-cover display-block transition-transform duration-200 ease-in-out group-hover:scale-[1.02]"
        loading="lazy"
        decoding="async"
        style={{ transform: 'scale(1)', boxShadow: 'none' }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-5 group-hover:bg-opacity-0 transition-colors"></div>
      <span className="label absolute left-3 bottom-3 bg-white/90 backdrop-blur-sm text-[#0F172A] px-3 py-2 rounded-full font-semibold text-sm border border-[#EDE3D5]">
        {label}
      </span>
    </a>
    {showEmailHelper && (
      <p className="text-xs text-[#667085] mt-2 text-center">
        <a
          href="mailto:hello@example.com?subject=Custom%20Order%20Request"
          className="text-[#A6D4EC] hover:text-[#8FCBEA] hover:underline"
        >
          Prefer email? Request this item
        </a>
      </p>
    )}
  </div>
);

// Featured Product Tile Component
const FeaturedTile = ({ image, alt, label, link, ariaLabel }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="featured-tile aspect-square block relative overflow-hidden rounded-2xl focus:outline-2 focus:outline-[#A6D4EC] focus:outline-offset-2 group bg-white border border-[#EDE3D5]"
    aria-label={ariaLabel}
  >
    <img
      src={image}
      alt={alt}
      className="w-full h-full object-contain display-block transition-transform duration-200 ease-in-out group-hover:scale-[1.02]"
      loading="lazy"
      decoding="async"
      style={{ transform: 'scale(1)', boxShadow: 'none' }}
    />
    <span className="featured-label absolute left-3 bottom-3 bg-white/90 backdrop-blur-sm text-[#0F172A] px-3 py-2 rounded-full font-semibold text-sm border border-[#EDE3D5]">
      {label}
    </span>
  </a>
);

// Instagram Thumbnail Component
const InstagramThumbnail = ({ image, alt }) => (
  <a
    href="https://instagram.com/shinenresin"
    target="_blank"
    rel="noopener noreferrer"
    className="block aspect-square rounded-xl overflow-hidden transition-transform duration-300 hover:scale-[1.02] bg-white border border-[#EDE3D5]"
  >
    <img
      src={image}
      alt={alt}
      className="w-full h-full object-cover"
      loading="lazy"
      decoding="async"
    />
  </a>
);

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null);
  const etsy_shop_url = "https://www.etsy.com/uk/shop/ShinenresinBySundus";
  const instagram_url = "https://instagram.com/shinenresin";

  const categories = [
    {
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/de2cca057_CraftResin_BuyHigh-QualityEpoxyResinforArtsCrafts.jpeg",
      alt: "Pressed-flower earrings",
      label: "Earrings",
      link: "https://www.etsy.com/uk/shop/ShinenresinBySundus?search_query=earrings",
      showEmailHelper: false
    },
    {
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/bd7564b4d_PreservedFlowerJewellery.jpeg",
      alt: "Resin floral necklace",
      label: "Necklaces",
      link: "https://www.etsy.com/uk/shop/ShinenresinBySundus?search_query=necklace",
      showEmailHelper: false
    },
    {
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/342ae5ec3_download.jpeg",
      alt: "Resin serving tray with real florals",
      label: "Trays (DM to order)",
      link: "https://instagram.com/shinenresin",
      showEmailHelper: true
    },
    {
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/3ed957cb5_20CreativeResinCoasterIdeasforYourHome.jpg",
      alt: "Pressed-floral coasters with gold rim",
      label: "Coasters (DM to order)",
      link: "https://instagram.com/shinenresin",
      showEmailHelper: true
    },
  ];

  const featuredPicks = [
    {
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/60b086a77_image.png",
      alt: "Pressed pansy earrings with dark pearl drops",
      label: "Pansy Pearl Drops",
      link: "https://www.etsy.com/uk/listing/4334467002/pansy-crew-5?utm_source=site&utm_medium=landing&utm_campaign=featured",
      ariaLabel: "Pressed real pansies in resin with pearl drop. Each pair unique."
    },
    {
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/9dc20828e_image.png",
      alt: "Lilac blossom earrings with pearl-top studs and botanical oval charms",
      label: "Blossom Oval Drops",
      link: "https://www.etsy.com/uk/listing/4330349957/garden-party?utm_source=site&utm_medium=landing&utm_campaign=featured",
      ariaLabel: "Lilac blossoms, pearl-top stud, botanical oval with pressed florals. Lightweight."
    }
  ];

  const testimonials = [
    {
      name: "Aisha K.",
      review: "Love it when I style these earrings! They're so beautiful and unique. The pressed flowers look amazing and get so many compliments. Perfect quality and arrived quickly.",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/1ea516cae_image.png",
      colorScheme: "red"
    },
    {
      name: "Fatima R.",
      review: "Perfect for my mini perfumes & jewels collection! These pieces are absolutely gorgeous and the craftsmanship is incredible. So happy I found this shop.",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/d4268868c_image.png",
      colorScheme: "green"
    },
    {
      name: "Nisha M.",
      review: "In love with these! The quality is amazing and they're so well made. Each piece is truly unique with real flowers. Definitely ordering more soon.",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/19569eb1a_image.png",
      colorScheme: "blue"
    }
  ];

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#A6D4EC]/10 via-[#FAF6F0] to-white text-[#0F172A]">
      <style>{`
        .tile {
          position: relative;
          overflow: hidden;
          border-radius: 14px;
        }
        .tile img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transform: scale(1);
          transition: transform .2s ease, box-shadow .2s ease;
        }
        .tile:hover img {
          transform: scale(1.02);
          box-shadow: 0 4px 12px rgba(0,0,0,.06);
        }
        .label {
          position: absolute;
          left: 10px;
          bottom: 10px;
          background: rgba(255,255,255,.9);
          padding: 6px 10px;
          border-radius: 999px;
          font-weight: 600;
          font-size: 14px;
        }
        .featured-tile {
          position: relative;
          overflow: hidden;
          border-radius: 14px;
          border: 1px solid #EDE3D5;
          background: #FAF6F0;
        }
        .featured-tile img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          transform: scale(1);
          transition: transform .2s ease, box-shadow .2s ease;
        }
        .featured-tile:hover img {
          transform: scale(1.02);
          box-shadow: 0 8px 24px rgba(0,0,0,.08);
        }
        .featured-label {
          position: absolute;
          left: 10px;
          bottom: 10px;
          background: rgba(255,255,255,.9);
          padding: 6px 10px;
          border-radius: 999px;
          font-weight: 600;
          font-size: 14px;
        }
      `}</style>

      <ImageModal imageUrl={selectedImage} onClose={handleCloseModal} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section 1: Meet the Maker */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-[#A6D4EC]/20 to-[#FAF6F0] rounded-3xl mb-16">
          <div className="text-center">
            <p className="text-3xl font-light italic text-[#A6D4EC] mb-4 tracking-wider">Shinenresin</p>
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="text-[#A6D4EC] text-lg">✦</span>
              <h1 className="text-4xl font-light text-[#0F172A]">Meet the Maker</h1>
              <span className="text-[#A6D4EC] text-lg">✦</span>
            </div>
            <p className="text-lg max-w-md mx-auto mb-2 text-[#667085]">
              I preserve real flowers in resin—handmade jewellery and keepsakes. Each piece is one-of-a-kind and created with care.
            </p>
            <p className="text-sm text-[#667085]/80 mb-4">
              Handmade in the UK · Real florals in resin
            </p>
            <a
              href={instagram_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A6D4EC] font-semibold hover:text-[#8FCBEA] hover:underline focus:outline-2 focus:outline-[#A6D4EC]"
            >
              Message on Instagram
            </a>
            <button
              onClick={() => handleImageClick("https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/473f40a83_image.png")}
              className="block mx-auto mt-8 max-w-lg w-full rounded-2xl overflow-hidden border-3 border-white shadow-lg group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#A6D4EC] focus:ring-offset-4"
              aria-label="View larger image of the maker at her craft booth"
            >
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/473f40a83_image.png"
                alt="The maker at her craft booth with handmade resin pieces"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </button>
          </div>
        </section>

        {/* Section 2: Shop by Style */}
        <section className="py-16 bg-white rounded-3xl mb-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-[#A6D4EC] text-lg">✨</span>
              <h2 className="text-3xl font-light text-[#0F172A]">Shop by Style</h2>
            </div>
            <p className="text-sm text-[#667085] italic">Image-first, made by hand.</p>
          </div>

          {/* Category Tiles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            {categories.map(cat => (
              <CategoryTile
                key={cat.label}
                image={cat.image}
                alt={cat.alt}
                label={cat.label}
                link={cat.link}
                showEmailHelper={cat.showEmailHelper}
              />
            ))}
          </div>

          {/* This Week's Faves */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-[#A6D4EC] text-lg">✦</span>
                <h3 className="text-2xl font-light text-[#0F172A]">This Week's Faves</h3>
              </div>
              <p className="text-sm text-[#667085] italic">This week's highlights ✦</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {featuredPicks.map(pick => (
                <FeaturedTile
                  key={pick.label}
                  image={pick.image}
                  alt={pick.alt}
                  label={pick.label}
                  link={pick.link}
                  ariaLabel={pick.ariaLabel}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: On the gram */}
        <section className="py-16 bg-[#FAF6F0] rounded-3xl mb-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <span className="text-[#A6D4EC] text-lg">✨</span>
              <h3 className="text-2xl font-light text-[#0F172A]">On the gram</h3>
            </div>
            <a
              href={instagram_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A6D4EC] font-medium hover:text-[#8FCBEA] hover:underline text-sm"
            >
              Follow @shinenresin
            </a>
          </div>
          <p className="text-sm text-[#667085] italic mb-6 text-center">Work-in-progress & booth moments.</p>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
            <InstagramThumbnail image="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/76d6145d0_image.png" alt="Craft booth display"/>
            <InstagramThumbnail image="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/fe8b29ec9_image.png" alt="Gold leaf coasters with flowers"/>
            <InstagramThumbnail image="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/46940144e_image.png" alt="Geode ring dish"/>
            <InstagramThumbnail image="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/8c2db82f0_image.png" alt="Pressed-floral tray close-up"/>
            <InstagramThumbnail image="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/f7d4d32ab_image.png" alt="Bird motif coaster"/>
          </div>
        </section>

        {/* Section 4: Love Notes */}
        <section className="py-16 bg-[#F3EADD] rounded-3xl mb-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-[#A6D4EC] text-lg">✦</span>
              <h3 className="text-2xl font-light text-[#0F172A]">Love Notes</h3>
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-16">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                review={testimonial.review}
                image={testimonial.image}
                colorScheme={testimonial.colorScheme}
                onImageClick={handleImageClick}
                isReversed={index % 2 === 1}
              />
            ))}
          </div>

          <p className="text-xs text-[#667085]/70 mt-12 text-center">More reviews coming soon.</p>
        </section>

        {/* Section 5: See the full collection */}
        <section className="py-24 text-center bg-[#A6D4EC] rounded-3xl">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-[#0F172A] text-lg">✨</span>
            <h3 className="text-xl font-light text-[#0F172A]">See the full collection</h3>
          </div>
          <p className="text-2xl font-light text-[#0F172A] mb-6">
            Discover the full collection on Etsy.
          </p>
          <a
            href={etsy_shop_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto bg-white text-[#0F172A] px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#F3EADD] transition-colors duration-300 focus:outline-2 focus:outline-[#0F172A] focus:outline-offset-2"
          >
            Shop on Etsy
          </a>
          <div className="flex justify-center gap-6 mt-8">
            <a href={instagram_url} target="_blank" rel="noopener noreferrer" className="text-[#0F172A] hover:text-[#667085] focus:outline-2 focus:outline-[#0F172A]"><Instagram /></a>
            <a href="mailto:hello@example.com" className="text-[#0F172A] hover:text-[#667085] focus:outline-2 focus:outline-[#0F172A]"><Mail /></a>
          </div>
        </section>

      </div>
    </div>
  );
}
