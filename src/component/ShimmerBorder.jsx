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
    <div className="relative rounded-full inline-block" style={{ padding: borderWidth }}>
      <style>{customCss}</style>

      {/* Shimmer border */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background: `conic-gradient(from var(--angle), transparent 25%, #22d3ee 50%, #a78bfa 75%, transparent 100%)`,
          animation: "shimmer-spin 3s linear infinite",
          mask: `radial-gradient(farthest-side, black calc(100% - ${borderWidth}px), transparent 100%)`,
          WebkitMask: `radial-gradient(farthest-side, black calc(100% - ${borderWidth}px), transparent 100%)`,
          filter: "blur(4px)", // Glowy effect
        }}
      />

      {/* Inner content */}
      <div className="relative rounded-full overflow-hidden bg-gray-900">
        {children}
      </div>
    </div>
  );
}
