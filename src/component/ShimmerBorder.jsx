import React from "react";

export default function ShimmerBorder({ children, borderWidth = 6 }) {
  const customCss = `
    @property --angle {
      syntax: '<angle>';
      initial-value: 0deg;
      inherits: false;
    }

    @keyframes shimmer-spin {
      to {
        --angle: 360deg;
      }
    }
  `;

  return (
    <div
      className="relative rounded-full inline-block"
      style={{ padding: borderWidth }}
    >
      <style>{customCss}</style>

      {/* Shimmer border */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background: `conic-gradient(from var(--angle), transparent 18%, #34d399 38%, #22d3ee 56%, #a78bfa 76%, transparent 100%)`,
          animation: "shimmer-spin 5s linear infinite",
          mask: `radial-gradient(farthest-side, black calc(100% - ${borderWidth}px), transparent 100%)`,
          WebkitMask: `radial-gradient(farthest-side, black calc(100% - ${borderWidth}px), transparent 100%)`,
          filter: "blur(5px)",
        }}
      />

      {/* Inner content */}
      <div className="relative overflow-hidden rounded-full bg-slate-950 shadow-2xl shadow-black/40">
        {children}
      </div>
    </div>
  );
}
