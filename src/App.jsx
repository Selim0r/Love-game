import React, { useState } from "react";
import HeartDrag from "./components/HeartDrag";
import NameInput from "./components/NameInput";
import MemoryMatch from "./components/MemoryMatch";
import GlowHeart from "./components/GlowHeart";
import StageMessage from "./components/StageMessage";
import FinalScreen from "./components/FinalScreen";

export default function App() {
  const [stage, setStage] = useState(0);
  const [messages, setMessages] = useState([]);
  const [playerName, setPlayerName] = useState("");

  const stages = [
    {
      id: 0,
      component: HeartDrag,
      message:
        "তুমি আমার জীবনকে আনন্দ দিয়ে পূর্ণ করেছ❤️🌸✨ কিন্তু তুমি কামড়িয়া আমারে শেষ করে দিছ 😖😭",
    },
    {
      id: 1,
      component: NameInput,
      message: (name) => `শুধু তোমার নাম দেখলেই, ${name}, আমি হাসি 😊💕🌷`,
    },
    {
      id: 2,
      component: MemoryMatch,
      message: "তোমার সাথে প্রতিটি স্মৃতি আমার জন্য অমূল্য 💖🎀🌟",
    },
    {
      id: 3,
      component: GlowHeart,
      message: "তোমার আমার সবচেয়ে সুখী মুহূর্তের কারণ 🎉💗🌸",
    },
  ];

  const CurrentStage = stages[stage]?.component;
  const [showMessage, setShowMessage] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");

  const handleStageComplete = (extra) => {
    const msg =
      typeof stages[stage].message === "function"
        ? stages[stage].message(extra)
        : stages[stage].message;
    setCurrentMessage(msg);
    setShowMessage(true);
  };

  const handleNext = () => {
    setMessages((m) => [...m, currentMessage]);
    setShowMessage(false);
    if (stage === 1 && playerName === "" && CurrentStage === NameInput) {
      setPlayerName("তুমি"); // Default if no input
    }
    setStage(stage + 1);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center 
      bg-gradient-to-b from-blush to-softpink p-4 sm:p-6"
    >
      <div
        className="w-full max-w-md sm:max-w-lg lg:max-w-xl 
        bg-white/90 rounded-2xl p-4 sm:p-6 soft-glow backdrop-blur-md shadow-md"
      >
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-rose text-center mb-4">
          মেসেজ আনলক কর Emma💖
        </h1>
        <p className="text-center text-sm sm:text-base lg:text-lg text-rose/80 mb-6">
          প্রতিটি মজাদার গেম খেলে একটি মেসেজ খুঁজে বের কর Emma ✨🌸🎉
        </p>

        {!showMessage ? (
          <CurrentStage onUnlocked={handleStageComplete} />
        ) : (
          <StageMessage message={currentMessage} onNext={handleNext} />
        )}

        {stage >= stages.length && (
          <FinalScreen name={playerName} messages={messages} />
        )}
      </div>
    </div>
  );
}
