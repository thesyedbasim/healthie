import { Button } from '@/components/ui/button';
import { PlusIcon } from '@radix-ui/react-icons';
import JournalCard from './components/JournalCard';
import Link from 'next/link';
import { getAllJournals } from './new/actions';
import { getFormattedDate } from '@/lib/firebase/utils';

export interface Journal {
  id: string;
  hospitalName: string;
  location: string;
  doctorName: string;
  doctorSpecialization: string;
  date: string;
  advice: string;
}

export default async function JournalPage() {
  const journals = await getAllJournals();

  if (!journals) return;

  return (
    <>
      <div className="mb-6 flex justify-between items-center">
        <h1 className="font-extrabold text-3xl">Health records</h1>
        <Link href="/journals/new">
          <Button size="icon">
            <PlusIcon className="h-4 w-4" />
          </Button>
        </Link>
      </div>
      <div className="w-full grid grid-flow-row gap-4">
        {journals.map((journal) => (
          <JournalCard
            key={journal.id}
            id={journal.id}
            hospitalName={journal.hospitalName}
            location={journal.date}
            doctorName={journal.doctorName}
            doctorSpecialization={journal.doctorSpecialization}
            date={getFormattedDate(journal.date)}
            advice={journal.advice}
          />
        ))}
      </div>
    </>
  );
}
