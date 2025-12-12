import React from "react";

export default function FinalScreen({ name, messages }) {
  return (
    <div className="text-center">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-rose mb-3">
        সব শেষ, {name || "তুমি "} 🎉💖🌸
      </h2>

      <div className="space-y-2 mb-4">
        {messages.map((m, i) => (
          <div
            key={i}
            className="bg-pink-50 px-3 py-2 rounded-lg text-rose/90 text-sm sm:text-base"
          >
            {m}
          </div>
        ))}
      </div>

      <div className="mt-4 p-4 sm:p-6 lg:p-8 rounded-xl bg-white/70">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-rose mb-2">
          ধন্যবাদ, আমার জীবনে থাকার জন্য 💖✨🎀
        </h3>
        <p className="text-sm sm:text-base lg:text-lg text-rose/70">
          আমি এটি শুধু তোমার জন্য বানিয়েছি 🎉🌸💕
        </p>
      </div>
    </div>
  );
}
