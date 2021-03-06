import React from 'react';
import Button from './button';

const Social = () => {
  return (
    <div className='Social'>
      <Button href='/about/'>About Me</Button>
      <a
        rel='me noopener noreferrer'
        title='David Bushell on Twitter'
        href='https://twitter.com/dbushell/'
        target='_blank'
      >
        <span className='Hidden'>Twitter</span>
        <svg aria-label='Twitter' role='img' viewBox='0 0 512 512'>
          <rect width='512' height='512' rx='15%' />
          <path
            fill='var(--color-background)'
            d='M437 152a72 72 0 0 1-40 12 72 72 0 0 0 32-40 72 72 0 0 1-45 17 72 72 0 0 0-122 65 200 200 0 0 1-145-74 72 72 0 0 0 22 94 72 72 0 0 1-32-7 72 72 0 0 0 56 69 72 72 0 0 1-32 1 72 72 0 0 0 67 50 200 200 0 0 1-105 29 200 200 0 0 0 309-179 200 200 0 0 0 35-37'
          />
        </svg>
      </a>
      <a
        rel='me noopener noreferrer'
        title='David Bushell on GitHub'
        href='https://github.com/dbushell/'
        target='_blank'
      >
        <span className='Hidden'>GitHub</span>
        <svg aria-label='GitHub' role='img' viewBox='0 0 512 512'>
          <rect width='512' height='512' rx='15%' />
          <path
            fill='var(--color-background)'
            d='M335 499c14 0 12 17 12 17H165s-2-17 12-17c13 0 16-6 16-12l-1-50c-71 16-86-28-86-28-12-30-28-37-28-37-24-16 1-16 1-16 26 2 40 26 40 26 22 39 59 28 74 22 2-17 9-28 16-35-57-6-116-28-116-126 0-28 10-51 26-69-3-6-11-32 3-67 0 0 21-7 70 26 42-12 86-12 128 0 49-33 70-26 70-26 14 35 6 61 3 67 16 18 26 41 26 69 0 98-60 120-117 126 10 8 18 24 18 48l-1 70c0 6 3 12 16 12z'
          />
        </svg>
      </a>
      <a
        rel='me noopener noreferrer'
        title='David Bushell on CodePen'
        href='https://codepen.io/dbushell/'
        target='_blank'
      >
        <span className='Hidden'>CodePen</span>
        <svg aria-label='CodePen' role='img' viewBox='0 0 512 512'>
          <rect width='512' height='512' rx='15%' />
          <g
            fill='none'
            stroke='var(--color-background)'
            stroke-width='33'
            stroke-linejoin='round'
          >
            <path d='M81 198v116l175 117 175-117V198L256 81z' />
            <path d='M81 198l175 116 175-116M256 81v117' />
            <path d='M81 314l175-116 175 116M256 431V314' />
          </g>
        </svg>
      </a>
      <a
        title='dbushell.com RSS Feed'
        href='https://dbushell.com/rss.xml'
        target='_blank'
      >
        <span className='Hidden'>RSS Feed</span>
        <svg aria-label='RSS Feed' role='img' viewBox='0 0 512 512'>
          <rect width='512' height='512' rx='15%' />
          <circle cx='145' cy='367' r='35' fill='var(--color-background)' />
          <path
            fill='none'
            stroke='var(--color-background)'
            stroke-width='60'
            d='M109 241c89 0 162 73 162 162m114 0c0-152-124-276-276-276'
          />
        </svg>
      </a>
    </div>
  );
};

export default Social;
