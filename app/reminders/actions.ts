'use server';

import { firestore } from '@/lib/firebase';
import {
  addDoc,
  and,
  collection,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { redirect } from 'next/navigation';
import { Journal } from '../journals/page';

export async function createNewReminder({
  medicineName,
  medicineTimestamp,
  medicineTime,
  startDate,
  endDate,
}: {
  medicineTime: 'before' | 'after';
  medicineTimestamp: string;
  medicineName: string;
  startDate: Date;
  endDate: Date;
}) {
  try {
    await addDoc(collection(firestore, 'reminders'), {
      medicineName,
      medicineTime,
      medicineTimestamp,
      startDate: new Date(startDate).toString(),
      endDate: new Date(endDate).toString(),
    });
  } catch (err) {
    console.error('unable to add new reminder', err);
  }

  redirect('/reminders');
}

export async function getAllRemindersByDate(date: Date) {
  try {
    const reminders: any[] = [];

    const querySnapshot = await getDocs(
      query(collection(firestore, 'reminders'))
    );

    querySnapshot.forEach((result) => {
      reminders.push({ id: result.id, ...result.data() } as any);
    });

    return reminders;
  } catch (err) {
    console.error('error while getting all reminders', err);
  }
}
