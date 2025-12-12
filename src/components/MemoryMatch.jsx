import React, { useState, useEffect } from "react";
import pic1 from "/pic1.jpeg";
import pic2 from "/pic2.jpeg";

const items = [
  { id: 1, label: pic1 },
  { id: 2, label: pic2 },
  { id: 1, label: pic1 },
  { id: 2, label: pic2 },
];

export default function MemoryMatch({ onUnlocked }) {
  const [cards, setCards] = useState(() =>
    shuffle(
      items.map((c, i) => ({ ...c, uid: i, flipped: false, matched: false }))
    )
  );
  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState(null);

  useEffect(() => {
    if (first && second) {
      if (first.id === second.id) {
        setCards((c) =>
          c.map((x) =>
            x.uid === first.uid || x.uid === second.uid
              ? { ...x, matched: true }
              : x
          )
        );
      } else {
        setTimeout(() => {
          setCards((c) =>
            c.map((x) =>
              x.uid === first.uid || x.uid === second.uid
                ? { ...x, flipped: false }
                : x
            )
          );
        }, 800);
      }
      setFirst(null);
      setSecond(null);
    }
  }, [first, second]);

  useEffect(() => {
    if (cards.every((c) => c.matched)) {
      onUnlocked("তোমার সাথে কাটানো প্রতিটি স্মৃতিই মূল্যবান ❤️✨🌸");
    }
  }, [cards]);

  function flip(card) {
    if (card.flipped || card.matched) return;
    setCards((c) =>
      c.map((x) => (x.uid === card.uid ? { ...x, flipped: true } : x))
    );

    if (!first) setFirst(card);
    else if (!second) setSecond(card);
  }

  return (
    <div>
      <p className="text-sm sm:text-base text-rose/80 mb-3 text-center">
        যে ছবিগুলো মিল খুঁজে বের করুন 😍🎉
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {cards.map((c) => (
          <div
            key={c.uid}
            onClick={() => flip(c)}
            className={`h-24 sm:h-28 lg:h-32 rounded-lg flex items-center justify-center 
            cursor-pointer transition-all border border-pink-100 overflow-hidden ${
              c.flipped || c.matched ? "bg-pink-100" : "bg-white/70"
            }`}
          >
            {c.flipped || c.matched ? (
              <img
                src={c.label}
                alt="Memory"
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <span className="text-2xl text-rose/40">❓</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
