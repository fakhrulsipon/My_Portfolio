import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MainLayout from "../layout/MainLayout";

const AppWrapper = () => {
  const fullText = "Welcome to My Portfolio...";

  const [typed, setTyped] = useState("");
  const [idx, setIdx] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Typewriter Effect
  useEffect(() => {
    const typingDelay = 70;
    if (idx < fullText.length) {
      const t = setTimeout(() => {
        setTyped((prev) => prev + fullText[idx]);
        setIdx((prev) => prev + 1);
      }, typingDelay);
      return () => clearTimeout(t);
    } else {
      const doneTimer = setTimeout(() => setShowCursor(false), 400);
      return () => clearTimeout(doneTimer);
    }
  }, [idx, fullText]);

  // Progress Loader
  useEffect(() => {
    const duration = 3000; // 3s loader
    const stepTime = duration / 100;
    let current = 0;

    const interval = setInterval(() => {
      current += 1;
      if (current <= 100) {
        setProgress(current);
      } else {
        clearInterval(interval);
        setTimeout(() => setIsLoading(false), 400);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loader"
          className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Typewriter Text (smaller clean) */}
          <motion.h1
            className="text-center font-medium mb-10 text-lg sm:text-xl md:text-2xl 
              bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 
              bg-clip-text text-transparent"
            initial={{ y: -15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {typed}
            {showCursor && (
              <motion.span
                aria-hidden="true"
                className="inline-block ml-1 align-middle text-white font-bold"
                animate={{ opacity: [1, 0, 1] }}
                transition={{
                  duration: 0.7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                |
              </motion.span>
            )}
          </motion.h1>

          {/* Eye-Catching Glow Loader */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Pulse Glow Background */}
            <motion.div
              className="absolute w-24 h-24 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 opacity-30 blur-xl"
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Dual Ring Loader */}
            <svg className="w-20 h-20 relative drop-shadow-[0_0_15px_rgba(99,102,241,0.7)]">
              {/* Background Circle */}
              <circle
                cx="40"
                cy="40"
                r="32"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="6"
                fill="none"
              />
              {/* Animated Outer Ring */}
              <motion.circle
                cx="40"
                cy="40"
                r="32"
                stroke="url(#gradient)"
                strokeWidth="6"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={2 * Math.PI * 32}
                strokeDashoffset={
                  2 * Math.PI * 32 - (progress / 100) * (2 * Math.PI * 32)
                }
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "50% 50%" }}
              />
              {/* Inner Rotating Ring */}
              <motion.circle
                cx="40"
                cy="40"
                r="24"
                stroke="url(#gradient)"
                strokeWidth="4"
                fill="none"
                strokeDasharray={2 * Math.PI * 24 * 0.3}
                strokeDashoffset={0}
                animate={{ rotate: -360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "50% 50%" }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="50%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
            </svg>

            {/* Percentage */}
            <motion.span
              className="absolute text-sm font-semibold text-cyan-300"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              {progress}%
            </motion.span>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <MainLayout />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AppWrapper;
