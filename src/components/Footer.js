import React from 'react';

export default function Footer() {
  return (
    <div>
      <footer
        className='text-center text-lg-start text-white'
        style={{ backgroundColor: '#1c2331' }}
      >
        <section
          className='d-flex justify-content-between p-4'
          style={{
            backgroundImage:
              'linear-gradient(to left, rgba(255,0,0,0), rgba(255,0,0,1))'
          }}
        >
          <div className='me-5'>
            <span>Created by 🔥 Spandan Das Barman </span>
          </div>
        </section>
        <section>
          <div className='container text-center text-md-start mt-5'>
            <div className='row mt-3'>
              <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold'>About</h6>
                <hr
                  className='mb-4 mt-0 d-inline-block mx-auto'
                  style={{
                    width: '50px',
                    backgroundImage:
                      'linear-gradient(to left, rgba(255,0,0,0), rgba(255,0,0,1))',
                    height: '2px'
                  }}
                />
                <p>
                  This app feeds your appetite for your daily dose of news.Do
                  connect with me if you want to team up for the creation of any
                  others interesting project.
                </p>
              </div>
              <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold'>Credits</h6>
                <hr
                  className='mb-4 mt-0 d-inline-block mx-auto'
                  style={{
                    width: '60px',
                    backgroundImage:
                      'linear-gradient(to left, rgba(255,0,0,0), rgba(255,0,0,1))',
                    height: '2px'
                  }}
                />
                <p>
                  <a
                    href='https://gnews.io/'
                    className='text-white'
                    style={{ textDecoration: 'none' }}
                    target='_blank'
                    rel='noreferrer'
                  >
                    GNews API
                  </a>
                </p>
                <p>
                  <a
                    href='https://reactjs.org/'
                    className='text-white'
                    style={{ textDecoration: 'none' }}
                    target='_blank'
                    rel='noreferrer'
                  >
                    React JS Team
                  </a>
                </p>
                <p>
                  <a
                    href='https://getbootstrap.com/'
                    className='text-white'
                    style={{ textDecoration: 'none' }}
                    target='_blank'
                    rel='noreferrer'
                  >
                    Bootstrap
                  </a>
                </p>
              </div>
              <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold'>
                  My Social Media Links
                </h6>
                <hr
                  className='mb-4 mt-0 d-inline-block mx-auto'
                  style={{
                    width: '184px',
                    backgroundImage:
                      'linear-gradient(to left, rgba(255,0,0,0), rgba(255,0,0,1))',
                    height: '2px'
                  }}
                />
                <p>
                  <a
                    href='https://www.facebook.com/spandan.dasbarman'
                    className='text-white'
                    style={{ textDecoration: 'none' }}
                    target='_blank'
                    rel='noreferrer'
                  >
                    Facebook
                  </a>
                </p>
                <p>
                  <a
                    href='https://github.com/spandandb'
                    className='text-white'
                    style={{ textDecoration: 'none' }}
                    target='_blank'
                    rel='noreferrer'
                  >
                    Github
                  </a>
                </p>
                <p>
                  <a
                    href='https://www.instagram.com/spandy_db/'
                    className='text-white'
                    style={{ textDecoration: 'none' }}
                    target='_blank'
                    rel='noreferrer'
                  >
                    Instagram
                  </a>
                </p>
                <p>
                  <a
                    href='https://www.linkedin.com/in/spandan-das-barman-ba0970239/'
                    className='text-white'
                    style={{ textDecoration: 'none' }}
                    target='_blank'
                    rel='noreferrer'
                  >
                    LinkedIn
                  </a>
                </p>
              </div>
              <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold'>Contact</h6>
                <hr
                  className='mb-4 mt-0 d-inline-block mx-auto'
                  style={{
                    width: '65px',
                    backgroundImage:
                      'linear-gradient(to left, rgba(255,0,0,0), rgba(255,0,0,1))',
                    height: '2px'
                  }}
                />
                <p>
                  <i className='fas fa-home mr-3' /> Kolkata, WB, India
                </p>
                <p>
                  <i className='fas fa-envelope mr-3' /> spandandb94@gmail.com
                </p>
                <p>
                  <i className='fas fa-phone mr-3' /> +91 8481818510
                </p>
              </div>
            </div>
          </div>
        </section>
        <div
          className='text-center p-3'
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
        >
          © 2022 Copyright :<span className='text-white'> NewsLand</span>
        </div>
      </footer>
    </div>
  );
}
