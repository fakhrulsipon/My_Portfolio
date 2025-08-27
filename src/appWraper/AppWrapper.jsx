import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MainLayout from "../layout/MainLayout";

const AppWrapper = () => {
  const fullText = "Welcome to My Portfolio";

  const [typed, setTyped] = useState("");
  const [idx, setIdx] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const [progress, setProgress] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Typewriter: প্রতি 60ms এ এক অক্ষর
    const typingDelay = 60;
    if (idx < fullText.length) {
      const t = setTimeout(() => {
        setTyped(prev => prev + fullText[idx]);
        setIdx(prev => prev + 1);
      }, typingDelay);
      return () => clearTimeout(t);
    } else {
      // লেখা শেষ হলে cursor লুকাও
      const doneTimer = setTimeout(() => setShowCursor(false), 300);
      return () => clearTimeout(doneTimer);
    }
  }, [idx, fullText]);

  useEffect(() => {
    // Progress Loader: 3 সেকেন্ডে 1% → 100%
    const duration = 3000;
    const stepTime = duration / 100;
    let current = 1;

    const interval = setInterval(() => {
      current += 1;
      if (current <= 100) {
        setProgress(current);
      } else {
        clearInterval(interval);
        setIsLoading(false);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return (
      <motion.div
        className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Typewriter Welcome */}
        <motion.h1
          className="text-center font-extrabold mb-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
          style={{ textShadow: "0 0 15px rgba(0, 255, 255, 0.8), 0 0 35px rgba(0, 255, 255, 0.6)" }}
          initial={{ y: -10, opacity: 0.6 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {typed}
          {showCursor && (
            <motion.span
              aria-hidden="true"
              className="inline-block ml-1 align-middle"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.7, repeat: Infinity, ease: "easeInOut" }}
            >
              |
            </motion.span>
          )}
        </motion.h1>

        {/* Progress Bar */}
        <motion.div
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-6 sm:h-7 md:h-8 bg-gray-800 rounded-full overflow-hidden mb-6 shadow-xl relative"
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {/* Shimmer layer */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
          />
          {/* Progress fill */}
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-green-400"
            style={{ width: `${progress}%` }}
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </motion.div>

        {/* Loading Percentage */}
        <motion.h2
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold"
          style={{ textShadow: "0 0 14px rgba(0, 255, 255, 0.9), 0 0 22px rgba(0, 255, 255, 0.6)" }}
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 0.9, repeat: Infinity }}
        >
          Loading... {progress}%
        </motion.h2>
      </motion.div>
    );
  }

  return <MainLayout />;
};

export default AppWrapper;
