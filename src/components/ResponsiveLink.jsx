// components/ResponsiveLinks.js

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const ResponsiveLinks = ({ onLinkChange }) => {
  const [screenSize, setScreenSize] = useState('');

  useEffect(() => {
    const handleResize = () => {
      const newSize = window.innerWidth <= 950 ? 'small' : 'large';
      setScreenSize(newSize);
      onLinkChange(newSize); // Call the callback with the new size
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize screen size on mount

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [onLinkChange]);

  return (
    <div>
      {screenSize === 'small' ? (
        <Link href="/link1">
          <a>Link 1</a>
        </Link>
      ) : (
        <Link href="/link2">
          <a>Link 2</a>
        </Link>
      )}
    </div>
  );
};

export default ResponsiveLinks;
