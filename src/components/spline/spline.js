import React, { useEffect } from 'react';

const SplineViewer = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://unpkg.com/@splinetool/viewer@1.9.20/build/spline-viewer.js";
    script.type = "module";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <spline-viewer url="https://prod.spline.design/l1X3un6h7AgnoAZG/scene.splinecode"></spline-viewer>
    </div>
  );
};

export default SplineViewer;