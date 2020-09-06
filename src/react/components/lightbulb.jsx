import React from 'react';

const Lightbulb = () => {
  return (
    <button className='Lightbulb' type='button'>
      <span className='Hidden'>Toggle Dark Mode</span>
      <svg
        width='250'
        height='275'
        viewBox='0 0 250 275'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fill='var(--lightbulb-fill)'
          d='M200.55 151.39a73.48 73.48 0 00-16.14-46.2c-9.69-12.28-16.45-24.19-20.66-36.4l-.31-.9a2.73 2.73 0 01-.13-.8V36.11a5.73 5.73 0 00-4.73-5.48 2.51 2.51 0 01-2.11-2.24C155.08 12.46 141.26 0 125 0a31.29 31.29 0 00-31.47 28.66 2.5 2.5 0 01-2.11 2.26 5.53 5.53 0 00-4.73 5.47v30.67a2.73 2.73 0 01-.13.8l-.3.88c-4.28 12.41-11 24.23-20.68 36.15a72.9 72.9 0 00-16.13 49.29c2 38.45 33.67 69.9 72.08 71.6a75.4 75.4 0 0055.67-20.53 73.84 73.84 0 0023.35-53.86z'
        />
        <path
          fill='var(--lightbulb-stroke)'
          d='M200.55 151.39a73.48 73.48 0 00-16.14-46.2c-9.69-12.28-16.45-24.19-20.66-36.4l-.31-.9a2.73 2.73 0 01-.13-.8V36.11a5.73 5.73 0 00-4.73-5.48 2.51 2.51 0 01-2.11-2.24C155.08 12.46 141.26 0 125 0a31.29 31.29 0 00-31.47 28.66 2.5 2.5 0 01-2.11 2.26 5.53 5.53 0 00-4.73 5.47v30.67a2.73 2.73 0 01-.13.8l-.3.88c-4.28 12.41-11 24.23-20.68 36.15a72.9 72.9 0 00-16.13 49.29c2 38.45 33.67 69.9 72.08 71.6a75.4 75.4 0 0055.67-20.53 73.84 73.84 0 0023.35-53.86zM104.96 28.02a20.05 20.05 0 0120-16.81 20.39 20.39 0 0120 16.8 2.51 2.51 0 01-2.46 2.94h-35.08a2.51 2.51 0 01-1.91-.89 2.48 2.48 0 01-.55-2.04zm-6.89 16.37a2.5 2.5 0 012.5-2.5h48.86a2.5 2.5 0 012.5 2.5v19.43a2.5 2.5 0 01-2.5 2.5h-48.86a2.5 2.5 0 01-2.5-2.5zm71 153a63.9 63.9 0 01-44.08 17.58c-1.12 0-2.24 0-3.37-.09-32.74-1.49-59.52-28.09-61.08-60.49a64.67 64.67 0 0114.25-42.35 136.43 136.43 0 0019.9-33A2.5 2.5 0 0197 77.5h56a2.5 2.5 0 012.3 1.52 141.18 141.18 0 0019.91 33 62.63 62.63 0 0113.67 39.37 63.63 63.63 0 01-19.84 46z'
        />
        <path
          fill='var(--lightbulb-stroke)'
          opacity='var(--lightbulb-rays)'
          d='M130.54 269.55v-15a5.54 5.54 0 00-11.08 0v15a5.54 5.54 0 0011.08 0zM182.1 237.75a5.53 5.53 0 00-5-2.84 5 5 0 00-2.89.83 6 6 0 00-2.77 3.66 4.88 4.88 0 00.63 3.77l7.5 13a5.47 5.47 0 007.55 2.05 6 6 0 002.79-3.67 4.91 4.91 0 00-.63-3.78.41.41 0 01-.07-.11zM212.66 207.85l13.06 7.35a5.44 5.44 0 007.6-2l.08-.12a5.16 5.16 0 00.59-4.06 5.33 5.33 0 00-2.63-3.32l-13.09-7.31a7.19 7.19 0 00-3-.89 5.93 5.93 0 00-5 2.85c-1.39 2.37-.27 5.86 2.39 7.5zM244.46 145.9h-15.67a4.8 4.8 0 00-3.29 1.33 5.7 5.7 0 00-1.78 4.15 5.44 5.44 0 005.54 5.45h15.2a5.46 5.46 0 100-10.91zM234.03 93.39a4.91 4.91 0 00-.63-3.78l-.06-.09a5.52 5.52 0 00-5-2.85 5 5 0 00-2.89.82l-13.16 7.4a6 6 0 00-2.72 3.63 4.87 4.87 0 00.64 3.78 5.83 5.83 0 007.89 2.13h.08l13.1-7.37a6 6 0 002.75-3.67zM37.43 94.91l-13.09-7.36a7.19 7.19 0 00-3-.89 5.91 5.91 0 00-4.93 2.73 6 6 0 002.31 7.6l13.07 7.4a5.45 5.45 0 007.6-2l.08-.12a5.11 5.11 0 00.58-4.06 5.28 5.28 0 00-2.62-3.3zM20.74 145.9H5.54a5.46 5.46 0 100 10.91h15.2a5.46 5.46 0 100-10.91zM34.74 197.48a5 5 0 00-2.9.83l-13.16 7.39a6.06 6.06 0 00-2.71 3.69 4.89 4.89 0 00.63 3.77 5.51 5.51 0 007.6 2.13l13.18-7.41a6 6 0 002.72-3.63 4.91 4.91 0 00-.63-3.78 1.18 1.18 0 01-.11-.19 4.88 4.88 0 00-4.62-2.8zM66.74 258.85a5.39 5.39 0 003.34-2.58l7.47-13a.78.78 0 01.1-.15 4.86 4.86 0 00.67-3.79 5.64 5.64 0 00-2.44-3.55 7.08 7.08 0 00-3-.87 5.92 5.92 0 00-5 2.85l-7.46 13a5.18 5.18 0 00-.64 4.13 5.34 5.34 0 002.62 3.32l.13.07a5.29 5.29 0 004.21.57z'
        />
      </svg>
    </button>
  );
};

export default Lightbulb;