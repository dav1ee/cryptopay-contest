export function Arrow({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg
      style={
        direction === 'right' ? { rotate: '180deg' } : { rotate: '0deg' }
      }
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="12"
      viewBox="0 0 21 12"
      fill="none">
      <path
        d="M20.0098 6.36319H0.999765M0.999765 6.36319L5.45415 1.90881M0.999765 6.36319L5.45415 10.8176"
        stroke="#29313D"
        strokeOpacity="0.92"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
    </svg>
  );
}
