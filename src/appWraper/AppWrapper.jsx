import { useState, useEffect } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import MainLayout from "../layout/MainLayout";
import Logo from "../component/Logo";

const AppWrapper = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Progress Loader
  useEffect(() => {
    const duration = 2200; // 2.2s loader
    const stepTime = duration / 100;
    let current = 0;

    const interval = setInterval(() => {
      current += 1;
      if (current <= 100) {
        setProgress(current);
      } else {
        clearInterval(interval);
        setTimeout(() => setIsLoading(false), 300);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <Motion.div
          key="loader"
          className="relative flex flex-col items-center justify-center min-h-screen bg-[#FAFAFA] text-[#0F172A] px-4 overflow-hidden select-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.08, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Glowing background ambient lights */}
          <Motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-tr from-[#FF7E29]/15 via-[#FF5E4B]/15 to-[#FF3E6C]/15 blur-[100px] pointer-events-none"
            animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Grid lines background effect */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-60" />

          {/* Central Animated Badge & Rings Container */}
          <Motion.div
            className="relative flex items-center justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Pulsing Outer Aura Ring */}
            <Motion.div
              className="absolute w-36 h-36 rounded-full bg-gradient-to-r from-[#FF7E29] to-[#FF3E6C] opacity-20 blur-xl"
              animate={{ scale: [1, 1.35, 1], opacity: [0.2, 0.45, 0.2] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* SVG Dual Progress Spinner Rings */}
            <svg className="w-32 h-32 relative drop-shadow-[0_4px_20px_rgba(255,126,41,0.3)]">
              {/* Outer Background Track */}
              <circle
                cx="64"
                cy="64"
                r="52"
                stroke="rgba(15,23,42,0.08)"
                strokeWidth="5"
                fill="none"
              />
              {/* Animated Progress Ring */}
              <Motion.circle
                cx="64"
                cy="64"
                r="52"
                stroke="url(#loaderGradient)"
                strokeWidth="5"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={2 * Math.PI * 52}
                strokeDashoffset={
                  2 * Math.PI * 52 - (progress / 100) * (2 * Math.PI * 52)
                }
                animate={{ rotate: 360 }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "50% 50%" }}
              />
              {/* Inner Orbiting Dashed Ring */}
              <Motion.circle
                cx="64"
                cy="64"
                r="42"
                stroke="url(#loaderGradient)"
                strokeWidth="2.5"
                fill="none"
                strokeDasharray={2 * Math.PI * 42 * 0.25}
                strokeDashoffset={0}
                animate={{ rotate: -360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "50% 50%" }}
              />
              <defs>
                <linearGradient
                  id="loaderGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#FF7E29" />
                  <stop offset="50%" stopColor="#FF5E4B" />
                  <stop offset="100%" stopColor="#FF3E6C" />
                </linearGradient>
              </defs>
            </svg>

            {/* Central Monogram Emblem Logo */}
            <div className="absolute flex items-center justify-center pointer-events-none">
              <Logo size="lg" showName={false} />
            </div>
          </Motion.div>
        </Motion.div>
      ) : (
        <Motion.div
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <MainLayout />
        </Motion.div>
      )}
    </AnimatePresence>
  );
};

export default AppWrapper;
