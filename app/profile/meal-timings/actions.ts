'use server';

import { firestore } from '@/lib/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { redirect } from 'next/navigation';

export async function saveMealTimings() {
  redirect('/reminders');
}
