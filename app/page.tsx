// app/page.tsx
"use client";
import React, { useState } from 'react';
import DailySchedule from './pages/DailySchedule';
import timetableData from './timetable.json';
import { format, parseISO } from 'date-fns';

const IndexPage: React.FC = () => {
  const timetable = timetableData;
  const dates = Object.keys(timetable);

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(parseISO(e.target.value));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Study Planner</h1>
      <input
        type="date"
        value={format(selectedDate, 'yyyy-MM-dd')}
        onChange={handleDateChange}
        className="mb-4"
      />
      <DailySchedule schedule={timetable} selectedDate={selectedDate} />
    </div>
  );
};

export default IndexPage;
