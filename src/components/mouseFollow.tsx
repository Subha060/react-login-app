import { useState, useEffect } from 'react';
import '../App.css'; // Import your CSS file

const MouseCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(window.innerWidth > 700);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const handleResize = () => {
      setIsVisible(window.innerWidth > 1000);
    };

    document.addEventListener('mousemove', updatePosition);
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const { x, y } = mousePosition;

  return (
    <>
      {isVisible && (
        <>
          <div
            className="mouseBody"
            style={{
              transform: `translate(${x - 35}px, ${y - 35}px)` // Assuming 50px width/height
            }}
          />
          <div
            className="mouseDot"
            style={{
              transform: `translate(${x - 10}px, ${y - 10}px)` // Assuming 8px width/height
            }}
          />
        </>
      )}
    </>
  );
};

export default MouseCursor;
