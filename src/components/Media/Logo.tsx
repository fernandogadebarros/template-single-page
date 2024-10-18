export const Logo = ({ className }: { className?: string }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <path fill="#030303" d="M0 0h64v64H0z" />
        <circle stroke="#FFF7F0" strokeWidth={3} cx={24} cy={24} r={12} />
      </g>
    </svg>
  );
};
