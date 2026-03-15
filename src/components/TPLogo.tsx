"use client";

import React from "react";

export default function TPLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="metal-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="20%" stopColor="#E5E7EB" />
          <stop offset="40%" stopColor="#9CA3AF" />
          <stop offset="60%" stopColor="#F3F4F6" />
          <stop offset="80%" stopColor="#D1D5DB" />
          <stop offset="100%" stopColor="#FFFFFF" />
        </linearGradient>
        
        <filter id="complex-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feSpecularLighting surfaceScale="5" specularConstant="1" specularExponent="20" lightingColor="#white" in="blur" result="specular">
            <fePointLight x="-50" y="-50" z="100" />
          </feSpecularLighting>
          <feComposite in="specular" in2="SourceGraphic" operator="in" result="specularOut" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
            <feMergeNode in="specularOut" />
          </feMerge>
        </filter>

        <linearGradient id="ring-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="50%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>

      {/* Dynamic Outer Rings */}
      <g opacity="0.4">
        <circle
          cx="50"
          cy="50"
          r="46"
          stroke="url(#metal-gradient)"
          strokeWidth="1"
          strokeDasharray="40 160"
        >
          <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="10s" repeatCount="indefinite" />
        </circle>
        <circle
          cx="50"
          cy="50"
          r="42"
          stroke="url(#metal-gradient)"
          strokeWidth="1.5"
          strokeDasharray="80 120"
        >
          <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="-360 50 50" dur="15s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Main TP Monogram - More Bold and Intertwined */}
      <g filter="url(#complex-glow)">
        {/* Character T - Styled */}
        <path
          d="M25 25 H55 V34 H44 V75 H34 V34 H25 V25Z"
          fill="url(#metal-gradient)"
        />
        
        {/* Character P - Styled and slightly offset for depth */}
        <path
          d="M48 25 H72 C82 25 85 33 85 41 C85 49 82 57 72 57 H58 V75 H48 V25ZM58 34 V48 H72 C75 48 76 46 76 41 C76 36 75 34 72 34 H58Z"
          fill="url(#metal-gradient)"
        />
      </g>

      {/* Ground shadows/glow */}
      <ellipse cx="50" cy="80" rx="30" ry="4" fill="url(#metal-gradient)" opacity="0.15" />
    </svg>
  );
}
