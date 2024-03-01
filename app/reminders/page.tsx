import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlusIcon } from '@radix-ui/react-icons';
import { getAllRemindersByDate } from './actions';
import ReminderCardsContainer from './components/ReminderCardsContainer';

export interface Reminder {
  id: string;
  startDate: string;
  endDate: string;
  medicineName: string;
  medicineTime: 'before' | 'after';
  medicineTimestamp: string;
}

export default async function RemindersPage({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  console.log(searchParams);

  const reminders = await getAllRemindersByDate(
    new Date(+searchParams.year, +searchParams.month, +searchParams.date)
  );

  console.log('fetched reminders', reminders);

  return (
    <>
      <div className="bg-primary pb-12 rounded-b-2xl pt-12 px-8">
        <h1 className="text-white text-3xl font-bold mb-4">
          <span className="text-xl">Medicine reminders</span>
        </h1>
        <div className="grid grid-cols-4 gap-2 mb-6">
          <Card>
            <CardHeader>
              <CardTitle>29</CardTitle>
              <CardDescription>Feb 2024</CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-violet-300">
            <CardHeader>
              <CardTitle>1</CardTitle>
              <CardDescription>March 2024</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>2</CardTitle>
              <CardDescription>March 2024</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>3</CardTitle>
              <CardDescription>March 2024</CardDescription>
            </CardHeader>
          </Card>
        </div>
        <Link href="/reminders/new">
          <Button className="w-full bg-white text-primary">
            Add new reminder
            <PlusIcon className="h-4 w-4" />
          </Button>
        </Link>
      </div>
      <div className="mb-6 flex justify-between items-center"></div>
      <ReminderCardsContainer reminders={reminders || []} />
    </>
  );
}
