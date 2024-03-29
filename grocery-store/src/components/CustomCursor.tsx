import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import "../styles/CustomCursor.css";

interface CustomCursorProps {
  isHovering: boolean;
  isHoveringCartItem: boolean;
  isHoveringDiv: boolean;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({
  isHovering,
  isHoveringCartItem,
  isHoveringDiv,
}) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef<HTMLDivElement>(null);
  const scale = isHoveringCartItem ? 0.5 : 1;
  const reset = isHoveringDiv ? 0.2 : 0;

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setTimeout(() => {
        setCursorPosition({ x: e.clientX, y: e.clientY });
      }, 50);
    };

    window.addEventListener("mousemove", updateCursorPosition);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  useEffect(() => {
    gsap.to(cursorRef.current, {
      scale: isHoveringDiv ? 0.2 : 0,
      duration: 0.3,
    });
  }, [isHoveringDiv, scale]);

  useEffect(() => {
    gsap.to(cursorRef.current, {
      scale: isHovering ? scale : reset,
      duration: 0.3,
    });
  }, [isHovering, scale, reset]);

  useEffect(() => {
    gsap.to(cursorRef.current, {
      scale: isHoveringCartItem ? scale : reset,
      duration: 0.3,
    });
  }, [isHoveringCartItem, scale, reset]);

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor flex justify-center items-center`}
      style={{ left: cursorPosition.x, top: cursorPosition.y }}
    >
      {isHovering ? (
        <span className="text-white font-thin cursor-text mb-2">+</span>
      ) : (
        ""
      )}
      {isHoveringCartItem ? (
        <span className="text-white font-thin cursor-text mb-2">-</span>
      ) : (
        ""
      )}
    </div>
  );
};

export default CustomCursor;
