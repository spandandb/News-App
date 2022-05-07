import React from 'react';

export default function CategorySelector(props) {
  return (
    <div className='category--selecter m-5'>
      <div
        className='btn-group'
        role='group'
        aria-label='Basic outlined example'
      >
        <button
          type='button'
          className='btn btn-outline-light'
          onClick={props.categoryBusiness}
        >
          Business
        </button>
        <button
          type='button'
          className='btn btn-outline-light'
          onClick={props.categoryEntertainment}
        >
          Entertainment
        </button>
        <button
          type='button'
          className='btn btn-outline-light'
          onClick={props.categoryGeneral}
        >
          General
        </button>
        <button
          type='button'
          className='btn btn-outline-light'
          onClick={props.categoryHealth}
        >
          Health
        </button>
        <button
          type='button'
          className='btn btn-outline-light'
          onClick={props.categoryScience}
        >
          Science
        </button>
        <button
          type='button'
          className='btn btn-outline-light'
          onClick={props.categorySports}
        >
          Sports
        </button>
        <button
          type='button'
          className='btn btn-outline-light'
          onClick={props.categoryTechnology}
        >
          Technology
        </button>
      </div>
    </div>
  );
}
