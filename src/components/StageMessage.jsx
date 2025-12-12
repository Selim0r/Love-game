import React from "react";

export default function StageMessage({ message, onNext }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-rose text-sm sm:text-base lg:text-lg text-center">
        {message}
      </p>
      <button
        onClick={onNext}
        className="bg-gradient-to-r from-pink-400 to-pink-600 text-white font-semibold px-6 py-3 rounded-xl 
                   shadow-lg transform transition duration-200 hover:scale-105 hover:shadow-2xl
                   active:scale-95"
      >
        ম্যাডাম ছোঁয়ে দিন 💖✨🎉
      </button>
    </div>
  );
}
