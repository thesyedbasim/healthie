'use server';

import { redirect } from 'next/navigation';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { firestore } from '@/lib/firebase';
import { Journal } from '../page';

export async function createNewJournal(formData: FormData) {
  try {
    await addDoc(collection(firestore, 'journals'), {
      hospitalName: formData.get('hospitalName'),
      location: formData.get('location'),
      doctorName: formData.get('doctorName'),
      date: new Date().toString(),
      amount: formData.get('amount'),
      advice: formData.get('advice'),
    });
  } catch (err) {
    console.error('unable to add new journal', err);
  }

  redirect('/journals');
}

export async function getAllJournals() {
  try {
    const journals: Journal[] = [];

    const querySnapshot = await getDocs(collection(firestore, 'journals'));

    querySnapshot.forEach((result) => {
      journals.push({ id: result.id, ...result.data() } as Journal);
    });

    return journals;
  } catch (err) {
    console.error('error while getting all journals', err);
  }
}
