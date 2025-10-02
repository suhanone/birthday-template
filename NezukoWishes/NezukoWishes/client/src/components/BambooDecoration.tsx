export default function BambooDecoration() {
  return (
    <div className="fixed left-0 top-0 bottom-0 w-24 pointer-events-none z-0 opacity-20">
      <svg
        viewBox="0 0 100 800"
        className="h-full w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="35" y="0" width="8" height="800" fill="url(#bamboo-gradient)" />
        <rect x="65" y="0" width="8" height="800" fill="url(#bamboo-gradient)" />
        
        {[...Array(15)].map((_, i) => (
          <g key={i}>
            <line
              x1="35"
              y1={i * 55 + 30}
              x2="43"
              y2={i * 55 + 30}
              stroke="#4ade80"
              strokeWidth="2"
            />
            <line
              x1="65"
              y1={i * 55 + 45}
              x2="73"
              y2={i * 55 + 45}
              stroke="#4ade80"
              strokeWidth="2"
            />
          </g>
        ))}
        
        <defs>
          <linearGradient id="bamboo-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#86efac" />
            <stop offset="50%" stopColor="#4ade80" />
            <stop offset="100%" stopColor="#22c55e" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
