import CalendarIcon from '@/app/components/icons/CalendarIcon';
import DoctorAdviceIcon from '@/app/components/icons/DoctorAdviceIcon';
import MoneyIcon from '@/app/components/icons/MoneyIcon';
import PersonIcon from '@/app/components/icons/PersonIcon';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { firestore } from '@/lib/firebase';
import { getFormattedDate } from '@/lib/firebase/utils';
import { ChevronLeftIcon } from '@radix-ui/react-icons';
import { doc, getDoc } from 'firebase/firestore';
import Link from 'next/link';

export default async function JournalDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const journal = await getDoc(doc(firestore, 'journals', params.id));

  if (!journal.exists()) return;

  const journalData = journal.data();

  return (
    <>
      <div className="bg-primary pb-12 rounded-b-2xl pt-12 px-8">
        <div className="space-y-2 mb-6">
          <Link href="/journals">
            <Button variant="outline" size="icon">
              <ChevronLeftIcon className="h-6 w-6" />
            </Button>
          </Link>
        </div>
        <h1 className="text-white text-3xl font-bold mb-4">
          <span className="text-3xl">{journalData.hospitalName}</span>
          <p className="text-lg">{journalData.location}</p>
        </h1>
        <img src="/ads/volini.jpg" alt="yakult ad" className="rounded-xl" />
      </div>
      <div className="space-y-4">
        <Card className="grid grid-cols-[min-content_1fr] gap-8 p-6 items-center">
          <div className="">
            <CalendarIcon />
          </div>
          <CardContent className="p-0">
            <h2 className="font-semibold text-lg">
              {getFormattedDate(journalData.date)}
            </h2>
            <p className="text-md">Date of treatment</p>
          </CardContent>
        </Card>
        <Card className="grid grid-cols-[min-content_1fr] gap-8 p-6 items-center">
          <div className="">
            <PersonIcon />
          </div>
          <CardContent className="p-0">
            <h2 className="font-semibold text-lg">{journalData.doctorName}</h2>
            <p className="text-md">{journalData.doctorSpecialization}</p>
          </CardContent>
        </Card>
        <Card className="grid grid-cols-[min-content_1fr] gap-8 p-6 items-center">
          <div className="">
            <MoneyIcon />
          </div>
          <CardContent className="p-0">
            <h2 className="font-semibold text-lg">₹{journalData.amount}</h2>
            <p className="text-md">Bill amount</p>
          </CardContent>
        </Card>
        <Card className="grid grid-cols-[min-content_1fr] gap-8 p-6 items-start">
          <div className="">
            <DoctorAdviceIcon />
          </div>
          <CardContent className="p-0">
            <p className="text-md">Doctor advice</p>
            <h2 className="text-lg">{journalData.advice}</h2>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
