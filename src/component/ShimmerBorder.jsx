import React from "react";

export default function ShimmerBorder({ children, borderWidth = 6 }) {

  return (
    <div
      className="relative rounded-full inline-block"
      style={{ padding: borderWidth }}
    >

      {/* Shimmer border */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background: `conic-gradient(from var(--angle), transparent 18%, #FF7E29 38%, #FF5E4B 56%, #FF3E6C 76%, transparent 100%)`,
          animation: "shimmer-spin 5s linear infinite",
          mask: `radial-gradient(farthest-side, black calc(100% - ${borderWidth}px), transparent 100%)`,
          WebkitMask: `radial-gradient(farthest-side, black calc(100% - ${borderWidth}px), transparent 100%)`,
          filter: "blur(4px)",
        }}
      />

      {/* Inner content */}
      <div className="relative overflow-hidden rounded-full bg-white shadow-xl shadow-slate-200/60 border border-slate-100">
        {children}
      </div>
    </div>
  );
}
