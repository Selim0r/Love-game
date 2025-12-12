import React, { useState } from "react";

export default function GlowHeart({ onUnlocked }) {
  const [count, setCount] = useState(0);

  function clickHeart() {
    const val = count + 1;
    setCount(val);
    if (val >= 3) {
      setTimeout(() => {
        onUnlocked(
          "Thank you for being the reason behind my happiest moments."
        );
      }, 400);
    }
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-sm sm:text-base text-rose/80">Heart ৩ বার ট্যাপ কর</p>

      <div
        onClick={clickHeart}
        className={`w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-full flex items-center justify-center cursor-pointer 
        transition-all
        ${
          count >= 3
            ? "bg-rose shadow-[0_12px_40px_rgba(255,107,158,0.4)]"
            : "bg-pink-300"
        }`}
      >
        <svg width="56" height="56" viewBox="0 0 24 24">
          <path
            d="M12 21s-7-4.35-9-6.9C-0.14 9.34 4.5 4 8.5 6.5 
            10 7.7 12 10 12 10s2-2.3 3.5-3.5C19.5 4 
            24.14 9.34 21 14.1 19 16.65 12 21 12 21z"
            fill="#fff"
          />
        </svg>
      </div>

      <p className="text-sm sm:text-base text-rose/60">Clicks: {count}/3</p>
    </div>
  );
}
