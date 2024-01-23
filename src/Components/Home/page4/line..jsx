import React, { useState } from 'react';
import styles from './page4.module.css'

const Line = () => {
  const [dotPosition, setDotPosition] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(0);

  const handleDragStart = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDrag = (e) => {
    if (dragging) {
      const containerRect = e.currentTarget.getBoundingClientRect();
      const newDotPosition = e.clientX - containerRect.left;
      const maxPosition = containerRect.width;
      setDotPosition(Math.max(0, Math.min(newDotPosition, maxPosition)));

      const percentage = (newDotPosition / maxPosition) * 100;
      const month = Math.round((percentage * 12) / 100); // Calculate the month based on dot position
      setCurrentMonth(month);
    }
  };

  const handleDragEnd = () => {
    setDragging(false);
  };

  return (
    <div className="h-[4vh]  items-center justify-center relative">
      <h2 className=" text-[30px] mt-2 mb-[15px]">More than {currentMonth} months</h2>
      <div
        className="w-[100%] h-1 bg-gray-600  relative"
        onMouseDown={handleDragStart}
        onMouseMove={handleDrag}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
      >
        <div
          className={`absolute w-4 h-4  rounded-full shadow-md cursor-pointer ${styles.linecolor} `}
          style={{ left: `${dotPosition}px`, top: '-5px' }}
          draggable="true"
          onMouseDown={handleDragStart}
        />
        <div
          className={`absolute top-0 left-0 h-full  rounded-full ${styles.linecolor}`}
          style={{ width: `${dotPosition}px` }}
        />
      </div>
    </div>
  );
};

export default Line;
