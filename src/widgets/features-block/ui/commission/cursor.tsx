import { CSSProperties } from 'react';

export function Cursor({ style }: { style: CSSProperties }) {
  return (
    <svg
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      width="43"
      height="47"
      viewBox="0 0 43 47"
      fill="none">
      <path
        d="M11.1275 3.64677C6.7178 1.12449 1.36473 4.88154 2.23774 9.88607L7.45908 39.8172C8.51449 45.8673 16.9001 46.6127 19.006 40.8435L22.4947 31.2864C22.782 30.4994 23.5293 29.9749 24.3671 29.9723L34.541 29.9403C40.6824 29.921 42.8322 21.7813 37.5012 18.7321L11.1275 3.64677Z"
        fill="url(#paint0_linear_955_3950)"
        stroke="#F1F5F9"
        strokeWidth="4"
      />
      <defs>
        <linearGradient
          id="paint0_linear_955_3950"
          x1="1.90306"
          y1="-33.3301"
          x2="-24.3108"
          y2="39.2676"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#9FCCFA" />
          <stop offset="1" stopColor="#0974F1" />
        </linearGradient>
      </defs>
    </svg>
  );
}
