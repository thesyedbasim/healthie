import ChevronRightIcon from '@/app/components/icons/ChevronRightIcon';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Journal } from '../page';
import Link from 'next/link';

export default function JournalCard({ id, hospitalName, date }: Journal) {
  console.log(date);
  return (
    <Link href={`/journals/${id}`}>
      <Card className="grid grid-flow-row gap-0">
        <CardHeader>
          <CardTitle className="text-lg flex justify-between items-start">
            {hospitalName} <ChevronRightIcon />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{date}</CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}
