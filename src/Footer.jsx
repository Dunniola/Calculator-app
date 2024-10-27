import React from 'react';

function Footer() {
  return (
    <div>
      <p className="attribution flex  px-10 mt-2 items-center whitespace-nowrap  gap-2  text-text-whiteText text-sm max-md:px-0">
        <span>Challenge by</span>{' '}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">
          <span className='text-text-darkGrayishBlue underline'>Frontend Mentor</span>
        </a>{' '}
        <span>coded by</span>{' '}
        <a href="https://github.com/Dunniola/Calculator-app.git" target="_blank" rel="noopener noreferrer">
          <span className='text-text-darkGrayishBlue underline'>Dunniola.</span>
        </a>
      </p>
    </div>
  );
}

export default Footer;
