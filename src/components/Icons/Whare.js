import React from 'react'

const Whare = ({
  style = {},
  fill = '#000',
  viewBox = '0 0 100 60',
  width = '100%',
  className = '',
  height = '100%',
}) => (
  <svg
    fill={fill}
    width={width}
    style={style}
    height={height}
    className={className}
    xmlns="xmlns='http://www.w3.org/2000/svg"
    viewBox={viewBox}
  >
    <switch>
      <g>
        <polygon points="4.22,42.121 50.444,11.749 96.02,41.992 96.02,34.478 50.444,4.235 4.22,34.607" />
        <path d="M50.43,14.94L20.088,34.737l-0.056,14.228h16.389V34.364h12.877v14.601l33.374-0.092V36.272L50.43,14.94z M70.386,45.597 H56.783V34.414h13.603V45.597z" />
        <rect x="13.013" y="50.942" width="23.479" height="3.89" />
        <rect x="49.205" y="50.942" width="40.213" height="3.89" />
        <path d="M17.034,50.942h-4.021V23.181c0,0,0-1.427,1.989-1.427c2.032,0,2.032,1.427,2.032,1.427V50.942z" />
        <path d="M89.418,50.942h-4.021V23.181c0,0,0-1.427,1.989-1.427c2.032,0,2.032,1.427,2.032,1.427V50.942z" />
        <path d="M53.103,2.495c0,0,0-1.366-2.659-1.366c-2.659,0-2.659,1.366-2.659,1.366V9.69h5.318V2.495z" />
      </g>
    </switch>
  </svg>
)

export default Whare
