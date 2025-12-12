import React, { useRef, useState } from "react";

export default function HeartDrag({ onUnlocked }) {
  const heartRef = useRef(null);
  const boxRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // --- Start drag ---
  const handlePointerDown = (e) => {
    e.preventDefault();
    setDragging(true);
    const rect = heartRef.current.getBoundingClientRect();
    setOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    // Capture pointer to keep receiving events outside div
    heartRef.current.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!dragging) return;
    const parentRect = heartRef.current.parentElement.getBoundingClientRect();
    setPos({
      x: e.clientX - parentRect.left - offset.x,
      y: e.clientY - parentRect.top - offset.y,
    });
  };

  const handlePointerUp = (e) => {
    setDragging(false);

    const h = heartRef.current.getBoundingClientRect();
    const b = boxRef.current.getBoundingClientRect();
    const overlap = !(
      h.right < b.left ||
      h.left > b.right ||
      h.bottom < b.top ||
      h.top > b.bottom
    );
    if (overlap) {
      onUnlocked("আপনি আমার জীবনকে আনন্দ দিয়ে পূর্ণ করছেন ❤️✨🌸");
    } else {
      setPos({ x: 0, y: 0 });
    }
  };

  return (
    <div className="relative h-64 flex flex-col items-center justify-between">
      <p className="text-sm sm:text-base text-rose/80 mb-3 text-center">
        Heart কে বাক্সে টেনে আন ❤️✨
      </p>

      <div className="relative w-full flex items-center justify-between px-4">
        <div
          ref={boxRef}
          className="w-36 h-36 sm:w-40 sm:h-40 lg:w-44 lg:h-44 rounded-xl border-2 border-dashed border-rose/60 flex items-center justify-center bg-white/60"
        >
          <span className="text-rose/80 text-sm sm:text-base text-center">
            Love Box
          </span>
        </div>

        <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 relative">
          <div
            ref={heartRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
            className="w-full h-full bg-pink-400 rounded-full flex items-center justify-center shadow-lg cursor-grab touch-none"
          >
            <svg width="100%" height="100%" viewBox="0 0 24 24">
              <path
                d="M12 21s-7-4.35-9-6.9C-0.14 9.34 4.5 4 8.5 6.5 10 7.7 12 10 12 10s2-2.3 3.5-3.5C19.5 4 24.14 9.34 21 14.1 19 16.65 12 21 12 21z"
                fill="#fff"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
