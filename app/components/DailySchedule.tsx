// components/DailySchedule.tsx
import React from 'react';
import { format } from 'date-fns';

interface Schedule {
  [dateRange: string]: {
    [week: string]: {
      [timeOfDay: string]: {
        Time: string;
        Subjects: string[];
      }[];
    };
  };
}

interface DailyScheduleProps {
  schedule: Schedule;
  selectedDate: Date;
}

const DailySchedule: React.FC<DailyScheduleProps> = ({ schedule, selectedDate }) => {
  // Format the selected date to match the keys in the timetable data
  const formattedDate = format(selectedDate, "do MMMM yyyy");

  // Retrieve the schedule for the formatted date
  const currentSchedule = schedule[formattedDate];

  if (!currentSchedule) {
    return <p>No schedule available for {formattedDate}</p>;
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Schedule for {formattedDate}</h2>
      <div className="divide-y divide-gray-200">
        {Object.entries(currentSchedule).map(([week, weekSchedule]) => (
          <div key={week} className="mb-4">
            <h3 className="text-lg font-semibold">{week}</h3>
            {Object.entries(weekSchedule).map(([timeOfDay, subjects], index) => (
              <div key={index} className="mt-2">
                <h4 className="text-md font-semibold">{timeOfDay}</h4>
                <ul className="list-disc pl-5">
                  {subjects.map((subject, idx) => (
                    <li key={idx}>{subject.Subjects.join(', ')}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailySchedule;