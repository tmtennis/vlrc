import React from 'react';

interface SpaceCadetStudiosIconProps {
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}

const SpaceCadetStudiosIcon: React.FC<SpaceCadetStudiosIconProps> = ({ 
  size = 24, 
  color = '#ffccd5',
  style = {}
}) => {
  return (
    <svg
      width={style.width || size}
      height={style.height || size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke={style.color || color}
        strokeWidth="2"
        fill="none"
      />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fontSize="8"
        fill={style.color || color}
        fontWeight="bold"
      >
        SCS
      </text>
    </svg>
  );
};

export default SpaceCadetStudiosIcon;
