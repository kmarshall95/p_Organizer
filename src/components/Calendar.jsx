import React, { useState, useEffect } from 'react';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CalendarApp() {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const prevButtons = document.querySelectorAll('.react-calendar__navigation__prev2-button');
    const nextButtons = document.querySelectorAll('.react-calendar__navigation__next2-button');

    prevButtons.forEach((button) =>
      button.addEventListener('click', () => {
        setValue(new Date(value.setMonth(value.getMonth() - 1)));
      })
    );

    nextButtons.forEach((button) =>
      button.addEventListener('click', () => {
        setValue(new Date(value.setMonth(value.getMonth() + 1)));
      })
    );

    return () => {
      prevButtons.forEach((button) => button.removeEventListener('click'));
      nextButtons.forEach((button) => button.removeEventListener('click'));
    };
  }, [value]);

  return (
    <div>
      <Calendar value={value} />
    </div>
  );
}

export default CalendarApp;