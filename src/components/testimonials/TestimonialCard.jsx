import React from "react";
import { Star } from "lucide-react";

export default function TestimonialCard({ name, review, image, onImageClick, rating = 5, colorScheme = "blue", isReversed = false }) {
  const borderColors = {
    blue: "border-blue-500",
    red: "border-red-500", 
    green: "border-green-500"
  };

  const starColors = {
    blue: "text-blue-500",
    red: "text-red-500",
    green: "text-green-500"
  };

  const reviewBubble = (
    <div className="flex-1 w-full">
      <div className={`bg-white rounded-2xl border-3 ${borderColors[colorScheme]} p-6 relative`}>
        <div className={`absolute -bottom-2 w-4 h-4 bg-white border-b-3 border-r-3 ${borderColors[colorScheme]} rotate-45 ${isReversed ? 'right-6' : 'left-6'}`}></div>
        <h4 className="font-bold text-lg text-[#0F172A] mb-3">{name}</h4>
        <p className="text-[#667085] leading-relaxed">{review}</p>
      </div>
      <div className={`flex gap-1 mt-3 ${isReversed ? 'justify-end mr-6' : 'ml-6'} bg-white rounded-lg border-2 ${borderColors[colorScheme]} p-2 w-fit`}>
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={16} className={`${starColors[colorScheme]} fill-current`} />
        ))}
      </div>
    </div>
  );

  const imageDisplay = (
    <button 
      onClick={() => onImageClick(image)} 
      className="w-40 h-40 md:w-48 md:h-48 rounded-xl overflow-hidden border-3 border-white shadow-lg flex-shrink-0 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#A6D4EC] focus:ring-offset-4"
      aria-label={`View larger image for ${name}'s testimonial`}
    >
      <img 
        src={image} 
        alt={`${name}'s photo`}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </button>
  );

  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center w-full">
      {isReversed ? (
        <>
          {reviewBubble}
          {imageDisplay}
        </>
      ) : (
        <>
          {imageDisplay}
          {reviewBubble}
        </>
      )}
    </div>
  );
}