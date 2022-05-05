import React from 'react';

export default function NewsItem(props) {
  return (
    <div>
      <div className='card news--items--card' style={{ width: '18rem' }}>
        <img
          src={
            props.imgUrl
              ? props.imgUrl
              : 'https://images.news18.com/ibnlive/uploads/2022/01/untitled-3-60-164207932916x9.jpg'
          }
          className='card-img-top'
          alt='...'
        />
        <div className='card-body'>
          <h5 className='card-title'>
            {props.title.length > 60
              ? props.title.slice(0, 60) + '...'
              : props.title}
          </h5>
          <p className='card-text card--description'>
            {props.description
              ? props.description.length > 50
                ? props.description.slice(0, 50) + '...'
                : props.description
              : 'n/a'}
          </p>
          <hr />
          <a href={props.readMoreLink} className='btn btn-primary read--more'>
            Read More
          </a>
          <hr />
          <p>
            Source :{' '}
            <span style={{ color: 'red', fontWeight: '500px' }}>
              {props.author ? props.author : 'Unknown'}
            </span>{' '}
          </p>
        </div>
      </div>
    </div>
  );
}
