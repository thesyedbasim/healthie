'use client';

import { Reminder } from '../page';
import ReminderCard from './ReminderCard';

export default function ReminderCardsContainer({
  reminders,
}: {
  reminders: Reminder[];
}) {
  return (
    <div className="space-y-4">
      {reminders?.map((reminder) => (
        <ReminderCard
          key={reminder.id}
          id={reminder.id}
          startDate={''}
          endDate={''}
          medicineTime="after"
          medicineName={reminder.medicineName}
          medicineTimestamp={reminder.medicineTimestamp}
        />
      ))}
    </div>
  );
}
