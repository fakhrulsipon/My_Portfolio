import React from "react";

const Logo = ({ size = "md", showName = true, className = "" }) => {
  const sizeMap = {
    sm: { box: "w-9 h-9 text-lg rounded-xl", text: "text-xl" },
    md: { box: "w-11 h-11 text-2xl rounded-2xl", text: "text-2xl" },
    lg: { box: "w-16 h-16 text-3xl rounded-2xl", text: "text-3xl" },
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  return (
    <div className={`flex items-center gap-3 group cursor-pointer ${className}`}>
      {/* Emblem Badge with Monogram S */}
      <div
        className={`relative ${currentSize.box} flex items-center justify-center bg-gradient-to-br from-[#FF7E29] via-[#FF5E4B] to-[#FF3E6C] p-[1.5px] shadow-md shadow-[#FF7E29]/20 transition duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-[#FF3E6C]/30`}
      >
        <div className="w-full h-full rounded-[inherit] bg-white flex items-center justify-center relative overflow-hidden">
          {/* Ambient inner glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#FF7E29]/15 to-[#FF3E6C]/15 opacity-0 group-hover:opacity-100 transition duration-300" />
          
          {/* Stylized Monogram 'S' */}
          <span className="font-black tracking-tighter bg-gradient-to-r from-[#FF7E29] via-[#FF5E4B] to-[#FF3E6C] bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(255,126,41,0.4)]">
            S
          </span>
        </div>
      </div>

      {/* Brand Name */}
      {showName && (
        <span className={`${currentSize.text} font-bold tracking-tight text-[#0F172A] flex items-center gap-1`}>
          <span className="bg-gradient-to-r from-[#FF7E29] to-[#FF3E6C] bg-clip-text text-transparent font-extrabold">S</span>ipon
          <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#FF7E29] to-[#FF3E6C] animate-pulse ml-0.5" />
        </span>
      )}
    </div>
  );
};

export default Logo;
