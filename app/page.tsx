// app/page.tsx
"use client";
import React, { useState } from 'react';
import DailySchedule from './pages/DailySchedule';
import timetableData from './timetable.json';
import { format, parseISO } from 'date-fns';
import { BackgroundAnimation } from "./components/ui/Background-Animation";

const IndexPage: React.FC = () => {
  const timetable = timetableData;

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(parseISO(e.target.value));
  };

  return (
    <div className='wrapper'>
      <BackgroundAnimation>
      <div className="container mx-auto p-4" align="center">
        <h1 className="text-3xl font-bold mb-4">Study Planner</h1>
        <input
          type="date"
          value={format(selectedDate, "yyyy-MM-dd")}
          onChange={handleDateChange}
          className="mb-4"
        />
        <DailySchedule schedule={timetable} selectedDate={selectedDate} />
      </div>
      </BackgroundAnimation>
    </div>
  );
};

export default IndexPage;
