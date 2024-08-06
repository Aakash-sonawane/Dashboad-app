import React from 'react';

const BurgerIcon = () => (
    <div className='icon-wrap burger'>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      version="1.1"
    >
      <defs />
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <rect x="0" y="0" width="24" height="24" />
        <path
          d="M15,15 L15.9974233,16.1399123 C16.3611054,16.555549 16.992868,16.5976665 17.4085046,16.2339844 C17.4419154,16.20475 17.4733423,16.1733231 17.5025767,16.1399123 L18.5,15 L21,15 C20.4185426,17.9072868 17.865843,20 14.9009805,20 L9.09901951,20 C6.13415704,20 3.58145737,17.9072868 3,15 L15,15 Z"
          fill="#479ee3"
        />
        <path
          d="M21,9 L3,9 L3,9 C3.58145737,6.09271316 6.13415704,4 9.09901951,4 L14.9009805,4 C17.865843,4 20.4185426,6.09271316 21,9 Z"
          fill="#479ee3"
        />
        <rect
          fill="#479ee3"
          opacity="0.3"
          x="2"
          y="11"
          width="20"
          height="2"
          rx="1"
        />
      </g>
    </svg>
    </div>
);

export default BurgerIcon;
