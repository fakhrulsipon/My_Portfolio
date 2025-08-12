// React component হিসেবে Navbar লোগো (SVG)
const Logo = () => (
    <svg
        width="50"
        height="50"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="50" cy="50" r="48" stroke="#4F46E5" strokeWidth="4" fill="#EEF2FF" />
        <text
            x="50%"
            y="55%"
            textAnchor="middle"
            fill="#4F46E5"
            fontSize="50"
            fontFamily="Arial, sans-serif"
            fontWeight="700"
            dominantBaseline="middle"
        >
            F
        </text>
    </svg>
);

export default Logo;
