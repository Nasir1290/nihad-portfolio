// 'use client';

// import { useEffect, useRef } from 'react';

// const CursorTrail: React.FC = () => {
//   const trailElements = useRef<HTMLDivElement[]>([]);

//   useEffect(() => {
//     let mouseX = 0;
//     let mouseY = 0;

//     const handleMouseMove = (e: MouseEvent) => {
//       mouseX = e.clientX;
//       mouseY = e.clientY;
//     };

//     const createTrail = () => {
//       const trail = document.createElement('div');
//       trail.className = 'cursor-trail';
//       trail.style.cssText = `
//         position: fixed;
//         width: 6px;
//         height: 6px;
//         background: rgba(0, 212, 255, 0.6);
//         border-radius: 50%;
//         pointer-events: none;
//         z-index: 9999;
//         left: ${mouseX}px;
//         top: ${mouseY}px;
//         transform: translate(-50%, -50%);
//         transition: all 0.3s ease-out;
//       `;

//       document.body.appendChild(trail);
//       trailElements.current.push(trail);

//       setTimeout(() => {
//         trail.style.opacity = '0';
//         trail.style.transform = 'translate(-50%, -50%) scale(0)';
//         setTimeout(() => {
//           if (trail.parentNode) {
//             trail.parentNode.removeChild(trail);
//           }
//           trailElements.current = trailElements.current.filter((el) => el !== trail);
//         }, 300);
//       }, 100);
//     };

//     // Add mousemove listener
//     document.addEventListener('mousemove', handleMouseMove);

//     // Create trail every 50ms
//     const interval = setInterval(createTrail, 50);

//     // Cleanup on unmount
//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//       clearInterval(interval);
//       trailElements.current.forEach((trail) => {
//         if (trail.parentNode) {
//           trail.parentNode.removeChild(trail);
//         }
//       });
//       trailElements.current = [];
//     };
//   }, []);

//   return null; // No UI, just an effect
// };

// export default CursorTrail;



'use client';

import { useEffect, useRef } from 'react';

const CursorTrail: React.FC = () => {
  const trailElements = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if ('ontouchstart' in window) return; // Skip on touch devices

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const createTrail = () => {
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      trail.style.cssText = `
        position: fixed;
        width: 6px;
        height: 6px;
        background: rgba(0, 212, 255, 0.6);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        left: ${mouseX}px;
        top: ${mouseY}px;
        transform: translate(-50%, -50%);
        transition: all 0.3s ease-out;
      `;

      document.body.appendChild(trail);
      trailElements.current.push(trail);

      setTimeout(() => {
        trail.style.opacity = '0';
        trail.style.transform = 'translate(-50%, -50%) scale(0)';
        setTimeout(() => {
          if (trail.parentNode) {
            trail.parentNode.removeChild(trail);
          }
          trailElements.current = trailElements.current.filter((el) => el !== trail);
        }, 300);
      }, 100);
    };

    document.addEventListener('mousemove', handleMouseMove);
    const interval = setInterval(createTrail, 50);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
      trailElements.current.forEach((trail) => {
        if (trail.parentNode) {
          trail.parentNode.removeChild(trail);
        }
      });
      trailElements.current = [];
    };
  }, []);

  return null;
};

export default CursorTrail;