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
      <div className="bg-primary pb-12 rounded-b-2xl pt-12 px-8">
        <h1 className="text-white text-3xl font-bold mb-4">
          <span className="text-3xl">Health records</span>
        </h1>
        <img src="/ads/volini.jpg" alt="yakult ad" className="rounded-xl" />
      </div>
      <div className="mb-6 flex justify-between items-center">
        <div className="flex justify-center w-full mt-6">
          <Link href="/journals/new">
            <Button>
              Add new journal
              <PlusIcon className="h-4 w-4" />
            </Button>
          </Link>
        </div>
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
