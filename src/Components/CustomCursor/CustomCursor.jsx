import cursorImage from '../../assets/cursor.png';
import { gsap } from 'gsap';
import "./CustomCursor.css";
import { useRef, useState, useEffect } from 'react';

const CustomCursor = () => {
    const [prevPosition, setPrevPosition] = useState({ x: 0, y: 0 });
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const cursorRef = useRef(null);
    const [cursorType, setCursorType] = useState('default');

    useEffect(() => {
        const updatePosition = (e) => {
            setPrevPosition({ ...position }); // Update previous position
            setPosition({ x: e.clientX, y: e.clientY }); // Update current position
        };

        document.addEventListener('mousemove', updatePosition);

        return () => {
            document.removeEventListener('mousemove', updatePosition);
        };
    }, [position]);

    useEffect(() => {
        const cursor = cursorRef.current;
        const direction = position.x > prevPosition.x ? 1 : -1; // Determine direction of movement
        const rotate = direction === 1 ? 30 : -50; // Rotate clockwise for right movement, counter-clockwise for left movement

        gsap.to(cursor, {
            duration: 0.1, // Duration for rotation animation
            x: position.x,
            y: position.y,
            rotate: rotate,
            ease: 'power2.easeOut', // Easing function for smoother rotation
        });

        const cursorType = cursor === 'pointer' ? 'pointer' : 'default';
        setCursorType(cursorType);
    }, [position, prevPosition]);

    return (
        <div className='custom-cursor' ref={cursorRef}>
            <img src={cursorImage} alt="Custom Cursor" className={cursorType === 'pointer' ? 'hide-rocket' : ''} />
        </div>
    );
};

export default CustomCursor;
