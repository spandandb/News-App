import React from 'react';

export default function CategorySelector() {
  return (
    <div className='category--selecter m-5'>
      <div
        className='btn-group'
        role='group'
        aria-label='Basic outlined example'
      >
        <button type='button' className='btn btn-outline-light'>
          Business
        </button>
        <button type='button' className='btn btn-outline-light'>
          Entertainment
        </button>
        <button type='button' className='btn btn-outline-light'>
          General
        </button>
        <button type='button' className='btn btn-outline-light'>
          Health
        </button>
        <button type='button' className='btn btn-outline-light'>
          Science
        </button>
        <button type='button' className='btn btn-outline-light'>
          Sports
        </button>
        <button type='button' className='btn btn-outline-light'>
          Technology
        </button>
      </div>
    </div>
  );
}
