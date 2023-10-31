import React from 'react';

import { type IconPropsType } from '../../types/iconPropsType';

const IconScrap = ({ color }: IconPropsType) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3"
        y="2"
        width="18"
        height="20"
        rx="2"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d="M8 7H16M8 11.5H16M8 16H13.2"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconScrap;
