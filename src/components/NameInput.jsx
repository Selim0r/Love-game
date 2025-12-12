import React, { useState } from "react";

export default function NameInput({ onUnlocked }) {
  const [name, setName] = useState("");

  function submit() {
    if (name.trim().length > 0) {
      onUnlocked(name, `শুধু তোমার নাম দেখলেই, ${name}, আমি হাসি 😊💕🌷`);
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault(); // Mobile keyboard hide না হওয়ার জন্য
      submit();
    }
  }

  return (
    <div className="flex flex-col items-center gap-3 w-full">
      <label className="text-sm sm:text-base text-rose/80 text-center">
        তোমার নাম লিখুন
      </label>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="আপনার সুন্দর নাম লিখুন"
        className="w-full px-3 py-2 rounded-lg border border-pink-200 
                   focus:ring-2 focus:ring-rose/40 text-sm sm:text-base"
      />

      <button
        onClick={submit}
        className="bg-gradient-to-r from-pink-400 to-pink-600 text-white font-semibold px-6 py-2 rounded-xl
                   shadow-md hover:shadow-lg hover:scale-105 transition transform"
      >
        নাম আনলক করুন 💖✨
      </button>
    </div>
  );
}
